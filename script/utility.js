function CouponActive(inputValue,buttonId){
    const button=document.getElementById(buttonId);
    if(inputValue===4){
        button.removeAttribute('disabled')
    }
    else{
        button.setAttribute('disabled',true)
    }
}
let discount;
function discountedPrice(inputValue,total){
   
 if(inputValue==='NEW15'){
    discount=total*15/100;
    return discount;
 }
 else if(inputValue==='Couple 20'){
    discount=total*20/100;
    return discount;
 }
 else{
     return alert('Enter Wrong Code');
      
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
