/*
   * A cada refresh (F5) da página, o método "montarFigura()"
   * é executado.
   * */
  window.onload=function(){
         montarFigura();
  };

  function montarFigura() {

             /*
              * Capturamos o objeto/container canvas através do seu ID.
              * Você também pode optar por utilizar jQuery, a lógica é a mesma, só
              * muda a sintaxe.
              * */
               canvas = document.getElementById("canvasQuadrado");

               /*
                * Aqui é onde toda a 'mágica', começa a ocorrer. Iremos usar o método
                * "getContext('2d')" que irá "converter" nosso simples
                 * container em um objeto 2D onde
                * poderemos trabalhar com diversos métodos que veremos mais adiante.
                * */
               ctx = canvas.getContext('2d');
               console.log("Capturando canvasQuadrado em formato 2D");

  }
