var hora = new Date();
var foto = document.getElementById('img');
var body = document.querySelector('body')
var sd = document.getElementById('saudacao')
var p = document.getElementById('paragrafo')
function mudar(){
 let horaatual = hora.getHours();
 if (horaatual < 12){
    body.style.background = "gold"
    p.innerText += ` ${horaatual} horas`
    sd.innerText = "Bom dia"
    foto.src= "imagens/dia.jpg"
 }
 else if(horaatual >= 12 && horaatual < 18){
    p.innerText += ` ${horaatual} horas`
    sd.innerText = "Boa tarde!"
    body.style.background = "orange"
    foto.src = "imagens/tarde.png"
}
else{
    p.innerText += ` ${horaatual} horas`
    sd.innerText = "Boa noite!"
    body.style.background = "#270ec6"
    foto.src = "imagens/noite.png"
}
}