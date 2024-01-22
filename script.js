const divimg = document.querySelector("#imagens");
const url = 'https://nekos.best/api/v2/husbando';
const form = document.querySelector("#formulario");
const btn = document.querySelector("#gerar");
let divinput=document.querySelector("#divinput");
const quantidadeinput = document.querySelector("#quantidade");
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const quantidade = quantidadeinput.value;
    quantidadeinput.value = "";
    divimg.removeChild(divinput);
    exibiranimes(url, quantidade);

});
async function exibiranimes(url, quantidade) {
    for (i = 1; i <=quantidade; i++) {
        fetch(url)
        .then(res => res.json())
            .then(dados => {
                dados.results.forEach(elemento => {
                    let anime = elemento.url;
                    let novaImagem = document.createElement('img');
                    novaImagem.src = anime;
                    novaImagem.classList.add('imganime');
                    divimg.appendChild(novaImagem);

                })
            })
    }
}