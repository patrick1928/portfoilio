var hora = new Date()
var diurno = document.querySelector('div#diurno')
var projeto = document.querySelector('div#projeto')
var check = document.querySelector('input#check')
var sidebar = document.querySelector('div#sidebar')
var iconCheck = document.querySelector('i#icone')
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
    function conta(y=0) {
        var y = y
        switch (y){
            case 1:
                alert('somar')
            break
            case 2:
                alert('subtrair')
            break
            case 3:
                alert('multiplicar')
            break
            case 4:
                alert('dividir')
            break
        }
    }
    var num1 = []
    var calculadora = Number()
    function numeros(x=0, y){
        var x = x
        switch (x) {
            case 0:
                
                num1.push('0')          
                break;
            case 1:
                num1.push('1') 
                break;
            case 2:
                num1.push('2') 
                break;
            case 3:
                num1.push('3') 
                break;
            case 4:
                num1.push('4') 
                break;
            case 5:
                num1.push('5') 
                break;
            case 6:
                num1.push('6')
                 break;
            case 7:
                num1.push('7') 
                break;
            case 8:
                num1.push('8') 
                break;
            case 9:
                num1.push('9') 
                
                break
                
        }}
        const calcular = (x,y)=>{

        }

        let operacao = document.querySelector('input#resultado').addEventListener('click', function(){
            calcular()
        })