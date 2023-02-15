function contar() {
    var init = document.getElementById('init')
    var fim = document.getElementById('fim')
    var step = document.getElementById('step')
    var res = document.getElementById('res')
    if (init.value.length == 0 || fim.value.length == 0 || step.value.length == 0){
        window.alert('Valor invalido, por favor preencha todos os campos')
    }
    else{
        res.innerHTML = '<p>contando</p>'
        let i = Number(init.value)
        let f = Number(fim.value)
        let p = Number(step.value)
        var c = i
        if (p <= 0){
            alert('passo invalido considerando passo 1')
            p =1
        }
        if (i < f){
        while(c <= f){
            res.innerHTML += ` -${c} \u{1F449}`
            c += p
        }
    }else if (i > f){
        do{
            res.innerHTML += ` -${c} \u{1F449}`
            c -= p
        }while(c > f)
    }
    } 
}