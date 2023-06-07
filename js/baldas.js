const slots = [];

function cargarSlots() {
    // Iterar del 1 al 24 y obtener las constantes
    for (let i = 1; i <= 24; i++) {
        const slot = document.getElementById(`slot_${i}`);
        slots.push(slot);


        slot.addEventListener("mouseover", function () {
            show_eye(slot);
        });
        slot.addEventListener("mouseout", function () {
            hide_eye(slot);
        });
    }
}

function show_eye(slot) {
    let eye = slot.lastElementChild;
    let cart = eye.previousElementSibling;

    eye.style.transition = 'opacity 0.3s ease'; // Transición de 0.3 segundos con un efecto de transición "ease"
    cart.style.transition = 'opacity 0.3s ease'; // Transición de 0.3 segundos con un efecto de transición "ease"
    eye.style.opacity = '1'; // Establecer opacidad a 1
    cart.style.opacity = '1'; // Establecer opacidad a 1

    eye.classList.remove('d-none');
    cart.classList.remove('d-none');
}

function hide_eye(slot) {
    let eye = slot.lastElementChild;
    let cart = eye.previousElementSibling;

    eye.style.transition = 'opacity 0.3s ease'; // Transición de 0.3 segundos con un efecto de transición "ease"
    cart.style.transition = 'opacity 0.3s ease'; // Transición de 0.3 segundos con un efecto de transición "ease"

    // Agregar evento para ocultar los elementos cuando el ratón sale de ellos
    slot.addEventListener('mouseleave', function () {
        eye.style.opacity = '0'; // Reducir gradualmente la opacidad a 0
        cart.style.opacity = '0'; // Reducir gradualmente la opacidad a 0

        setTimeout(function () {
            eye.classList.add('d-none');
            cart.classList.add('d-none');
        }, 300); // Esperar 300 milisegundos (duración de la transición) antes de ocultar los elementos
    });

    // Agregar evento para mostrar los elementos cuando el ratón entra en ellos
    slot.addEventListener('mouseenter', function () {
        eye.style.opacity = '1'; // Aumentar gradualmente la opacidad a 1
        cart.style.opacity = '1'; // Aumentar gradualmente la opacidad a 1

        eye.classList.remove('d-none');
        cart.classList.remove('d-none');
    });

    eye.classList.remove('d-none');
    cart.classList.remove('d-none');
}

// !quitar despues
cargarSlots();

// animation 

const next = document.getElementById('nextPage')
const previous = document.getElementById('previousPage')

next.addEventListener('click', () => {
    // if(pos!=-1 && pos+1==jsonFamilias.length){
    //     pos=0;


    // }else{
    //     pos=pos+1;
    // }
    // cat=jsonFamilias[pos].id_categoria;
    // sub=jsonFamilias[pos].id_subcategoria;

    next.setAttribute('hidden', 'true');
    previous.setAttribute('hidden', 'true');
    let tl = gsap.timeline();
    tl.fromTo(".anim-products", { x: 0 }, { x: -1920, duration: 1 })
    tl.fromTo(".anim-products", { opacity: 1 }, { opacity: 0, duration: 0.2 }, ">")
    tl.to(".anim-products", { x: 1920, duration: 0.2 }, ">")
    tl.to(".anim-products", { opacity: 1, duration: 0.2 }, ">")
    setTimeout(function () {
        // cargarPag();
        next.removeAttribute('hidden');
        previous.removeAttribute('hidden');
    }, 1600);
    tl.to(".anim-products", { x: 0, duration: 1 }, ">")
    // cargarPag();
})
previous.addEventListener('click', () => {
    // if(pos!=-1 && pos-1==-1){
    //     pos=jsonFamilias.length-1;
    //     console.log(pos+" el"+jsonFamilias[pos].id_subcategoria);


    // }else{
    //     pos=pos-1;
    // }
    // cat=jsonFamilias[pos].id_categoria;
    // sub=jsonFamilias[pos].id_subcategoria;

    next.setAttribute('hidden', 'true');
    previous.setAttribute('hidden', 'true');
    let tl = gsap.timeline();
    tl.fromTo(".anim-products", { x: 0 }, { x: 1920, duration: 1 })
    tl.fromTo(".anim-products", { opacity: 1 }, { opacity: 0, duration: 0.2 }, ">")
    tl.to(".anim-products", { x: -1920, duration: 0.2 }, ">")
    tl.to(".anim-products", { opacity: 1, duration: 0.2 }, ">")
    setTimeout(function () {
        // cargarPag();
        next.removeAttribute('hidden');
        previous.removeAttribute('hidden');
    }, 1600);
    tl.to(".anim-products", { x: 0, duration: 1 }, ">")

})


// let tl = gsap.timeline();
// let pro_1 = document.getElementById("#producto_1");
// let pro_7 = document.getElementById("#producto_7");

// tl.to(pro_1, {y: 500, duration: 1.2})


const products = [];

function cargarProductos() {
    for (let i = 1; i <= 24; i++) {
        const producto = document.getElementById(`producto_${i}`);
    const buyButton = document.getElementById(`buy_producto_${i}`);
    
    products.push({
        producto: producto,
        buyButton: buyButton
    });
    
    buyButton.addEventListener("click", function () {
        animateToCenter(producto);
    });
}
function animateToCenter(element) {
    let tl = gsap.timeline();
    // Dimensiones Panel contenedor
    let container = document.getElementById("containerPanel");
    let containerRect = container.getBoundingClientRect();
    let elementRect = element.getBoundingClientRect();
    let centerX = containerRect.left + containerRect.width / 2 - elementRect.width / 2;
    let centerY = containerRect.top + containerRect.height / 2 - elementRect.height / 2;
  
    let initialX = elementRect.left - containerRect.left + elementRect.width / 2; // Ubicacion elem lateral
    let initialY = elementRect.top - containerRect.top + elementRect.height / 2; // Ubicacion elem vertical
  
    let deltaX = centerX - initialX;  // Desplazamiento lateral
    let deltaY = centerY - initialY + elementRect.height * 2.5; // Desplazamiento vertical
  
    tl.to(element, { x: "+=" + deltaX, y: "+=" + deltaY, duration: 1.2 })
      .to(element, { opacity: 0, duration: 0.2 }, ">")
      .call(resetPosition);
  
    function resetPosition() {
      tl.to(element, { x: 0, y: 0, duration: 0.1 })
        .to(element, { opacity: 1, duration: 0.1 }, ">");
    }
  }
}

cargarProductos()

// let pro_1 = document.getElementById("producto_1");
// const buy_pro_1 = document.getElementById("buy_producto_1");

// buy_pro_1.addEventListener("click", () => { animateToCenter(pro_1) });





