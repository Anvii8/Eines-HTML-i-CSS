let urlCompleta = document.URL;
const portada = document.getElementById('portada');
const presentacion = document.getElementById('presentacion');
const categoria = document.getElementById('categoria');
const enlaces = document.getElementById('enlaces');

let partesURL = urlCompleta.split('/');
let nombreArchivo = partesURL[partesURL.length - 1];

indicarPagina(nombreArchivo);


function indicarPagina(nombreArchivo) {
    if (nombreArchivo === "index.html" || nombreArchivo === ""){
        portada.style.color = "rgb(254, 105, 106)";
    }
    else if (nombreArchivo === "presentacio.html"){
        presentacion.style.color = "rgb(254, 105, 106)";
    }
    else if (nombreArchivo === "categoria.html"){
        categoria.style.color = "rgb(254, 105, 106)";
    }
    else if (nombreArchivo === "enlaces.html"){
        enlaces.style.color = "rgb(254, 105, 106)";
    }
}