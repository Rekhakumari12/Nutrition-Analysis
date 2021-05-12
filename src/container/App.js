import React, { Component } from "react";
import InputSection from '../components/InputSection';
import ResultSection from '../components/ResultSection';
import Textarea from '../components/Textarea';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../components/Navgation';
import Tilt from '../../node_modules/react-tilt/dist/tilt';
import toSingleObject from '../components/toSingleObject';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.key = 'cf8f1465006d7bb687029e75024f1523';
    this.appId = '568eb023';
    this.data = '';
    this.state = {
      input: '1 cup rice\n10 oz chickpeas',
      error: false,
      resp: '',
      analysis:false
    }
  }
  onChange = (e) => {

    this.setState({ input: e.target.value });
  }
  error = () => {
    this.setState({ error: true });
    setTimeout(async () => {
      await this.setState({ error: false })
    }, 5000);
  }
  onSubmit = async() => {
    await this.error();
    if (this.state.input) {
      this.setState({ analysis: true });
      this.fetchData(this.state.input);
    } else {
      this.setState({ resp: 0 });
      alert("Please enter recipe");
    }
  }
  fetchData = async (ingr) => {
    let inputArr = ingr.split('\n').map(item => {
      return item;
    })
    console.log(inputArr);
    Promise.all(inputArr.map(item => {
      return fetch(`https://api.edamam.com/api/nutrition-data?app_id=${this.appId}&app_key=${this.key}&ingr=${item}`)
        .then(response => response.json())
        .then((single_item) => {
          return single_item;
        })
        .catch((e) => {
          console.log(e);
          return this.error();
        })
    }))
      .then((values) => {
        console.log(values);
        let resp = toSingleObject(values);
        this.setState({resp});
    });
  }
  newRecipe = () => {
    window.location.reload();
  }
  render() {
    return (
      <div id="main" className="conatiner-fluid inside">
         <Navigation/>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-md-offset-1">
              <div className="col-md-12">
                <InputSection cal={this.state.resp.calories}>
                  <Textarea getInput={this.onChange} input={this.state.input} onSubmit={this.onSubmit} newRecipe={this.newRecipe} analysis={this.state.analysis} />
                {this.state.resp? <ResultSection resp={this.state.resp} /> : ""}
                </InputSection>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
