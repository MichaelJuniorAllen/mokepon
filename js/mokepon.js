const sectionselecionarAtaque = document.getElementById("seleccionar-ataque")
const setionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById('boton-mascota')

const botonReiniciar =document.getElementById('boton-reiniciar')

const sectionselecionarMascota = document.getElementById("seleccionar-mascota")
const spanMascotaJugador = document.getElementById('mascota-jugador')


const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataqueDelJugador = document.getElementById('ataques-del-jugador')
const taquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

let Mokepones = []
let ataqueJugador = []
let ataqueEnemigo
let opcionDeMokepones 
let inputHipodoge 
let inputCapipepo 
let inputRatigueya 
let mascotaJugador
let ataqueMokepon
let botonFuego
let botonAgua 
let botonTierra
let botones = []
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = [] 
    }
}

let hipodoge = new Mokepon('Hipodoge', './mascota/mokepons_mokepon_hipodoge_attack.webp', 5)

let capipepo = new Mokepon('Capipepo', './mascota/mokepons_mokepon_capipepo_attack.png', 5)

let ratigueya = new Mokepon('Ratigueya', './mascota/mokepons_mokepon_ratigueya_attack.webp', 5)

hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'},
)

capipepo.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    
)

ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌱', id: 'boton-tierra'},
)

Mokepones.push(hipodoge,capipepo,ratigueya)

function iniciarJuego() {
 
    sectionselecionarAtaque.style.display ="none"

    Mokepones.forEach((mokepon)=> {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

         inputHipodoge = document.getElementById('Hipodoge')
         inputCapipepo = document.getElementById('Capipepo')
         inputRatigueya = document.getElementById('Ratigueya')
    })


  
    setionReiniciar.style.display = "none" 

   
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

  

  
    botonReiniciar.addEventListener("click", reiniciarjuego)
}

function seleccionarMascotaJugador() {
   
    sectionselecionarMascota.style.display ="none"

    sectionselecionarAtaque.style.display ="flex"

    
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else {
        alert('Selecciona una mascota')
    }
    
    extraerAtaque(mascotaJugador)
    seleccionarMascotaEnemigo()
}
function extraerAtaque(mascotaJugador) {
    let ataques
    for (let i = 0; i < Mokepones.length; i++) {
       if (mascotaJugador === Mokepones[i].nombre) {
         ataques = Mokepones[i].ataques
       }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataques) => {
        ataqueMokepon = `<button id=${ataques.id} class="boton-de-ataque Bataque">${ataques.nombre}</button>`;
        contenedorAtaques.innerHTML += ataqueMokepon;
    });

     botonFuego = document.getElementById('boton-fuego')
     botonAgua = document.getElementById('boton-agua')
     botonTierra = document.getElementById('boton-tierra')
     botones = document.querySelectorAll('.Bataque')
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'   
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            } else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            }
        })
    })

}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio( 0, Mokepones.length -1)
    
    spanMascotaEnemigo.innerHTML = Mokepones[mascotaAleatoria].nombre 
    secuenciaAtaque()

}



function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function combate() {
  
    
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje(" GANASTE ")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje(" PERDISTE ")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarvidas()
}

function revisarvidas() {
    if(vidasEnemigo == 0) {
        crearMensajeFinal(" Felicitacione! ganaste ")
    }else if (vidasJugador == 0) {
        crearMensajeFinal (" Lo siento perdiste ")
    }
}

function crearMensaje(resultado) {
   

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    taquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

}

function crearMensajeFinal(resultadofinal) {
   
    
    sectionMensajes.innerHTML = resultadofinal
    
   
    botonFuego.disabled=true
  
    botonAgua.disabled=true
   
    botonTierra.disabled=true

    
   
    setionReiniciar.style.display = "block"
}

function reiniciarjuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)