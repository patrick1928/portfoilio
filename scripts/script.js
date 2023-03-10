var hora = new Date()
var diurno = document.querySelector('div#diurno')
var projeto = document.querySelector('div#projeto')
var check = document.querySelector('input#check')
var sidebar = document.querySelector('div#sidebar')
var iconCheck = document.querySelector('i#icone')
let display = document.querySelector('p#display')
let calculadora = document.querySelector('div#projetocalculadora')

var documentTitle = document.title;
window.addEventListener('blur', () => {
    document.title = 'volte por favor! ;(';
});
window.addEventListener('focus', () => {
    document.title = documentTitle
});

//interação com o sidebar
const sidebarCheck = () =>{
    if (check.checked){
        sidebar.style.left = '0';
        iconCheck.style.left ='240px'
        iconCheck.setAttribute('class', 'fa-solid fa-x');
    }else{
        sidebar.style.left = '-300px';
        iconCheck.style.left ='0'
        iconCheck.setAttribute('class','fas fa-bars');
    }
    }
    //esconder o sidebar quando o usuario pressionar fora do proprio
    const mouseLeave = () =>{
        sidebar.style.left = '-300px'
        iconCheck.style.left = '0'
        check.checked = false
        iconCheck.setAttribute('class','fas fa-bars');
        }
    
    sidebar.addEventListener('mouseleave', function(){
    mouseLeave()
    //fim
    //função de mostrar e esconder o sidebar
})
check.addEventListener('click' ,function(){
    sidebarCheck()
})
//fim
//fim
//projeto hora
function atualizar() {
    let horatual = hora.getHours();
    let minAtual = hora.getMinutes();
    
    if (horatual < 12 && horatual >= 6){
        diurno.style.background = '#1b02fff0'
        diurno.innerHTML += `<p>${horatual} horas e ${minAtual} minutos!</p>`
    }
    else if (horatual >= 12 && horatual < 18){
        diurno.style.background = '#807118'
        diurno.innerHTML += `<p>${horatual} horas e ${minAtual} minutos!</p>`
        
    }
    else if (horatual >= 18 && horatual < 23){
        diurno.style.background = '#2E2680'
        diurno.innerHTML += `<p>${horatual} horas e ${minAtual} minutos!</p>`
    }
    else{
        diurno.style.background = '#0B0080'
        diurno.innerHTML += `<p>${horatual} horas e ${minAtual} minutos!</p>`

}
}

//fim
//projeto cronometro

function contar(){
    function isNumber(x=0, y=0){
        if (x <= 0 || y < 0){
            return 'valor invalido verifique e tente novamente!'
        }else{
            return true
        }
    }
    let numInit = document.getElementById('numInit')
    let numFim = document.getElementById('numFim')
    var res = document.getElementById('res')
    let cont = document.getElementById('cont')
    var isNumber = isNumber(Number(numInit.value), Number(numFim.value,));
    
    if (isNumber == true){
        
        let i = Number(numInit.value)
        let f = Number(numFim.value)
        let c = i
        i = i - f
        while(i >= 0){
            setTimeout(function() {
                res.innerHTML = `${c}`
                c--
                
            }, 1000 * i)
            i--
        }
    
    }else
        alert(`[ERROR]-${isNumber}`)
    }

    //fim
    //calculadora
const calc = () => {
    let c = 9
    for(c ; c>= 0; c--){
        calculadora.innerHTML += `<input type="button" id="num${c}" class="numCalc" value="${c}" onclick="numbers('${c}')">`;
    }
}
calc()
function numbers(c) {
    alert(c)
    display.innerHTML = c
}