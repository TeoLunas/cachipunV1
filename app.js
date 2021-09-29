const opcUserHtml = document.getElementById('form-seleccion-usuario')
const seleccionBot = document.getElementById('botSeleccion');
const seleccionUser = document.getElementById('userSeleccion');

//Funcion que ejecuta el juego
function juego() {
    seleccionUsuario();
};

//Guardar jugada

const jugadas = [];


//Capturar Seleccion del usuario

function seleccionUsuario() {
    //const opcUserHtml = document.getElementById('form-seleccion-usuario')
    opcUserHtml.addEventListener('submit', function (e) {
        e.preventDefault();
        if (document.querySelector('input[name="opcsUser"]:checked')) {
            let seleccionUser = document.querySelector('input[name="opcsUser"]:checked').value;
            switch (seleccionUser) {
                case "piedra":
                    jugadas.shift();
                    jugadas.pop();
                    jugadas.unshift({ 'jugadaUser': seleccionUser })
                    generalHtmlSeleccionUser(1);
                    jugadaBot();
                    elegirGanador();
                    break;
                case 'tijera':
                    jugadas.shift();
                    jugadas.pop();
                    jugadas.unshift({ 'jugadaUser': seleccionUser })
                    //console.log(jugadas);
                    generalHtmlSeleccionUser(2);
                    jugadaBot();
                    elegirGanador();
                    break;
                case 'papel':
                    jugadas.shift();
                    jugadas.pop();
                    jugadas.unshift({ 'jugadaUser': seleccionUser })
                    //console.log(jugadas);
                    generalHtmlSeleccionUser(3);
                    jugadaBot();
                    elegirGanador();
                    break;
            }
        }


    });
}

//Generar html con seleccion de usuario

function generalHtmlSeleccionUser(seleccion) {
    borrarHtmlJugadaAnteriorUser();

    switch (seleccion) {
        case 1:
            let nuevoParrafo = document.createElement('p');
            let contenido = document.createTextNode('Elegiste Piedra!');
            nuevoParrafo.appendChild(contenido);
            seleccionUser.appendChild(nuevoParrafo);
            break;
        case 2:
            let nuevoParrafo2 = document.createElement('p');
            let contenido2 = document.createTextNode('Elegiste Tijera!');
            nuevoParrafo2.appendChild(contenido2);
            seleccionUser.appendChild(nuevoParrafo2);
            break;
        case 3:
            let nuevoParrafo3 = document.createElement('p');
            let contenido3 = document.createTextNode('Elegiste Papel!');
            nuevoParrafo3.appendChild(contenido3);
            seleccionUser.appendChild(nuevoParrafo3);
            break;
    }

};

function borrarHtmlJugadaAnteriorUser(){
    while (seleccionUser.firstChild) {
        seleccionUser.removeChild(seleccionUser.firstChild);
    }
};

//Generar jugada de Bot

function jugadaBot() {
    let numeroRandom = Math.floor(Math.random() * 3 + 1);
    let seleccionBot;
    switch (numeroRandom) {
        case 1:
            seleccionBot = 'piedra';
            jugadas.push({ 'JugadaBot': seleccionBot })
            console.log(jugadas);
            generalHtmlSeleccionBot(1);
            break;
        case 2:
            seleccionBot = 'tijera';
            //jugadas.pop();
            jugadas.push({ 'JugadaBot': seleccionBot })
            console.log(jugadas);
            generalHtmlSeleccionBot(2);
            break;
        case 3:
            seleccionBot = 'papel';
            //jugadas.pop();
            jugadas.push({ 'JugadaBot': seleccionBot })
            console.log(jugadas);
            generalHtmlSeleccionBot(3);
            break;
    }
}

//Generar html con seleccion de bot

function generalHtmlSeleccionBot(jugarBot) {
    //let seleccionBot = document.getElementById('botSeleccion');

    borrarHtmlJugadaAnteriorBot();

    switch (jugarBot) {
        case 1:
            let nuevoParrafo = document.createElement('p');
            let contenido = document.createTextNode('El bot elige Piedra!');
            nuevoParrafo.appendChild(contenido);
            seleccionBot.appendChild(nuevoParrafo);
            break;
        case 2:
            let nuevoParrafo2 = document.createElement('p');
            let contenido2 = document.createTextNode('El bot elige Tijera!');
            nuevoParrafo2.appendChild(contenido2);
            seleccionBot.appendChild(nuevoParrafo2);
            break;
        case 3:
            let nuevoParrafo3 = document.createElement('p');
            let contenido3 = document.createTextNode('El bot elige Papel!');
            nuevoParrafo3.appendChild(contenido3);
            seleccionBot.appendChild(nuevoParrafo3);
            break;
    }
}

function borrarHtmlJugadaAnteriorBot(){
    while (seleccionBot.firstChild) {
        seleccionBot.removeChild(seleccionBot.firstChild);
    }
};

//Comparar eleccion y mostrar ganador

function elegirGanador() {
    console.log('Usuario Jugo :', jugadas[0].jugadaUser);
    console.log('El Bot Jugo :', jugadas[1].JugadaBot);
    if(jugadas[0].jugadaUser === jugadas[1].JugadaBot){
        alert(`Ambos jugaron ${jugadas[0].jugadaUser} asi que es un empata`)
    } else if((jugadas[0].jugadaUser == 'piedra' && jugadas[1].JugadaBot == 'tijera') ||  (jugadas[0].jugadaUser == 'tijera' && jugadas[1].JugadaBot == 'papel') || (jugadas[0].jugadaUser == 'papel' && jugadas[1].JugadaBot == 'piedra')){
        alert(`${jugadas[0].jugadaUser} le gana a ${jugadas[1].JugadaBot}, asi que GANASTE!`)
    }else {
        alert(`${jugadas[1].JugadaBot} le gana a ${jugadas[0].jugadaUser}, asi que PERDISTE`)
    }

}

juego();