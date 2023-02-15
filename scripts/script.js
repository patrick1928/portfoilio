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
    else if (horatual >= 18 && horatual < 23){
        diurno.style.background = '#2E2680'
        projeto.innerHTML += `<p>${horatual} horas!</p>`
    }
    else{
        diurno.style.background = '#0B0080'
        projeto.innerHTML += `<p>${horatual} horas!</p>`

}
}


function contar(){
    function isNumber(x=0, y=0){
        if (x < 0 || y < 0){
            return 'valor invalido verifique e tente novamente!'
        }else{
            return true
        }
    }
    let numInit = document.getElementById('numInit')
    let numFim = document.getElementById('numFim')
    
    let cont = document.getElementById('cont')
    var isNumber = isNumber(Number(numInit.value), Number(numFim.valu,));
    cont.style.transition = 'all .5s ease';
    if (isNumber == true){
        let numinit = numInit.value
        let numfim = numFim.value
        for(let c = numinit;c > numfim;c--){
          cont.innerHTML += c
            
        };
    }else{
        alert(`[ERROR]-${isNumber}`)
    }

}
