
function moveToSelected(element) {
    if (element == "next") {
      var selected = $(".selected").next();
    } else if (element == "prev") {
      var selected = $(".selected").prev();
    } else {
      var selected = element;
    }
  
    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();
  
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
      var selected = $(".selected").next();
    } else if (element == "prev") {
      var selected = $(".selected").prev();
    } else {
      var selected = element;
    }
  
    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();
  
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
    var buttons = element.getElementsByClassName('botones-ocultos');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.add('mostrar');
    }
  }

  function hideButtons(element) {
    var buttons = element.getElementsByClassName('botones-ocultos');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('mostrar');
    }
  }

  $('.item').on('click',function(){
    $('p',this).stop().slideDown(300);
  })
  $('.item').on('mouseleave',function(){
    $('p',this).stop().slideUp(300);
  })


