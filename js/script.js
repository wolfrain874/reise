var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
   
  const productos=[
    {nombre:'Puerto Nare',valor:10000},
    {nombre:'boyaca',valor:2000},
    {nombre:'rio negro',valor:356456},
    {nombre:'choco',valor:45555555},
    {nombre:'medellin',valor:10000},
    {nombre:'bogota',valor:2000},
    {nombre:'cartagena',valor:356456},
    {nombre:'cali',valor:45555555},
  ]
  console.table(productos)
 
  const none=document.querySelector('.continer');
  const formulario=document.querySelector('#formulario');
  const boton=document.querySelector('#boton');
  const resultado = document.querySelector('#resultado');
  const filtrar=()=>{
  // console.log(formulario.value);
  resultado.innerHTML='';
  const texto=formulario.value.toLowerCase();
  for(let producto of productos){
    let nombre = producto.nombre.toLowerCase();
    if(nombre.indexOf(texto) !== -1){
      resultado.innerHTML+=`<div id="resultado"> <h1 id="resultadoTitulo">${producto.nombre} </h1> <br> -valor: ${producto.valor}</div>` ;
      none.style.display='none';

    }

  }
  if(resultado.innerHTML===''){
    resultado.innerHTML +='<li>No se encontraron resultados</li>' ;
  }
}
boton.addEventListener('click',filtrar)
