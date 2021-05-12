import React from 'react';
const ResultSection = ({ resp }) => {
  let nutri = resp.totalNutrients;
  let dailyNutri = resp.totalDaily;
  let cal = resp.calories;
  let fat = {
    nQty: nutri.FAT? nutri.FAT.quantity : 0,
    nUnit: nutri.FAT? nutri.FAT.unit : "g",
    dQty: dailyNutri.FAT?dailyNutri.FAT.quantity:0,
    dUnit: dailyNutri.FAT?dailyNutri.FAT.unit:"%"
  };
  let satFat = {
    nQty: nutri.FASAT?nutri.FASAT.quantity:0,
    nUnit: nutri.FASAT?nutri.FASAT.unit:"g",
    dQty: dailyNutri.FASAT?dailyNutri.FASAT.quantity:0,
    dUnit: dailyNutri.FASAT?dailyNutri.FASAT.unit:"%"
  };
  let chole = {
    nQty: nutri.CHOLE?nutri.CHOLE.quantity:0,
    nUnit: nutri.CHOLE?nutri.CHOLE.unit:"mg",
    dQty: dailyNutri.CHOLE?dailyNutri.CHOLE.quantity:0,
    dUnit: dailyNutri.CHOLE?dailyNutri.CHOLE.unit:"%"
  };
  let sodium = {
    nQty: nutri.NA?nutri.NA.quantity:0,
    nUnit: nutri.NA?nutri.NA.unit:"g",
    dQty: dailyNutri.NA?dailyNutri.NA.quantity:0,
    dUnit: dailyNutri.NA?dailyNutri.NA.unit:"mg"
  };
  let carbo = {
    nQty: nutri.CHOCDF?nutri.CHOCDF.quantity:0,
    nUnit: nutri.CHOCDF? nutri.CHOCDF.unit:"-",
    dQty: dailyNutri.CHOCDF?dailyNutri.CHOCDF.quantity:0,
    dUnit: dailyNutri.CHOCDF?dailyNutri.CHOCDF.unit:"-"
  };
 
  var fiber = {
    nQty: nutri.FIBTG?nutri.FIBTG.quantity:0,
    nUnit: nutri.FIBTG?nutri.FIBTG.unit:"g",
    dQty: dailyNutri.FIBTG?dailyNutri.FIBTG.quantity:0,
    dUnit: dailyNutri.FIBTG?dailyNutri.FIBTG.unit:"%"
  };
  var suger = {
    nQty: nutri.SUGAR?nutri.SUGAR.quantity:0,
    nUnit: nutri.SUGAR?nutri.SUGAR.unit:"g"
  };
  let protein = {
    nQty: nutri.PROCNT?nutri.PROCNT.quantity:0,
    nUnit: nutri.PROCNT?nutri.PROCNT.unit:"g",
    dQty: dailyNutri.PROCNT?dailyNutri.PROCNT.quantity:0,
    dUnit: dailyNutri.PROCNT?dailyNutri.PROCNT.unit:"%"
  };
  let vitaminD = {
    nQty: nutri.VITD?nutri.VITD.quantity:0,
    nUnit: nutri.VITD?nutri.VITD.unit:"µg",
    dQty: dailyNutri.VITD?dailyNutri.VITD.quantity:0,
    dUnit: dailyNutri.VITD?dailyNutri.VITD.unit:"%"
  };
  let ca = {
    nQty: nutri.CA?nutri.CA.quantity:0,
    nUnit: nutri.CA?nutri.CA.unit:"mg",
    dQty: dailyNutri.CA? dailyNutri.CA.quantity:0,
    dUnit: dailyNutri.CA?dailyNutri.CA.unit:"%"
  };
  let fe = {
    nQty: nutri.FE?nutri.FE.quantity:0,
    nUnit: nutri.FE?nutri.FE.unit:"mg",
    dQty: dailyNutri.FE?dailyNutri.FE.quantity:0,
    dUnit: dailyNutri.FE?dailyNutri.FE.unit:"%"
  };
  let k = {
    nQty: nutri.K?nutri.K.quantity:0,
    nUnit: nutri.K?nutri.K.unit:"mg",
    dQty: dailyNutri.K?dailyNutri.K.quantity:0,
    dUnit: dailyNutri.K?dailyNutri.K.unit:"%"
  }
  return (
    <div className="right_area col-md-6 col-sm-12">
      <div className="result">
        <div className="col-sm-12">
          <section className="performance_facts">
            <div className="facts_header">
              <h1>Nutrition Facts</h1>
            </div>
            <table className="fact_table">
              <thead>
                <tr>
                  <th colSpan={3} className="amps">Amount Per Serving</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th colSpan={2} className="val_cal"><b>Calories</b></th>
                  <td className="cal">{cal?cal:"-"}</td>
                </tr>
                <tr className="thick_row">
                  <td colSpan={3} className="small_info">% Daily Value*</td>
                </tr>
                <tr>
                  <th colSpan={2}><b>Total Fat </b>{+fat.nQty.toFixed(1)+" "+fat.nUnit}</th>
                  <td>{+fat.dQty.toFixed(0)+" "+fat.dUnit}</td>
                </tr>
                <tr>
                  <td className="blank_cell"></td>
                  <th>Saturated Fat  {satFat.nQty.toFixed(1)+" "+satFat.nUnit}</th>
                  <td><b>{satFat.dQty.toFixed(0)+" "+satFat.dUnit}</b></td>
                </tr>
                <tr>
                  <td className="blank_cell"></td>
                  <th>Trans Fat -</th>				
                  <td></td>
                </tr>
                <tr>
                  <th colSpan="2"><b>Cholesterol</b>  {chole.nQty.toFixed(1)+" "+chole.nUnit}</th>
                  <td><b>{chole.dQty.toFixed(0)+" "+chole.dUnit}</b></td>
                </tr>
                <tr>
                  <th colSpan="2"><b>Sodium</b> {sodium.nQty.toFixed(1)+" "+sodium.nUnit}</th>
                  <td><b>{sodium.dQty.toFixed(0)+" "+sodium.dUnit}</b></td>
                </tr>
                <tr>
                  <th colSpan="2"><b>Total Carbohydrate </b>{carbo.nQty.toFixed(1)+" "+carbo.nUnit}</th>
                  <td><b>{carbo.dQty.toFixed(0)+" "+carbo.dUnit}</b></td>
                </tr>
                <tr>
                  <td className="blank_cell"></td>
                  <th>Dietary Fiber  {fiber.nQty.toFixed(1)+" "+fiber.nUnit} </th>
                  <td><b>{fiber.dQty.toFixed(0)+" "+fiber.dUnit}</b></td>
                </tr>
               <tr>
                  <td className="blank_cell"></td>
                  <th>Total Sugars {suger.nQty.toFixed(1)+" "+suger.nUnit}</th>
                  <td></td>
                </tr>
                <tr>
                  <td className="blank_cell"></td>
                  <th>Includes - Added Sugars</th>
                  <td></td>
                </tr>
                <tr className="thick_end">
                  <th colSpan="2"><b>Protein</b> {protein.nQty.toFixed(1)+" "+protein.nUnit}</th>
                  <td><b>{protein.dQty.toFixed(0)+" "+protein.dUnit}</b></td>
                </tr>
              </tbody>
            </table>
            <table className="fact_table_grid">
              <tbody>
                <tr>
                  <th>Vitamin D {vitaminD.nQty.toFixed(1)+" "+vitaminD.nUnit}</th>
                  <td><b>{vitaminD.dQty.toFixed(0)+" "+vitaminD.dUnit}</b></td>
                </tr>
                <tr>
                  <th>Calcium {ca.nQty.toFixed(1)+" "+ca.nUnit}</th>
                  <td><b>{ca.dQty.toFixed(0)+" "+ca.dUnit}</b></td>
                </tr>
                <tr>
                  <th>Iron {fe.nQty.toFixed(1)+" "+fe.nUnit}</th>
                  <td><b>{fe.dQty.toFixed(0)+" "+fe.dUnit}</b></td>
                </tr>
                <tr className="thin-end">
                  <th>Potassium {k.nQty.toFixed(1)+" "+k.nUnit}</th>
                  <td><b>{k.dQty.toFixed(0)+" "+k.dUnit}</b></td>
                </tr>
              </tbody>
            </table>
            <p className="small-info mt-2" id="small-nutrition-info">*Percent Daily Values are based on a 2000 calorie diet</p>
          </section>
        </div>
      </div>
      </div>
  )
}
export default ResultSection;