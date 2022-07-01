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
    {nombre:'medellin',valor:1},
    {nombre:'bogota',valor:2},
    {nombre:'cartagena',valor:3},
    {nombre:'cali',valor:4},
  ]
  

  const formulario=document.querySelector('#formulario');
  const boton=document.querySelector('#boton');
  const resultado = document.querySelector('#resultado');
  const filtrar=()=>{
  console.log(formulario.value);
  resultado.innerHTML='';
  const texto=formulario.value.toLowerCase();
  for(let producto of productos){
    let nombre = producto.nombre.toLowerCase();
    if(nombre.indexOf(texto) !== -1){
      resultado.innerHTML+=`<li>${producto.nombre}</li> -valor: ${producto.valor} ` ;

    }

  }
  if(resultado.innerHTML===''){
    resultado.innerHTML +='<li>No se encontraron resultados</li>';
  }
}
boton.addEventListener('click',filtrar)

