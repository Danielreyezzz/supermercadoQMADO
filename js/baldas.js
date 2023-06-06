const slots = [];

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


function show_eye(slot) {
    let eye = slot.lastElementChild;
    let cart = eye.previousElementSibling;
    if (eye.classList.contains('d-none')) {
        eye.classList.remove('d-none');
    }
    if (cart.classList.contains('d-none')) {
        cart.classList.remove('d-none');
    }
}

function hide_eye(slot) {
    let eye = slot.lastElementChild;
    let cart = eye.previousElementSibling;
    if (!eye.classList.contains('d-none')) {
        eye.classList.add('d-none');
    }
    if (!cart.classList.contains('d-none')) {
        cart.classList.add('d-none');
    }
}

// animation 

const next = document.getElementById('nextPage')
const previous = document.getElementById('previousPage')

next.addEventListener('click', ()=>{
    
    let tl = gsap.timeline();
    tl.fromTo(".anim-products", {x: 0}, {x: -1920, duration: 1})
    tl.fromTo(".anim-products", {opacity: 1}, {opacity: 0, duration: 0.2},">")
    tl.to(".anim-products", {x: 1920, duration: 0.2},">")
    tl.to(".anim-products", {opacity: 1, duration: 0.2},">")
    tl.to(".anim-products", {x: 0, duration: 1},">")
})
previous.addEventListener('click', ()=>{
    
    let tl = gsap.timeline();
    tl.fromTo(".anim-products", {x: 0}, {x: 1920, duration: 1})
    tl.fromTo(".anim-products", {opacity: 1}, {opacity: 0, duration: 0.2},">")
    tl.to(".anim-products", {x: -1920, duration: 0.2},">")
    tl.to(".anim-products", {opacity: 1, duration: 0.2},">")
    tl.to(".anim-products", {x: 0, duration: 1},">")
})




