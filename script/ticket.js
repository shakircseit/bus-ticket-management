function scrollToSpecificSection(){
    const section=document.getElementById('bus-ticket');
    section.scrollIntoView({ behavior: "smooth" });
}


// buttonActive('coupon-input','btn-apply');
document.getElementById('coupon-input').addEventListener('keyup',function (event){
 const value=event.target.value;
 CouponActive(value,'btn-apply');
})

var buttons = document.getElementsByClassName("seat");

// Add event listener to each seat
 let counter=0;
 for(const button of buttons) {
    button.addEventListener("click", function() {
        counter=counter+1;
        
        if(counter>4){
            return showAlert();
        }
        this.style.backgroundColor = "#1DD100";
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
    });
}

// button click or not


const buttonTest = document.getElementsByClassName('seat');
const nextButton=document.getElementById('next');
const numberInput=document.getElementById('number-input');
 let increment=0;
for (const button of buttonTest) {

   button.addEventListener("click", function() {
        increment = increment + 1;
        console.log('inside Eventlistener', counter);
        if (counter > 4) {
            return showAlert();
        }
    });

}

numberInput.addEventListener('input',function(event){
    const seatSelect=document.getElementById('selected-seat-no');
    const seatSelectString=seatSelect.innerText;
    const seatSelectvalue=parseInt(seatSelectString);
    console.log(seatSelectvalue);
    const value=event.target.value;
    if(seatSelectvalue>0){
        nextButton.removeAttribute('disabled');
    }

}
)



