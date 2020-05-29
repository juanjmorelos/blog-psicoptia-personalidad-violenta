                                              // buscador de contenido

//Declarando variables
bars_search = document.getElementById("ctn-bars-search");
cover_ctn_search = document.getElementById("cover-ctn-search");
inputSearch = document.getElementById("inputSearch");
box_search = document.getElementById("box-search");

//variables vista previa
cover_view = document.getElementById("cover-ctn-view");
contet_view_video = document.getElementById("content-video-view");
cerrar = document.getElementById("cerrar-view");

function top6(){
  cover_view.style.display = "flex";
  cerrar.style.display = "flex";
  contet_view_video.src = "Res/pedro.mp4";
  contet_view_video.load();
}

function top5(){
  cover_view.style.display = "flex";
  cerrar.style.display = "flex";
  contet_view_video.src = "Res/ted.mp4";
  contet_view_video.load();
}
function top4(){
  cover_view.style.display = "flex";
  cerrar.style.display = "flex";
  contet_view_video.src = "Res/jhon.mp4";
  contet_view_video.load();
}
function top3(){
  cover_view.style.display = "flex";
  cerrar.style.display = "flex";
  contet_view_video.src = "Res/ed.mp4";
  contet_view_video.load();
}
function top2(){
  cover_view.style.display = "flex";
  cerrar.style.display = "flex";
  contet_view_video.src = "Res/enriqueta.mp4";
  contet_view_video.load();
}
function top1(){
  cover_view.style.display = "flex";
  cerrar.style.display = "flex";
  contet_view_video.src = "Res/manson.mp4";
  contet_view_video.load();
}
function ocultar_vista(){
  cover_view.style.display = "none";
  cerrar.style.display = "none";
  contet_view_video.src = "";
}



function presionar(){

  tecla_esc = event.keyCode;
  if(tecla_esc == 27){
    return ocultar_buscador();
  }
}
function presionar2(){

  tecla_esc = event.keyCode;
  if(tecla_esc == 27){
    return ocultar_vista();
  }
}


// funcion para mostrar el buscador

function mostrar_buscador(){
  bars_search.style.top = "80px";
  cover_ctn_search.style.display = "block";
  inputSearch.focus();
  if (inputSearch.value == "") {
    box_search.style.display = "none";
  }
}

function ocultar_buscador(){
  bars_search.style.top = "-10px";
  cover_ctn_search.style.display = "none";
  inputSearch.value = "";
  box_search.style.display = "none";
}



// creando filtrado de busqueda
function buscador_interno(){
  filter = inputSearch.value.toUpperCase();
  li = box_search.getElementsByTagName("li");

  //Recorriendo elemento a filtrar mediante los li

  for (i = 0; i < li.length; i++) {
    var a = li[i].getElementsByTagName("a")[0];
    var textValue = a.textContent || a.innerText;

    if (textValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      box_search.style.display = "block";
      if (inputSearch.value == "") {
        box_search.style.display = "none";
      }
    }else{
      li[i].style.display = "none";

    }
  }
}

window.onkeydown = presionar;
window.onkeydown = presionar2;
document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);
document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);
//document.getElementById("a").addEventListener("click", ocultar_buscador);

//document.getElementById("cover-ctn-view").addEventListener("click", ocultar_vista);;
document.getElementById("top6").addEventListener("click", top6);
document.getElementById("top5").addEventListener("click", top5);
document.getElementById("top4").addEventListener("click", top4);
document.getElementById("top3").addEventListener("click", top3);
document.getElementById("top2").addEventListener("click", top2);
document.getElementById("top1").addEventListener("click", top1);
document.getElementById("cerrar-view").addEventListener("click", ocultar_vista);
