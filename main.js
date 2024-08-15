const formTest = document.getElementById('formulario_teste');

formTest.addEventListener('submit', function(e){
    e.preventDefault();
    let numeroMenor = document.getElementById('numero_menor');

    let numeroMaior = document.getElementById('numero_maior');

    document.getElementById('validacao').style.display = 'none';
    document.getElementById('invalidacao').style.display = 'none';

    
    if(numeroMaior.value > numeroMenor.value){
        document.getElementById('validacao').style.display = 'block';
        numeroMaior.value = '';
        numeroMenor.value = '';
    }
    else{
        document.getElementById('invalidacao').style.display = 'block';
        numeroMaior.value = '';
        numeroMenor.value = '';
    }
})







