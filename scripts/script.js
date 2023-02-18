var hora = new Date()
var diurno = document.querySelector('div#diurno')
var projeto = document.querySelector('div#projetos')
var check = document.getElementById('check')
var sidebar = document.getElementById('sidebar')
let iconCheck = document.getElementById('icone')
//interação com o sidebar
const sidebarCheck = () =>{
    
    if (check.checked){
        sidebar.style.left = '0';
        iconCheck.style.left ='200px'
    }else{
        sidebar.style.left = '-200px';
        iconCheck.style.left ='0'
    }
    }
    //fim
    //esconder o sidebar quando o usuario pressionar fora do proprio
    const mouseOut = () =>{
        sidebar.style.left = '-200px'
        iconCheck.style.left = '0'
        check.checked = false
        }
    
    sidebar.addEventListener('mouseleave', function(){
    mouseOut()
})
check.addEventListener('click' ,function(){
    sidebarCheck()
})
//fim
//projeto hora
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
//fim
//projeto cronometro
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
    var res = document.getElementById('res')
    let cont = document.getElementById('cont')
    var isNumber = isNumber(Number(numInit.value), Number(numFim.value,));
    
    if (isNumber == true){
        
        let i = Number(numInit.value)
        let f = Number(numFim.value)
        let c = i
        while(i >= f){
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

    
