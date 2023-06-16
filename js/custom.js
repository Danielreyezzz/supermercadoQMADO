
function moveToSelected(element) {
    if (element == "next") {
      let selected = $(".selected").next();
    } else if (element == "prev") {
      let selected = $(".selected").prev();
    } else {
      let selected = element;
    }
  
    let next = $(selected).next();
    let prev = $(selected).prev();
    let prevSecond = $(prev).prev();
    let nextSecond = $(next).next();
  
    $(selected).removeClass().addClass("selected");
    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");
  
    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");
  
    $(nextSecond).nextAll().removeClass().addClass("hideRight");
    $(prevSecond).prevAll().removeClass().addClass("hideLeft");
  
    // Ocultar botones de la imagen anterior
    $(".prev .botones-ocultos").hide();
    $(".prevLeftSecond .botones-ocultos").hide();
  
    // Mostrar botones de la imagen seleccionada
    $(".selected .botones-ocultos").show();
  }
  
  // Eventos teclado
  $(document).keydown(function (e) {
    switch (e.which) {
      case 37: // left
        moveToSelected("prev");
        break;
  
      case 39: // right
        moveToSelected("next");
        break;
  
      default:
        return;
    }
    e.preventDefault();
  });
  
  $("#carousel div").click(function () {
    moveToSelected($(this));
  });
  
  $("#prev").click(function () {
    moveToSelected("prev");
  });
  
  $("#next").click(function () {
    moveToSelected("next");
  });

  function moveToSelected(element) {
    if (element == "next") {
      let selected = $(".selected").next();
    } else if (element == "prev") {
      let selected = $(".selected").prev();
    } else {
      let selected = element;
    }
  
    let next = $(selected).next();
    let prev = $(selected).prev();
    let prevSecond = $(prev).prev();
    let nextSecond = $(next).next();
  
    $(selected).removeClass().addClass("selected");
    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");
  
    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");
  
    $(nextSecond).nextAll().removeClass().addClass("hideRight");
    $(prevSecond).prevAll().removeClass().addClass("hideLeft");
  
    // Ocultar botones de la imagen anterior
    $(".prev .botones-ocultos").hide();
    $(".prevLeftSecond .botones-ocultos").hide();
  
    // Mostrar botones de la imagen seleccionada
    $(".selected .botones-ocultos").show();
  }
  
  // Eventos teclado
  $(document).keydown(function (e) {
    switch (e.which) {
      case 37: // left
        moveToSelected("prev");
        break;
  
      case 39: // right
        moveToSelected("next");
        break;
  
      default:
        return;
    }
    e.preventDefault();
  });
  
  $("#carousel div").click(function () {
    moveToSelected($(this));
  });
  
  $("#prev").click(function () {
    moveToSelected("prev");
  });
  
  $("#next").click(function () {
    moveToSelected("next");
  });


 function showButtons(element) {
    let buttons = element.getElementsByClassName('botones-ocultos');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.add('mostrar');
    }
  }

  function hideButtons(element) {
    let buttons = element.getElementsByClassName('botones-ocultos');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('mostrar');
    }
  }

  $('.item').on('click',function(){
    $('p',this).stop().slideDown(300);
  })
  $('.item').on('mouseleave',function(){
    $('p',this).stop().slideUp(300);
  })


  function cargarBanner1() {
    let widthPantalla = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
    let imagen = document.createElement("img");
    imagen.classList.add('d-block')
    imagen.classList.add('w-100')
  
    if (widthPantalla < 700) {
      imagen.src = "img/banner-leche-movil.jpg";
    } else {
      imagen.src = "img/banner-leche.png";
    }
  
    document.getElementById("banner1").appendChild(imagen);
  }
  
  function cargarBanner2() {
    let widthPantalla = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
    let imagen = document.createElement("img");
    imagen.classList.add('d-block')
    imagen.classList.add('w-100')
  
    if (widthPantalla < 700) {
      imagen.src = "img/banner-cocacola-movil.jpg";
    } else {
      imagen.src = "img/banner-cocacola.png";
    }
  
    document.getElementById("banner2").appendChild(imagen);
  }
  
  function cargarBanner3() {
    let widthPantalla = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
    let imagen = document.createElement("img");
    imagen.classList.add('d-block')
    imagen.classList.add('w-100')
  
    if (widthPantalla < 700) {
      imagen.src = "img/banner-refrescos-movil.jpg";
    } else {
      imagen.src = "img/banner-refrescos.png";
    }
  
    document.getElementById("banner3").appendChild(imagen);
  }

  cargarBanner1();
  cargarBanner2();
  cargarBanner3();
