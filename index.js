// getting data from 	https://api.adviceslip.com/advice

var btn = document.getElementById("button");
var adv_id = document.getElementById("advice_id");
var advice = document.getElementById("advice");

function getAdvice () {
    
    var requestOptions ={
        method: 'GET',
        redirect: 'follow'
    }

    fetch('https://api.adviceslip.com/advice', requestOptions)
        .then(response => response.json())
        .then(result => {
            adv_id.textContent = `Advice #${result.slip.id}`
            advice.textContent = `"${result.slip.advice}"`
        })
        .catch(error => console.log('error', error));

}

window.addEventListener("load", getAdvice);
btn.addEventListener("click", getAdvice);

