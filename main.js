//Seleccionadores
let especialButton = document.querySelector('.switch');
let buttonCircle = document.querySelector('.circle');
let planBasic = document.querySelector(".Price-monthly_basic");
let planProfessional = document.querySelector(".Price-monthly_professional");
let planMaster = document.querySelector(".Price-monthly_master");

//Variables globales
var priceBasic = 19.99;
var priceProfessional = 24.99;
var priceMaster = 39.99;
let buttonSite = "Monthly";

//funciones de cambio
function pricesMonthly(){
  planBasic.innerHTML = "&dollar;" + priceBasic;
  planProfessional.innerHTML = "&dollar;" + priceProfessional;
  planMaster.innerHTML = "&dollar;" + priceMaster;
}

function pricesAnually(){
  planBasic.innerHTML = "&dollar;" + (priceBasic * 10).toFixed(2);
  planProfessional.innerHTML = "&dollar;" + (priceProfessional * 10).toFixed(2);
  planMaster.innerHTML = "&dollar;" + (priceMaster * 10).toFixed(2);
}

function handleButton(){
  if (buttonSite === "Monthly"){
    buttonSite = "Anual";
    especialButton.style.justifyContent = "flex-start";
    pricesAnually();
  }
  else{
    buttonSite = "Monthly";
    especialButton.style.justifyContent = "flex-end";
    pricesMonthly();
  }
}
pricesMonthly();

