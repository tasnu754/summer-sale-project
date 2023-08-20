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

    const finalTotal = document.getElementById('final-total');
    const finalTotalVal = finalTotal.innerText;
    const finalTotalInt = parseFloat(finalTotalVal);

    const itemCost = target.childNodes[3].childNodes[5].childNodes[1];
    const itemCost1 = itemCost.innerText;
    const itemCostVal = parseFloat(itemCost1);
    // console.log(typeof itemCostVal)

    const totalPrice1 = totalPriceFinal  + itemCostVal;
    const totalPrice2 = parseFloat(totalPrice1)
    totalPrice.innerText = totalPrice2.toFixed(2);

    const finalTotal1 = finalTotalInt + itemCostVal;
    const finalTotal2 = parseFloat(finalTotal1);
    finalTotal.innerText = finalTotal2.toFixed(2);



    const purchaseBtn = document.getElementById('purchase-btn');
    const applybtn = document.getElementById('apply-btn');


    if(totalPrice.innerText > 0){
        purchaseBtn.removeAttribute('disabled');
    }

    if(totalPrice.innerText >= 200){
        applybtn.removeAttribute('disabled');
    }
    
   
}



document.getElementById('apply-btn').addEventListener('click' , function(){
    const inputremove = document.getElementById('input-code');
    const code = inputremove.value;
    inputremove.value = '';

    const totalPrice = document.getElementById('total-price');
    const totalVal = totalPrice.innerText;
    const totalPriceInt = parseFloat(totalVal);
    const totalPriceFinal = totalPriceInt;

    if(code == 'SELL200'){
        const dis = document.getElementById('dis');

        const discount = 0.2 * totalPriceFinal;
        dis.innerText = discount.toFixed(2);

        const finalTotal = document.getElementById('final-total');
       

        const finalTotalLast = totalPriceFinal - discount;
        finalTotal.innerText = finalTotalLast.toFixed(2);

    }
    else{
        alert("Please enter correct code");
    }
})

function goHome(){
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = '00';

    const finalTotal = document.getElementById('final-total');
    finalTotal.innerText = '00';

    const list = document.getElementById('list');
    list.removeChild(list.children[0]);

    location.href = 'index.html';

}