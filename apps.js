function productCountHandaler(product, isIncrease) {
    const caseInput = document.getElementById(product + '-count');
    const caseCount = parseInt(caseInput.value);
    let caseNewCount = caseCount;
    if (isIncrease == true) {
        caseNewCount = caseCount + 1;
    }
    if (isIncrease == false && caseCount > 0) {
        caseNewCount = caseCount - 1;
    }
    caseInput.value = caseNewCount;
    //const caseTotal = caseNewCount * 1219;
    let caseTotal = caseNewCount;
    if (product == 'phone') {
        caseTotal = caseNewCount * 1219;
    }
    if (product == 'case') {
        caseTotal = caseNewCount * 59;
    }
    document.getElementById(product + '-total').innerText = caseTotal;
    calculateTotal();
}
function calculateTotal() {
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');

    const subTotalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById('sub-total').innerText = subTotalPrice;

    const calculateTax = Math.round((subTotalPrice / 100) * 10);
    document.getElementById('tax').innerText = calculateTax;
    const grandTOtalPrice = subTotalPrice + calculateTax;
    document.getElementById('grand-total').innerText = grandTOtalPrice;
    

}

function getInputValue(product){
    const productInput = document.getElementById(product +'-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}


// function phoneCountHandaler(isIncrease) {
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     let phoneNewCount = phoneCount;
//     if (isIncrease == true) {
//         phoneNewCount = phoneCount + 1;
//     }
//     if (isIncrease == false && phoneCount > 0) {
//         phoneNewCount = phoneCount - 1;
//     }
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1229;
//     document.getElementById('phone-total').innerText = phoneTotal;
// }

// function caseCountHandaler(isIncrease) {
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     let caseNewCount = caseCount;
//     if (isIncrease == true) {
//         caseNewCount = caseCount + 1;
//     }
//     if (isIncrease == false && caseCount > 0) {
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = caseTotal;
// }












// document.getElementById('case-increase').addEventListener('click', function(){
    // const caseInput = document.getElementById('case-count');
    // const caseCount = parseInt(caseInput.value);
    // const caseNewCount = caseCount + 1;
    // caseInput.value = caseNewCount;
    // const caseTotal = caseNewCount * 59;
    // document.getElementById('case-total').innerText = caseTotal;
// });

// document.getElementById('case-decrease').addEventListener('click', function(){
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = caseTotal;
// });

















