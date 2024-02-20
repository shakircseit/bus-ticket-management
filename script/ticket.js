function scrollToSpecificSection(){
    const section=document.getElementById('bus-ticket');
    section.scrollIntoView({ behavior: "smooth" });
}


// buttonActive('coupon-input','btn-apply');
// document.getElementById('coupon-input').addEventListener('keyup',function (event){
//  const value=event.target.value;
//  CouponActive(value,'btn-apply');
// })

var buttons = document.getElementsByClassName("seat");

// Add event listener to each seat
 let counter=0;
 for(const button of buttons) {
    button.addEventListener("click", function(event) {
        counter=counter+1;
        // item Summary
        const perTicketPrice=getElementValueById('ticket-price');
        const classType='Economy';
        const seatNo=event.target.innerText; 
        const totalprice=perTicketPrice*counter;
        const grandTotal=totalprice;
        if(counter>4){
            return showAlert();
        }
        // create list item
        const itemSummaryContainer=document.getElementById('item-summary-container');
        const li=document.createElement('li');
        const p1=document.createElement('p');
               
        const p2=document.createElement('p');
        const p3=document.createElement('p');
        p1.innerText=seatNo;
        p2.innerText=classType;
        p3.innerText=perTicketPrice;
        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(p3);
        itemSummaryContainer.appendChild(li);
        
        this.style.backgroundColor = "#1DD100";
        this.style.color='white';
        this.setAttribute('disabled',true);
   //     remaining seat count
        function remainingSeat(elementId){
            const presentSeat=getElementValueById(elementId);
            const remainngSeatNumber=presentSeat-1;
            return remainngSeatNumber;
           }
            const remainingSeatNumber=remainingSeat('left-seat');
            // display remaing seat
           SetTextInElementById(remainingSeatNumber,'left-seat');

        //    display total selected
        SetTextInElementById(counter,'selected-seat-no');
        SetTextInElementById(totalprice,'total-price');
        SetTextInElementById(grandTotal,'grand-total');

        // coupon active
        CouponActive(counter,'btn-apply');
    });
}

// button click or not


const buttonTest = document.getElementsByClassName('seat');
const nextButton=document.getElementById('next');
const numberInput=document.getElementById('number-input');
 let increment=0;
// for (const button of buttonTest) {

//    button.addEventListener("click", function() {
//         increment = increment + 1;
//         if (counter > 4) {
//             return showAlert();
//         }
//     });

// }

numberInput.addEventListener('input',function(event){
    const seatSelect=document.getElementById('selected-seat-no');
    const seatSelectString=seatSelect.innerText;
    const seatSelectvalue=parseInt(seatSelectString);
    console.log(seatSelectvalue);
    const value=event.target.value;
    console.log('value length:',value.length);

    if(seatSelectvalue>0 && value.length>0 && value>0){
        nextButton.removeAttribute('disabled');
    }

}
)

// input triggered event
document.getElementById('btn-apply').addEventListener('click',function(event){
 const inputFiledValue=event.target.parentNode.childNodes[1].value;
 const triggeredElement=event.target.parentNode;
 const totalprice=getElementValueById('total-price');
 const discount=discountedPrice(inputFiledValue,totalprice);
 const grandTotal=totalprice-discount;
//  validation for Error Coupon code
 if(isNaN(grandTotal)){
    grandTotal=totalprice;
    return "error";
 }
 const dottedString='.............'
 const discountContainer=document.getElementById('discount-price');
 
 const li=document.createElement('li');
 const p1= document.createElement('p');
 const p2=document.createElement('p');
 const p3=document.createElement('p');
 const h1=document.createElement('hr')
 p1.innerText='Discount';
 p2.innerText=dottedString;
 p3.innerText=discount;
 li.appendChild(p1);
 li.appendChild(p2);
 li.appendChild(p3);
 discountContainer.appendChild(li);
 discountContainer.appendChild(h1);
 if(discount>0){
    discountContainer.classList.remove('hidden');
    triggeredElement.classList.add('hidden');
 }
 

 SetTextInElementById(grandTotal,'grand-total');
})



