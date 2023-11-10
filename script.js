let codigoAleatorio = ''+ Math.floor(Math.random() * 10000);

let vpos = 0;
let intentos = 5;


function jugar() {
  
    let introducido = document.getElementById("introducido").value;
 
    // dibujar casillas de resultado
    let midiv = document.getElementById("fila"  + vpos);
    for (let i = 0; i < 5; i++) {
        let minuevodiv = document.createElement("div");
        minuevodiv.className = "valorJuego";
        midiv.appendChild(minuevodiv);

        if (introducido === codigoAleatorio) {
            minuevodiv.style.backgroundColor = "green";
        }
    }

    let fila=midiv.getElementsByTagName("div");
    // validar valor introducido
    for(i=0; digito=introducido[i]; i++){
        let bloque = fila[i];
        bloque.innerHTML=digito;
        bloque.style.backgroundColor=colores(digito, i);
        if (i == 4)
        break;
    }

    // reducir intentos
    --intentos;
    document.getElementById("notificador").getElementsByTagName("h2")[0].innerHTML= "Te quedan " + intentos+ " intentos";
    vpos++;
    document.getElementById("introducido").value='';

    if (introducido == codigoAleatorio){
        contResult= document.getElementById("contenedorResultado")
        let fila=contResult.getElementsByTagName("div");
        for(i = 0; i < 5; i++){
            fila[i].innerHTML=introducido[i];
        }
    }
}

function colores(digito, i){
    if (codigoAleatorio[i] == digito){return "green"};
    if (codigoAleatorio.includes(digito)) {return "orange"};
}

