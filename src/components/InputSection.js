import '../container/App.css';
import '../components/style.css';
import Message from '../components/Message';
import React from 'react';
const reload = () => {
  return window.location.reload();
}
const InputSection = (props) => {
  return (
    <div className="input_area">
        <div className="row">
          <div className="col-md-12">
            <h1>Nutrition Analysis API Demo</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 content_area text-center demo_ana" style={{display:"block"}}>
            <p>Enter an ingredient list list for what you are cooking, like <span className="text-success">"1 cup rice, 10 oz chickpeas"
            </span>, etc.<br />Enter each ingredient on a new line.</p>
            {props.cal=== 0 ?
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                      <Message />
                    <button type="button" className="btn-close" onClick={reload} data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                    : ""}
            {props.children[0]}
            {props.children[1]}
          </div>
        </div>
    </div>
  )
}
export default InputSection;
