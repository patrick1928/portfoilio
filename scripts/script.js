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
        if (x <= 0 || y <= 0){
            return 'valor invalido verifique e tente novamente!'
        }else{
            return true
        }
    }
    let numInit = document.getElementById('numInit')
    let numFim = document.getElementById('numFim')
    
    let cont = document.getElementById('cont')
    var isNumber = isNumber(Number(numInit.value), Number(numFim.value,));
    
    if (isNumber == true){
        
        let i = Number(numInit.value)
        let f = Number(numFim.value)

        for(let c = i; c >= f; c--){
            setTimeout(() =>{
                cont.innerHTML = '',
                cont.innerHTML += `<br><span>${c}</span>`
                console.log(c)
            },'1000')
            
         
            
        };
    }else{
        alert(`[ERROR]-${isNumber}`)
    }

}
