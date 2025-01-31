document.getElementById('cash-button').addEventListener('click', function(event){
    event.preventDefault();
    const cashInput = document.getElementById('cash-mony-input').value

    const cashPin = document.getElementById('cash-pin-number').value;

    if(cashPin === '123'){
        const morni = document.getElementById('balanc').innerText;
        const updet = parseFloat(morni) - parseFloat(cashInput);
      
        document.getElementById('balanc').innerText = updet;
    }else{
        alert('carrent gut number')
    }
})