const modalClose = document.getElementById('modal-close'),
    modalBtn = document.querySelectorAll('.button'),
    modal = document.getElementById('modal'),
    overlay = document.getElementById('overlay')

const openModal = () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
const closeModal = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

modalBtn.forEach(n => n.addEventListener('click', openModal))

if (modalClose) {
    modalClose.addEventListener('click', closeModal)
}

document.addEventListener('keydown', function (e) {

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});




