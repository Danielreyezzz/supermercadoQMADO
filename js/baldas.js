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
    if (eye.classList.contains('d-none')) {
        eye.classList.remove('d-none');
    }
}

function hide_eye(slot) {
    let eye = slot.lastElementChild;
    if (!eye.classList.contains('d-none')) {
        eye.classList.add('d-none');
    }
}
