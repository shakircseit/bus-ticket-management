function CouponActive(inputValue,buttonId){
    const button=document.getElementById(buttonId);
    if(inputValue==='NEW15' ||inputValue==='Couple 20'){
        button.removeAttribute('disabled')
    }
    else{
        button.setAttribute('disabled',true)
    }
}

function remainingSeat(){
    const remainingSeatString=document.getElementById('left-seat');

}
function showAlert() {
    alert("You Can Not Select  More Than 4 Seats!");
}

function getElementValueById(elementId){
    const elementField=document.getElementById(elementId);
    const elementString=elementField.innerText;
    const elementValue=parseInt(elementString);
    return elementValue;

}
function SetTextInElementById(elementValue,elementId){
    const elementField=document.getElementById(elementId);
    elementField.innerText=elementValue;
}
