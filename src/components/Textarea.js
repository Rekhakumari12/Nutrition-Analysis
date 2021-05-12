const Textarea = ({ getInput, onSubmit, newRecipe, input,analysis}) => {
  return (
      <div className=" left_area col-md-6 col-sm-12 mt-3">
       <p> <textarea placeholder="eg:1 cup rice" onChange={getInput} rows={10} cols={25} spellCheck={true} className="textarea form-control mt-3" style={{color:"#212529"}} defaultValue= {input}> 
      </textarea><br/>
      </p>
      <p>
        <button type="button" className="btn btn-success btn-sm" onClick={onSubmit}>Analysis</button>
        &nbsp;&nbsp;{analysis ? <button tupe="button" className="btn btn-success btn-sm" onClick={newRecipe}>New Recipe</button> : ""}
      </p>
      {/* <div className="demo_result">
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th>Qty</th>
                <th>Unit</th>
                <th>Food</th>
                <th>Calories</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <th>cup</th>
                <th>rice</th>
                <th>702 kcal</th>
                <th>195 g</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
      </div>
  )

}
export default Textarea;

