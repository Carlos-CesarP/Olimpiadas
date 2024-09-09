function pesquisar(){
    
let section = document.getElementById("resultados-pesquisa"); 

let campoPesquisa = document.getElementById("campo-pesquisa").value

if (!campoPesquisa) {
  section.innerHTML = "<p>Não foi encontrado resultados. Digite o nome do atleta ou esporte</p>"
  return
}

campoPesquisa = campoPesquisa .toLowerCase()

console.log(campoPesquisa)

let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

for (let dado of dados){
  titulo = dado.titulo.toLocaleLowerCase()
  descricao= dado.descricao.toLocaleLowerCase()
  tags = dado.tags.toLocaleLowerCase()
  // se titulo include campoPesquisa
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
      // cria um novo elemento
      resultados += `
      <div class="item-resultado rayssa-leal"> <h2>
                  <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                  <p class="descricao-meta">${dado.descricao}</p>
                  <a href="${dado.link}" target="_blank">Mais informações</a>
              </div>`
    }
    //então, faça...
  console.log(dado.titulo.includes(campoPesquisa))

}

if (!resultados) { 
  resultados = "<p>Nada foi encontrado</p>"

}

section.innerHTML = resultados
}


