const urlCompleta = document.URL;
const portada = document.getElementById('portada');
const presentacion = document.getElementById('presentacion');
const categoria = document.getElementById('categoria');
const enlaces = document.getElementById('enlaces');

const partesURL = urlCompleta.split('/');
const nombreArchivo = partesURL[partesURL.length - 1];

indicarPagina(nombreArchivo);


function indicarPagina(nombreArchivo) {
    if (nombreArchivo.includes("index") || nombreArchivo === ""){
        portada.style.color = "rgb(254, 105, 106)";
    }
    else if (nombreArchivo.includes("presentacio")){
        presentacion.style.color = "rgb(254, 105, 106)";
    }
    else if (nombreArchivo.includes("categoria")){
        categoria.style.color = "rgb(254, 105, 106)";
    }
    else if (nombreArchivo.includes("enlaces")){
        enlaces.style.color = "rgb(254, 105, 106)";
    }
}