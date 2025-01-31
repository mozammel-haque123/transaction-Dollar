document.getElementById('cash-click').addEventListener('click', function(){
    const cashAuto = document.getElementById('cash-sho');
cashAuto.classList.remove('hidden');

const ofAdd = document.getElementById('add-sho');
ofAdd.classList.add('hidden')
})

// addmorny

document.getElementById('add-click').addEventListener('click', function(){
    const addauto = document.getElementById('add-sho');
    addauto.classList.remove('hidden');

    const casHiddin = document.getElementById('cash-sho');
    casHiddin.classList.add('hidden')
})