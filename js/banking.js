function getInputValu(inputId){
    const amountValue =parseFloat(document.getElementById(inputId).value);
    document.getElementById(inputId).value='';
    return amountValue;
}
function updareTotalFild(totalFieldId,amount){
    const privesTotal = parseFloat(document.getElementById(totalFieldId).innerText);
    if (amount < 0){
        document.getElementById(totalFieldId).innerText=privesTotal-amount;
    }
    else document.getElementById(totalFieldId).innerText=privesTotal+amount;
    document.getElementById('main-blance').innerText= getCurantBlance() + amount;  
}
function getCurantBlance(){
    const PreviousBlanceTotel =parseFloat(document.getElementById('main-blance').innerText);
    return PreviousBlanceTotel;
}
document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositAmount =getInputValu('deposit-input');
    if(depositAmount > 0){
        updareTotalFild('deposit-total',depositAmount);
    } 
});
document.getElementById('widthdraw-btn').addEventListener('click',function(){
    const withdrawAmount = getInputValu('widthdraw-input');
    if(withdrawAmount > 0 &&withdrawAmount< getCurantBlance()){
        updareTotalFild('widtdraw-total',-withdrawAmount)
    }  
});












/* 


document.getElementById('deposit-btn').addEventListener('click',function(){
    // const inputField =document.getElementById('deposit-input');
    // const depositAmountText =inputField.value;
    // const depositAmount =parseFloat(depositAmountText);
    const depositAmount =getInputValu();

    // get curent deposit 
    const depositTotal =document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const privesDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText=privesDepositTotal+depositAmount;

    //updare blance
    const blanceTotel = document.getElementById('main-blance');
    const blanceTotelText =blanceTotel.innerText;
    const PreviousBlanceTotel =parseFloat(blanceTotelText);
    blanceTotel.innerText= PreviousBlanceTotel+depositAmount;

    
});


//handel withdraw button
document.getElementById('widthdraw-btn').addEventListener('click',function(){
    const withdrawInput = document.getElementById('widthdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    //update withdrow Total
   const widthdrawTotal =document.getElementById('widtdraw-total');
   const previousWidthdrawTotalText = widthdrawTotal.innerText;
   const previousWidthdrawTotal = parseFloat(previousWidthdrawTotalText);
   widthdrawTotal.innerText=withdrawAmount+previousWidthdrawTotal;

   //update blance after withdraw
   const blanceTotel = document.getElementById('main-blance');
   const blanceTotelText =blanceTotel.innerText;
   const PreviousBlanceTotel =parseFloat(blanceTotelText);
   blanceTotel.innerText= PreviousBlanceTotel-withdrawAmount;

    //clear input Fild
    withdrawInput.value=''; */