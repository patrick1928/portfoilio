function calcular(){
   var entrada = document.getElementById('entrada')
   var res = document.getElementById('res')
   var select = document.getElementById('select')
   let t = Number(entrada.value)
    let i = 0
    let r = 0
   res.innerHTML = `<p>Tabuada de: ${t}<p/>`
   if (entrada.value.length == 0){
    window.alert('[ERROR]- por favor digite uma tabuada valida')
   }
   //adição
   else if (select.value == 'adição'){
    do{
        r = t + i
        res.innerHTML += `<br>${t} + ${i} = ${r} `
        i++
        
    }while(i <= 10)
   }
   //subtração
   else if (select.value == 'subtração'){
    for(i ;i <= 10;i++){
        r = t - i
        res.innerHTML += `<br>${t} - ${i} = ${r}`
    }
    }
    //multiplicação
    else if (select.value == 'multiplicação'){
        for(i ;i <= 10;i++){
            r = t * i
            res.innerHTML += `<br>${t} x ${i} = ${r}`
        }
    }
    //divisão
    else{
        for(i ;i <= 10;i++){
            r = t / i
            res.innerHTML += `<br>${t} / ${i} = ${r}`
        }
    }
   
}