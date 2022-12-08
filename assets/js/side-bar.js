openBar();
function openBar() {

    const toggle = document.getElementById("toggle");

    const sidebar = document.getElementById("side-bar");

    document.onclick = function (e) {
        if (e.target.id !== 'side-bar' && e.target.id !== 'toggle') {
            toggle.classList.remove('active');
            sidebar.classList.remove('active');
        }
        toggle.onclick = function () {
            toggle.classList.toggle('active');
            sidebar.classList.toggle('active');
        }
    }
}
cateShow();
function cateShow() {

    const allPro = document.querySelectorAll('.click-choose');

    const modalV2 = document.querySelector('.js-modal-v2');
    const modalIconV1 = document.querySelector('.js-modal-close-v3')

    const modalCloseV2 = document.querySelector('.js-container-v3');

    function showCate() {
        modalV2.classList.add('open-v2')
    }
    for (const cate of allPro) {
        cate.addEventListener('click', showCate)
    }
    function closeCate() {
        modalV2.classList.remove('open-v2')
    }

    modalIconV1.addEventListener('click', closeCate)
    modalV2.addEventListener('click', closeCate)
    modalCloseV2.addEventListener('click', function (event) {
        event.stopPropagation()
    })
}
