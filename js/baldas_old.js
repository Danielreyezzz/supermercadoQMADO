const slots = [];


function cargarSlots(){
    // Iterar del 1 al 24 y obtener las constantes
for (let i = 1; i <= 24; i++) {
    const slot = document.getElementById(`slot_${i}`);
    console.log("slot"+slot.id);
    slots.push(slot);

    
    slot.addEventListener("mouseover", function () {
        console.log("creando over");
        show_eye(slot);
    });
    slot.addEventListener("mouseout", function () {
        console.log("creandio fuera");
        hide_eye(slot);
    });
}
}


function show_eye(slot) {
    console.log("mostrando ojo"+slot.id);
    let eye = slot.lastElementChild;
    let cart = eye.previousElementSibling;
    console.log(cart)
    if (eye.classList.contains('d-none')) {
        eye.classList.remove('d-none');
    }
    if (cart.classList.contains('d-none')) {
        cart.classList.remove('d-none');
    }
}

function hide_eye(slot) {
    console.log("escondiendo ojo"+slot.id);
    let eye = slot.lastElementChild;
    let cart = eye.previousElementSibling;
    if (!eye.classList.contains('d-none')) {
        eye.classList.add('d-none');
    }
    if (!cart.classList.contains('d-none')) {
        cart.classList.add('d-none');
    }
}
