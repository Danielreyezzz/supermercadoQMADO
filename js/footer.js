// * Funcionalidad expandir footer

const expand_footer = document.getElementById('expand_footer');
expand_footer.addEventListener('click', () => {
    let containerPanel = document.getElementById('containerPanel');
    let footer_content = document.getElementById('footer_content');
    let bigcart = document.getElementById('Bigcart');
    (containerPanel.classList.contains('hidden-footer')) ? containerPanel.classList.replace('hidden-footer', 'display-footer') : containerPanel.classList.replace('display-footer', 'hidden-footer');
    (footer_content.classList.contains('d-none')) ? footer_content.classList.remove('d-none') : footer_content.classList.add('d-none');
    (bigcart.classList.contains('Bigcart_nofooter')) ? bigcart.classList.replace('Bigcart_nofooter','Bigcart_footer') : bigcart.classList.replace('Bigcart_footer','Bigcart_nofooter')
});