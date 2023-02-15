var hora = new Date()
var diurno = document.querySelector('div#diurno')
var projeto = document.querySelector('div#projetos')
function atualizar() {
    let horatual = hora.getHours();
   
    if (horatual < 12 && horatual >= 6){
        diurno.style.background = '#1500ffa1'
        projeto.innerHTML += `<p>${horatual} horas!</p>`
    }
    else if (horatual >= 12 && horatual < 18){
        diurno.style.background = '#5B4DFF'
        projeto.innerHTML += `<p>${horatual} horas!</p>`
        
    }
    else if(horatual >= 18 && horatual < 23){
        diurno.style.background = '#2E2680'
        projeto.innerHTML += `<p>${horatual} horas!</p>`
    }
    else{
        diurno.style.background = '#0B0080'
        projeto.innerHTML += `<p>${horatual} horas!</p>`

}
}

function contar(){
    let numInit = document.getElementById('numInit')
    let numFim = document.getElementById('numFim')
    let cont = document.getElementById('cont')
    if (numInit.length == 0 || numFim.length == 0){
        window.alert('nao e possivel fazer a contagem!')
    }else{
    for(let c = numInit.value;c <= numFim.value;c++){
        res.innerHTML = `${c}`
    }
}
}
