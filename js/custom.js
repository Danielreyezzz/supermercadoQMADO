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

const currentImage = document.querySelector(".selected img");
const currentButtons = document.querySelector(".selected .botones-ocultos");
$(".selected img").mouseenter(function() {
    $(this).siblings(".botones-ocultos").show();
    $(currentImage).style('opacity: 0.5;')
  });
  
  $(".selected img").mouseleave(function() {
    $(this).siblings(".botones-ocultos").hide();
  });
  $("#carousel").mouseleave(function() {
    $(".botones-ocultos").hide();
  });