"use strict";
// Menu sm
const profileMenu = document.getElementById('profileMenu');
const profileMenuButton = document.getElementById('profileMenuButton');
const profilemMenuClose = document.getElementById('profilemMenuClose');
const emailButton_sm = document.getElementById('emailButton_sm');
const nameButton_sm = document.getElementById('nameButton_sm');
const telButton_sm = document.getElementById('telButton_sm');
const addressButton_sm = document.getElementById('addressButton_sm');
const payMethodsButton_sm = document.getElementById('payMethodsButton_sm');
const changePassButton_sm = document.getElementById('changePassButton_sm');
const accountsButton_sm = document.getElementById('accountsButton_sm');
// Buttons 
const emailButton = document.getElementById('emailButton');
const nameButton = document.getElementById('nameButton');
const telButton = document.getElementById('telButton');
const addressButton = document.getElementById('addressButton');
const payMethodsButton = document.getElementById('payMethodsButton');
const changePassButton = document.getElementById('changePassButton');
const accountsButton = document.getElementById('accountsButton');
// Panels
const changeEmail = document.getElementById('changeEmail');
const changeName = document.getElementById('changeName');
const changeTel = document.getElementById('changeTel');
const changeAddress = document.getElementById('changeAddress');
const payMethods = document.getElementById('payMethods');
const changePass = document.getElementById('changePass');
const accounts = document.getElementById('accounts');



emailButton.addEventListener('click', ()=>{
    panelManager(changeEmail);
})

nameButton.addEventListener('click', ()=>{
    panelManager(changeName);
})

telButton.addEventListener('click', ()=>{
    panelManager(changeTel);
})

addressButton.addEventListener('click', ()=>{
    panelManager(changeAddress);
})

payMethodsButton.addEventListener('click', ()=>{
    panelManager(payMethods);
})

changePassButton.addEventListener('click', ()=>{
    panelManager(changePass);
})

accountsButton.addEventListener('click', ()=>{
    panelManager(accounts);
})


// * SM menú --- * //

profileMenuButton.addEventListener('click', ()=>{
    openProfile();
})

emailButton_sm.addEventListener('click', ()=>{
    console.log('ta');
    panelManager(changeEmail);
    closeProfile();
})

nameButton_sm.addEventListener('click', ()=>{
    console.log('ta');
    panelManager(changeName);
    closeProfile();
})

telButton_sm.addEventListener('click', ()=>{
    console.log('ta');
    panelManager(changeTel);
    closeProfile();
})

addressButton_sm.addEventListener('click', ()=>{
    panelManager(changeAddress);
    closeProfile();
})

payMethodsButton_sm.addEventListener('click', ()=>{
    panelManager(payMethods);
    closeProfile();
})

changePassButton_sm.addEventListener('click', ()=>{
    panelManager(changePass);
    closeProfile();
})

accountsButton_sm.addEventListener('click', ()=>{
    panelManager(accounts);
    closeProfile();
})
profilemMenuClose.addEventListener('click', ()=>{
    closeProfile();
})

function closeProfile(){
    profileMenu.classList.replace('fade-in-left','fade-out-left');
    setTimeout(function () {
        profileMenu.classList.add('d-none');
    }, 1000);
}
function openProfile(){
    if (profileMenu.classList.contains('fade-out-left')) {
        profileMenu.classList.replace('fade-out-left', 'fade-in-left');
    }
    profileMenu.classList.remove('d-none');
}

// * ---------- * //

function panelManager(panel){
    let panels = [changeEmail, changeName, changeTel, changeAddress, payMethods, changePass, accounts];
    panels.forEach(element => {
        if(!element.classList.contains('d-none') && element != panel){
            element.classList.add('d-none');
        }else if(element == panel && element.classList.contains('d-none')){
            element.classList.remove('d-none');
        }
    });
}