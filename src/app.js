
function generador(){

  for (let i = 0; i <= 10; i++) {

    let pronunciado = ["the", "our"];

      let adjetivo = ["great", "big"];
      let sustantivo = ["jogger", "racoon"];
      let direccion = [".com", ".net", ".us", ".io"];
    
      let random_pronunciado = Math.floor(Math.random() * pronunciado.length);
      let random_adjetivo = Math.floor(Math.random() * adjetivo.length);
      let random_sustantivo = Math.floor(Math.random() * sustantivo.length);
      let random_direccion = Math.floor(Math.random() * direccion.length);


      let resultado = ((pronunciado[random_pronunciado] + adjetivo[random_adjetivo] + sustantivo[random_sustantivo] + direccion[random_direccion]) );
      console.log(resultado);

  }
}
generador();