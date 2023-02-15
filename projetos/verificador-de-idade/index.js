function verificar() {
    var cal = new Date();
    var anoatual = cal.getFullYear();
    var res = document.querySelector('div#res')
    var fano = document.getElementById('txtano')
    if (fano.value.length == 0 || Number(fano.value) >= anoatual){
        window.alert('[ERROR]-verifique os dados e tente novamente!')
        }
    else {
        var radio = document.getElementsByName('genero') 
        var idade = anoatual - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (radio[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src' , 'imagens/homem-crianca.jpg')
            }
            else if (idade <= 21){
                img.setAttribute('src' , 'imagens/homem-joven.jpg')
            }
            else if (idade <= 50){
                img.setAttribute('src' , 'imagens/homem.jpg')
            }
            else{
                img.setAttribute('src' , 'imagens/homem-velho.jpg')
            }
        }
        else{
            genero = 'mulher'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src', 'imagens/mulher-crianca.jpg')
            }
            else if (idade <= 21){
                img.setAttribute('src', 'imagens/mulher-joven.jpg')
            }
            else if (idade <= 50){
                img.setAttribute('src', 'imagens/mulher.jpg')
            }
            else{
                img.setAttribute('src', 'imagens/mulher-velha.jpg')
            }
        }
        img.style.borderRadius ='50%'
        res.innerHTML = `<p>Detectamos ${genero} de ${idade} anos</p>`
        res.appendChild(img)
    }
    
}