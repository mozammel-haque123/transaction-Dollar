document.getElementById('add-button').addEventListener('click', function(event){
event.preventDefault()
const inp = document.getElementById('add-mony-input').value;
console.log(inp)

const pin = document.getElementById('pin-number').value;
console.log(pin)

if(pin === '123'){
 
    const balances = document.getElementById('balanc').innerText;
    const balidet = parseFloat(balances) + parseInt(inp);
    // console.log(balidet);
    document.getElementById('balanc').innerText = balidet;
}else{
    alert('carrent pin number')
}

})