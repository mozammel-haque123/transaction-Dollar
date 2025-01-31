document.getElementById('bitin').addEventListener('click', function(event){
event.preventDefault()

const num = document.getElementById('input-num').value
// console.log(num.value)

const pin = document.getElementById('pin-num').value
// console.log(pin.value)

if(num === '7' && pin === '123'){
    console.log('badi valo kore number de login');
    window.location.href = './home.html';
}else{
    alert('badi valo kore pin num de');
}

})