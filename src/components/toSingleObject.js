const toSingleObject = (resp) => {
  let [
    totalDaily_fatUnit,
    totalNutrients_fatUnit,
    totalDaily_satfatUnit,
    totalNutrients_satfatUnit,
    totalDaily_choleUnit,
    totalNutrients_choleUnit,
    totalDaily_sodiumUnit,
    totalNutrients_fiberUnit,
    totalNutrients_sodiumUnit,
    totalDaily_carboUnit,//10
    totalNutrients_carboUnit,
    totalDaily_fiberUnit,
    totalNutrients_sugerUnit,
    totalNutrients_proteinUnit,
    totalDaily_proteinUnit,
    totalDaily_vitaminDUnit,
    totalNutrients_vitaminDUnit,
    totalNutrients_calciumUnit,
    totalDaily_calciumUnit,
    totalDaily_feUnit,
    totalNutrients_feUnit,
    totalNutrients_kUnit,
    totalDaily_kUnit
  ] = Array(22).fill("");
  let [
    calories,
    totalNutrients_fatQty,
    totalDaily_fatQty,
    totalDaily_satfatQty,
    totalNutrients_satfatQty,
    totalDaily_choleQty,
    totalNutrients_choleQty,
    totalDaily_sodiumQty,
    totalNutrients_sodiumQty,
    totalDaily_carboQty,//10
    totalNutrients_carboQty,
    totalNutrients_fiberQty,
    totalDaily_fiberQty,
    totalNutrients_sugerQty,
    totalNutrients_proteinQty,
    totalDaily_proteinQty,
    totalDaily_vitaminDQty,
    totalNutrients_vitaminDQty,
    totalNutrients_calciumQty,
    totalDaily_calciumQty,
    totalDaily_feQty,
    totalNutrients_feQty,
    totalNutrients_kQty,
    totalDaily_kQty
    ] = Array(24).fill(0);

  resp.forEach(object => {
    if (object.error) {
      alert("Enter each ingredient on a new line.");
      window.location.reload();
   }
    calories += object.calories ? object.calories : 0;
    let td = object.totalDaily;
    let tn = object.totalNutrients;
    
    // totalDaily
    totalDaily_fatQty += td.FAT ? Math.round(td.FAT.quantity) : 0;
    totalDaily_fatUnit = td.FAT ? td.FAT.unit : "%";
    totalDaily_satfatQty += td.FASAT ? Math.round(td.FASAT.quantity) : 0;
    totalDaily_satfatUnit = td.FASAT ? td.FASAT.unit : "%";
    totalDaily_choleQty += td.CHOLE ? Math.round(td.CHOLE.quantity) : 0;
    totalDaily_choleUnit = td.CHOLE ? td.CHOLE.unit : "%";
    totalDaily_sodiumQty += td.NA ? Math.round(td.NA.quantity) : 0;
    totalDaily_sodiumUnit = td.NA ? td.NA.unit : "mg";
    totalDaily_carboQty += td.CHOCDF ? Math.round(td.CHOCDF.quantity) : 0;
    totalDaily_carboUnit = td.CHOCDF ? td.CHOCDF.unit : "g";
    totalDaily_fiberQty += td.FIBTG ? Math.round(td.FIBTG.quantity) : 0;
    totalDaily_fiberUnit = td.FIBTG ? td.FIBTG.unit : "%";
    totalDaily_proteinQty += td.PROCNT ? Math.round(td.PROCNT.quantity) : 0;
    totalDaily_proteinUnit = td.PROCNT ? td.PROCNT.unit : "%";
    totalDaily_vitaminDQty += td.VITD ? Math.round(td.VITD.quantity) : 0;
    totalDaily_vitaminDUnit = td.VITD ? td.VITD.unit : "%";
    totalDaily_calciumQty += td.CA ? td.CA.quantity : 0;
    totalDaily_calciumUnit = td.CA ? td.CA.unit : "%";
    totalDaily_feQty += td.FE ? td.FE.quantity : 0;
    totalDaily_feUnit = td.FE ? td.FE.unit : "%";
    totalDaily_kQty += td.K ? td.K.quantity : 0;
    totalDaily_kUnit = td.K ? td.K.unit : "%";
    // totalNutrients
    totalNutrients_fatQty += tn.FAT ? tn.FAT.quantity: 0;
    totalNutrients_fatUnit = tn.FAT ? tn.FAT.unit : "%";
    totalNutrients_satfatQty += tn.FASAT ? tn.FASAT.quantity: 0;
    totalNutrients_satfatUnit = tn.FASAT ? tn.FASAT.unit : "mg";
    totalNutrients_sodiumQty += tn.NA ? tn.NA.quantity: 0;
    totalNutrients_sodiumUnit = tn.NA ? tn.NA.unit : "mg";
    totalNutrients_carboQty += tn.CHOCDF ? tn.CHOCDF.quantity: 0;
    totalNutrients_carboUnit = tn.CHOCDF ? tn.CHOCDF.unit : "g";
    totalNutrients_fiberQty += tn.FIBTG ? tn.FIBTG.quantity: 0;
    totalNutrients_fiberUnit = tn.FIBTG ? tn.FIBTG.unit : "-";
    totalNutrients_sugerQty += tn.SUGER ? tn.SUGER.quantity: 0;
    totalNutrients_sugerUnit = tn.SUGER ? tn.SUGER.unit : "g";
    totalNutrients_proteinQty += tn.PROCNT ? tn.PROCNT.quantity : 0;
    totalNutrients_proteinUnit = tn.PROCNT ? tn.PROCNT.unit : "g";
    totalNutrients_vitaminDQty += tn.VITD ? tn.VITD.quantity : 0;
    totalNutrients_vitaminDUnit = tn.VITD ? tn.VITD.unit : "µg";
    totalNutrients_calciumQty += tn.CA ? tn.CA.quantity : 0;
    totalNutrients_calciumUnit = tn.CA ? tn.CA.unit : "mg";
    totalNutrients_feQty += tn.FE ? tn.FE.quantity : 0;
    totalNutrients_feUnit = tn.FE ? tn.FE.unit : "mg";
    totalNutrients_kQty += tn.K ? tn.K.quantity : 0;
    totalNutrients_kUnit = tn.K ? tn.K.unit : "mg";
  })
  const data = {
    calories: calories,
    totalDaily: {
      FAT: {
        quantity: totalDaily_fatQty,
        unit:totalDaily_fatUnit
      },
      FASAT: {
        quantity: totalDaily_satfatQty,
        unit:totalDaily_satfatUnit
      },
      CHOLE: {
        quantity: totalDaily_choleQty,
        unit:totalDaily_choleUnit
      },
      FIBTG: {
        quantity: totalDaily_fiberQty,
        unit:totalDaily_fiberUnit
      },
      NA: {
        quantity: totalDaily_sodiumQty,
        unit:totalDaily_sodiumUnit
      },
      CHOCDF: {
        quantity: totalDaily_carboQty,
        unit:totalDaily_carboUnit
      },
      PROCNT: {
        quantity: totalDaily_proteinQty,
        unit:totalDaily_proteinUnit
      },
      VITD: {
        quantity: totalDaily_vitaminDQty,
        unit:totalDaily_vitaminDUnit
      },
      CA: {
        quantity: totalDaily_calciumQty,
        unit:totalDaily_calciumUnit
      },
      FE: {
        quantity: totalDaily_feQty,
        unit:totalDaily_feUnit
      },
      K: {
        quantity: totalDaily_kQty,
        unit:totalDaily_kUnit
      }
    },
    totalNutrients: {
      FAT: {
        quantity: totalNutrients_fatQty,
        unit:totalNutrients_fatUnit
      },
      FASAT: {
        quantity: totalNutrients_satfatQty,
        unit:totalNutrients_satfatUnit
      },
      CHOLE: {
        quantity: totalNutrients_choleQty,
        unit:totalNutrients_choleUnit
      },
      FIBTG: {
        quantity: totalNutrients_fiberQty,
        unit: totalNutrients_fiberUnit
      },
      NA: {
        quantity: totalNutrients_sodiumQty,
        unit: totalNutrients_sodiumUnit
      },
      CHOCDF: {
        quantity: totalNutrients_carboQty,
        unit:totalNutrients_carboUnit
      },
      SUGER: {
        unit: totalNutrients_sugerUnit,
        quantity:totalNutrients_sugerQty
      },
      PROCNT: {
        quantity: totalNutrients_proteinQty,
        unit:totalNutrients_proteinUnit
      },
      VITD: {
        quantity: totalNutrients_vitaminDQty,
        unit:totalNutrients_vitaminDUnit
      },
      CA: {
        quantity: totalNutrients_calciumQty,
        unit:totalNutrients_calciumUnit
      },
      FE: {
        quantity: totalNutrients_feQty,
        unit:totalNutrients_feUnit
      },
      K: {
        quantity: totalNutrients_kQty,
        unit:totalNutrients_kUnit
      }
    }
  }
  return data;
}
export default toSingleObject;