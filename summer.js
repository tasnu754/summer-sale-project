let count = 0;

function cardClick(target){
    
    const itemName = target.childNodes[3].childNodes[3].innerText;

    const p = document.createElement('p');
    count++;
    p.innerText = count + "." + " " + itemName;

    let itemList = document.getElementById('item-list');
    itemList.appendChild(p);

    const totalPrice = document.getElementById('total-price');
    const totalVal = totalPrice.innerText;
    const totalPriceInt = parseFloat(totalVal);
    const totalPriceFinal = totalPriceInt;
    // console.log(typeof totalPriceFinal);

    const itemCost = target.childNodes[3].childNodes[5].childNodes[1];
    const itemCost1 = itemCost.innerText;
    const itemCostVal = parseFloat(itemCost1);
    // console.log(typeof itemCostVal)

    const totalPrice1 = totalPriceFinal  + itemCostVal;
    const totalPrice2 = parseFloat(totalPrice1)
    totalPrice.innerText = totalPrice2.toFixed(2);

    const purchaseBtn = document.getElementById('purchase-btn');


    if(totalPrice.innerText > 0){
        purchaseBtn.removeAttribute('disabled');
    }
    
   
}

document.getElementById('input-code').addEventListener('keyup' , function(event){
    const code = event.target.value;

    const applybtn = document.getElementById('apply-btn');

    if(code == 'SELL200'){
        applybtn.removeAttribute('disabled');
    }
    else{
        applybtn.setAttribute('disabled' , true);
    }

})