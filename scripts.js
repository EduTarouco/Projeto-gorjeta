function calculateTip(event) {
event.preventDefault();
let bill = document.getElementById('bill').value;
let serviceQual = document.getElementById('serviceQual').value;
let numberofP = document.getElementById('people').value;

if(bill == '' | serviceQual == 0){
    alert('Preencha os valores');
    return;
}
if(numberofP =='' | numberofP <= 1){
    numberofP = 1;
    document.getElementById('each').style.display = 'none';
} else{
    document.getElementById('each').style.display = 'block'; 
}
 let total = (bill * serviceQual) / numberofP;
 total = total.toFixed(2);
 document.getElementById('tip').innerHTML = total;
 document.getElementById('totalTip').style.display = 'block';
}

document.getElementById('totalTip').style.display = 'none';
document.getElementById('each').style.display = 'none';

document.getElementById('tipsform').addEventListener('submit', calculateTip);