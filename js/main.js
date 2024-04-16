

const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id");
const cantidad =urlSearchParams.get("cantidad");
var datos_bancarios = document.getElementById("datos_bancarios");
var invitado = document.getElementById('nombre_invitado');
var cantidad_ticket = document.getElementById('cantidad_invitado');
var flag = false;
var whatsapp_confirma_asistencia_mama = '2291751403';
var whatsapp_confirma_asistencia_papa = '2291812726';

var nombre_festejado = 'Thairy Sofia';
var iglesia ={
    nombre: 'Parroquia San juan de los Lagos',
    direccion: 'Av. Lázaro Cárdenas s/n Col. Revolución Boca del Rio Ver',
    fecha:'18 de Mayo del 2024 a las 18:00',
    url_image: '/img/iglesia.webp',
    url_mapa: 'https://maps.app.goo.gl/ZZvZmo84bhPQP4ar7'
};
var salon ={
    nombre: 'Salón de eventos Vlados ',
    direccion: 'Av. Urano 1874, jardines de Virginia. Boca del Rio, Ver',
    fecha:'18 de Mayo del 2024 a las 19:30',
    url_image: '/img/salon.png',
    url_mapa:'https://maps.app.goo.gl/Yp3VUjkhaZDkk3Zi6'
};

var mesas_regalos_sears = 'https://www.sears.com.mx/Mesa-de-Regalos/104120/te-invito-a-mi-xv-anos-thairy-sofia';
var mesas_regalos_amazon    = 'https://www.amazon.com.mx/registries/gl/guest-view/2S1D3EEQRSF9I';

var hashtag = '#XV_thairy_sofia';

let flagPlay = false;


//invitado.innerText = id;
//datos_bancarios.style.display = 'none';
//cantidad_ticket.innerText = cantidad;


function cargaDatosLugares(){
  var  festejado_nombre = document.getElementById('nombre_festejado');
    var salon_img = document.getElementById('salon_img');
    var salon_nombre = document.getElementById('salon_nombre');
    var fecha_salon = document.getElementById('fecha_salon');
    var direccion_salon = document.getElementById('direccion_salon');
    var salon_mapa = document.getElementById('salon_mapa');

    var hashtag_id = document.getElementById('hashtag');



    var iglesia_img = document.getElementById('iglesia_img');
    var iglesia_nombre = document.getElementById('iglesia_nombre');
    var fecha_iglesia = document.getElementById('fecha_iglesia');
    var direccion_iglesia = document.getElementById('direccion_iglesia');
    var iglesia_mapa = document.getElementById('iglesia_mapa');


    festejado_nombre.innerHTML = nombre_festejado;

    iglesia_nombre.innerHTML = iglesia.nombre;
    fecha_iglesia.innerHTML = iglesia.fecha;
    direccion_iglesia.innerHTML = iglesia.direccion;
    iglesia_img.src = iglesia.url_image;
    iglesia_mapa.href = iglesia.url_mapa;

    salon_nombre.innerHTML = salon.nombre;
    fecha_salon.innerHTML = salon.fecha;
    direccion_salon.innerHTML = salon.direccion;
    salon_img.src = salon.url_image;

    salon_mapa.href = salon.url_mapa;
    hashtag_id.innerHTML += hashtag;


}

function mesa_regalo_sears(){
    window.location= this.mesas_regalos_sears;
}
function mesa_regalo_amazon(){
    window.location= this.mesas_regalos_amazon;

}
function hashtag_instagram(){
    var link_hastag = hashtag.split("#");
    console.log(link_hastag);
    window.location='https://www.instagram.com/explore/tags/'+link_hastag[1];
}
function whatsapp(whatsapp){
var mensaje= 'text=confirmo%20asistencia%20muchas%20gracias.';
var link_whatsapp = 'https://wa.me/52'+whatsapp+'/?'+mensaje;
window.location= link_whatsapp;
}


function cuenta_bancaria(){
    this.flag = !flag;
    if(flag){
        datos_bancarios.style.display = 'flex';
    }else {
        datos_bancarios.style.display = 'none';
    }
}
function play(){
    if(this.flagPlay == false){
        document.getElementById('music').pause();
            console.log('pause..')
    }else {
        document.getElementById('music').play();
        console.log('play..')
    }
}
function sweetalert(){
    console.log(this.audio);
    this.flagPlay = !this.flagPlay;
    console.log(this.flagPlay);
    this.play();
}

cargaDatosLugares();
cuenta_bancaria();
