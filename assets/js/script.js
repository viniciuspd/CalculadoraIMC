var genero;
function selectM(){
    document.querySelector('.choose-genre-m').classList.add('select-genre');
    document.querySelector('.choose-genre-f').classList.remove('select-genre');
    genero = 1;
}

function selectF(){
    document.querySelector('.choose-genre-f').classList.add('select-genre');
    document.querySelector('.choose-genre-m').classList.remove('select-genre');
    genero = 2;
}

function resetGenre(){
    document.querySelector('.choose-genre-m').classList.remove('select-genre');
    document.querySelector('.choose-genre-f').classList.remove('select-genre');
    genero = 0;
}

function calcular(){  
    document.querySelector('.area-resultado').style.opacity = 0; 
    setTimeout(()=>{
    setTimeout(()=>{
        document.querySelector('.area-resultado').style.opacity = 1; 
    },200);
    var altura = document.getElementById('altura').value ;
    var peso = document.getElementById('peso').value ;
    if(altura > 0 && peso > 0 && genero > 0){
    var resultado = peso/(altura*altura);
    document.querySelector('.imc').innerHTML = `IMC = ${resultado.toFixed(2)}`;
} else{
    document.querySelector('.imc').innerHTML = `Não foi possivel calcular seu IMC, lembre-se usar ponto para peso e altura.`;
    document.querySelector('.you-genre').innerHTML = ``;
    document.querySelector('.resultado-final').innerHTML = ``;
    document.querySelector('.resultado-final').style.color = '';
    document.querySelector('.area-resultado p').innerHTML = ``;
    resetGenre();
}
    if(genero == 1){
        document.querySelector('.you-genre').innerHTML = `Você é um homem`;
    }
    if(genero == 2){
        document.querySelector('.you-genre').innerHTML = `Você é uma mulher`;
    }
    if(resultado <= 16.9){
        document.querySelector('.resultado-final').innerHTML = ` que esta muito abaixo do peso!`;
        document.querySelector('.resultado-final').style.color = 'red';
        document.querySelector('.area-resultado p').innerHTML = ` <br/>O que pode acontecer? <br/>Queda de cabelo, infertilidade, ausência menstrual`;

    }
    if(resultado > 16.9 && resultado <= 18.4){
        document.querySelector('.resultado-final').innerHTML = ` que esta abaixo do peso.`;
        document.querySelector('.resultado-final').style.color = 'orange';
        document.querySelector('.area-resultado p').innerHTML = ` <br/>O que pode acontecer? <br/>Fadiga, stress, ansiedade`;

    }
    if(resultado > 18.4 && resultado <= 24.9){
        document.querySelector('.resultado-final').innerHTML = ` que esta com peso normal.`;
        document.querySelector('.resultado-final').style.color = 'green';
        document.querySelector('.area-resultado p').innerHTML = ` <br/>O que pode acontecer? <br/>Menor risco de doenças cardíacas e vasculares.`;

    }
    if(resultado > 24.9 && resultado <= 29.9){
        document.querySelector('.resultado-final').innerHTML = ` que esta acima do peso.`;
        document.querySelector('.resultado-final').style.color = 'orange';
        document.querySelector('.area-resultado p').innerHTML = ` <br/>O que pode acontecer? <br/>Fadiga, má circulação, varizes.`;

    }
    if(resultado > 29.9 && resultado <= 34.9){
        document.querySelector('.resultado-final').innerHTML = ` que esta com obesidade de Grau I.`;
        document.querySelector('.resultado-final').style.color = 'red';
        document.querySelector('.area-resultado p').innerHTML = ` <br/>O que pode acontecer? <br/>Diabetes, angina, infarto, aterosclerose.`;

    }
    if(resultado > 34.9 && resultado <= 40){
        document.querySelector('.resultado-final').innerHTML = ` que esta com obesidade de Grau II.`;
        document.querySelector('.resultado-final').style.color = 'red';
        document.querySelector('.area-resultado p').innerHTML = ` <br/>O que pode acontecer? <br/>Apneia do sono, falta de ar.`;

    }
    if(resultado > 40){
        document.querySelector('.resultado-final').innerHTML = ` que esta com obesidade de Grau III.`;
        document.querySelector('.resultado-final').style.color = 'red';
        document.querySelector('.area-resultado p').innerHTML = ` <br/>O que pode acontecer? <br/>Refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC.`;

    }
   
},300);
}

