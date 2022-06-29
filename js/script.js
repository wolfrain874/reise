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
   
  const productos = [
    {nombre: hotel1, valor: 1111, lugar:napoles},
    {nombre: hotel2, valor: 1111, lugar:napoles},
    {nombre: hotel3, valor: 1111, lugar:napoles},
    {nombre: hotel4, valor: 1111, lugar:napoles},
  ]

  const formulario=document.querySelector('#formulario');
  const boton=document.querySelector('#boton');
  const resultado = document.querySelector('#resultado');
  const filtrar=()=>{
  //console.log(formulario.value);
  resultado.innerHTML='';
  const texto=formulario.value.toLowerCase();
  for(let producto of productos){
    let nombre = producto.nombre.toLowerCase();
    if(nombre.indexOf(texto) !== 1){
      resultado.innerHTML+=`<li>${producto.nombre}</li> -valor: ${producto.valor} -lugar: ${producto.lugar}` ;

    }

  }
  if(resultado.innerHTML===''){
    resultado.innerHTML +='<li>No se encontraron resultados</li>';
  }
}
boton.addEventListener('click',filtrar)