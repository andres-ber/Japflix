const URL =  "https://japceibal.github.io/japflix_api/movies-data.json";
const movies = []
let pelicula = []



let getJSONData = function(url){
  let result = {};
  return fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    }else{
      throw Error(response.statusText);
    }
  })
  .then(function(response) {
        result.status = 'ok';
        result.data = response;
        return result;
  })
  .catch(function(error) {
      result.status = 'error';
      result.data = error;
      return result;
});
}





//title o genres o tagline u overview

document.addEventListener("DOMContentLoaded", function () {
    getJSONData(URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            peliculas = resultObj.data
            movies.push(peliculas)
            console.log(movies)

                       
        }
    });

    
//Creacion HTML estrellas
let estrella = `<span class="fa fa-star checked text-end"></span>`
let estrellavacia = `<span class="fa fa-star text-end"></span>`


//BUSCADOR 
document.getElementById("btnBuscar").addEventListener("click", function(){

  let lista = document.getElementById('lista');//donde van a ir el listado

    let htmlContent = "";
  const valor = document.getElementById("inputBuscar").value;
  if (valor != "") { 
    const movie = movies[0] 
    for (let index = 0; index < movie.length; index++) {  
        if (movie[index].title.includes(valor) || movie[index].tagline.includes(valor)  || movie[index].overview.includes(valor) ) {
            pelicula = movie[index]
            let creacionEstrella = estrella.repeat((5 * (pelicula.vote_average)) /10);
                if (pelicula.vote_average < 10){
                  let Estrellablanca = 5 - ((5 * (pelicula.vote_average)) /10);
                  creacionEstrella += estrellavacia.repeat(Estrellablanca) 
                }
          htmlContent += `
          <li class="list-group-item border-top p-1")><label><span class="b">${pelicula.title}</span>
            <span>${pelicula.tagline}</span> ${creacionEstrella} <button id="vermas" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" float-end>Ver mas</button> <label>
          </li>`

          

          
          
          lista.innerHTML = htmlContent
        }
        /* else if(valor != ""){ 
            for(let i = 0; i < movie[index].genres.length; i++){
                if (movie[index].genres[i].includes(valor)){
                pelicula = movie[index]
                htmlContent += `
                <li class="list-group-item border-top p-1"><span class="b">${pelicula.title}</span>
                <span>${pelicula.tagline}</span> ${creacionEstrella}
                </li>`
            
            lista.innerHTML = htmlContent
          }
        }
        }
        else {
            Alert("Debe ingresar una película correcta")
        }  */

        //creacion de titulo, Genero de la pelicula seleccionada.
          /* let htmlCanva = "";
          let vermas = document.getElementById("vermas")
          let titlecanva = document.getElementById("canva-titulo")
          let bodycanva = document.getElementById("canva-body")
          vermas.addEventListener('click', ()=>{
          
           htmlCanva = `<div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
           <div class="offcanvas-header">
             <h5 class="offcanvas-title" id="offcanvasLabel">${pelicula.title}</h5>
             <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
           </div>
           <div class="offcanvas-body">
             Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
           </div>
           <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle float-end" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
            </button>
            <ul class="dropdown-menu">
            <li>Action</li>
            <li>Another action</li>
            <li>Something else here</li>
            </ul>
            </div>
            </div>` 
          
         document.getElementById("canvas").innerHTML = htmlCanva
          }); */

     

     }
      
      
    }
   
});



});
//llaves del domcontent






