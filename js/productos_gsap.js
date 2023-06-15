'use strict';

function showPanel(id) {

    let selected = document.getElementById("card-"+ id);
    let button = document.getElementById('button_' + id);
    
    let unselectPanel;
    let unselecButton;
    let options = ['ingredientes', 'alergenos', 'valornutricional', 'informacion','condicionesconservacion'];

    for (const iterator of options) {

        // Completa la barra de progreso 
        

        if (iterator != id) {
            //Asigna elemento no seleccionado y los deja ocultos si están visibles
            unselectPanel = document.getElementById("card-" + iterator);
            unselecButton = document.getElementById('button_' + iterator);
            if (!unselectPanel.getAttribute('hidden')) {
                unselectPanel.setAttribute('hidden', true);
                unselecButton.classList.remove('active');
                unselecButton.classList.remove('scale-up-center');
                unselecButton.classList.remove('border'); 
                unselecButton.classList.remove('border-danger'); 
                unselecButton.classList.add('text-truncate'); 
                unselecButton.classList.add('col-2'); 
                unselecButton.classList.remove('col-4'); 
                // unselecButton.classList.add('border'); 

            }
        }
    }
    // Hace visible el panel seleccionado si estaba no visible.
    selected.removeAttribute('hidden');
    button.classList.add('active')
    button.classList.add('border-danger')
    button.classList.remove('text-truncate')
    button.classList.remove('col-2')
    button.classList.add('scale-up-center')
    button.classList.add('border')
    button.classList.add('col-4')
}

function carrousel(preview){

    let options = ['preview_0', 'preview_1', 'preview_2', 'preview_3'];
    let selected = document.getElementById(preview);
    let main_img = document.getElementById('main_img');

    for (const iterator of options) {

        // Completa la barra de progreso 
        

        if (iterator != preview) {
            //Asigna elemento no seleccionado y los deja ocultos si están visibles
            let unselectImg = document.getElementById(iterator);
           
            unselectImg.classList.remove('scale-up-center', 'border-danger', 'shadow');
     
        }
    }

    main_img.removeAttribute('src');
    main_img.setAttribute('src', selected.getAttribute('src'));
    selected.classList.add('scale-up-center', 'border-danger', 'shadow');

}

// function moveAnim(){
//     let id = null;
//     let elem = document.getElementById("product_anim"); 
//     // let panel = document.getElementById('panelPedido');

//     elem.classList.remove('d-none');
//     let posY = 700;
//     clearInterval(id);
//     id = setInterval(frame, 1);
//     function frame() {
       
//         if (posY >= 900) {
//             clearInterval(id);
//         }else{
//             posY++;
//             elem.style.top = posY/10 + '%'; 
//             if(elem.style.top == '90%'){
//                 elem.style.opacity = 0;
//                 elem.classList.add('d-none');
//                 // panel.classList.add('d-none');
//             }
//         }
        
//         }
//     }
    




// const btn = document.getElementById('buy_it');

// btn.addEventListener('click', () =>{    
//     const tl = gsap.timeline({defaults: {duration: 1}})
//     tl.fromTo('#product_anim', {x:-100, y:-150},{x:-100,y:20})
//     // tl.fromTo('#panelPedido',{opacity: 1}, {opacity:0},'<')
//     tl.fromTo('#product_anim',{opacity: 1}, {opacity:0},'<')
//     tl.fromTo('#product_anim',{rotation: '-180deg'}, {rotation:'0deg'},'<')
//     // tl.to('#panelPedido',{display: 'none'},'<');
   
// });