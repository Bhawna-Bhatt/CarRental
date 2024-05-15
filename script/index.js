"use strict"

window.onload=init;

function init() {
    let totalBtn = document.getElementById("totalBtn");
    
    totalBtn.onclick = onTotalBtnClicked;
}


function onTotalBtnClicked(){
    
/* Code for options */
    let options = 0;
    let carRental = document.getElementById("carRental");

    carRental.innerText="29.99";
    let carRentalNumber = 29.99;        
    let toll = document.getElementById("toll");
    if (toll.checked){
        options += 3.95;
    }

    let gps = document.getElementById("gps");
    if (gps.checked){
        options += 2.95;
    }
    

    let roadside = document.getElementById("roadside");
    if (roadside.checked){
        options += 2.95;
    }
    options = options.toFixed(2)

    let optiontotal = document.getElementById("optiontotal")
    optiontotal.innerText = options.toString();

    /* Code for under 25 */
     let noBtn = document.getElementById("noBtn");
     let yesBtn = document.getElementById("yesBtn");

     let surcharge = 0;
     if (yesBtn.checked) {
        surcharge += 1.3 * carRentalNumber;
     }
     
    surcharge =surcharge.toFixed(2);
    let surchargeTotal = document.getElementById("surcharge");
    surchargeTotal.innerHTML=surcharge.toString()
    
    /* total calculation */

    let totaldue = 0.00;

    totaldue = (Number(surcharge) + Number(options) + Number(carRentalNumber));
    
    
    let totalonForm = document.getElementById("totaldue")
    totalonForm.innerText = totaldue.toString();
    /*let options = document.getElementById("options")

    /*options = getElementById("options");
    under25 = getElementById("under25");*/
}



	


