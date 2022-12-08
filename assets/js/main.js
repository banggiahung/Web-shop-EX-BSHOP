search();
function search() {
    const searchBox = document.getElementById("search-items").value.toUpperCase();

    const webItems = document.getElementById("search-something");

    const items = document.querySelectorAll(".big-search");

    const namePrd = webItems.querySelectorAll(".title-name-prd");

    for (var i = 0; i < namePrd.length; i++) {

        let match = items[i].querySelectorAll(".title-name-prd")[0];

        if (match) {
            let textValue = match.textContent || match.innerHTML;
            if (textValue.toUpperCase().indexOf(searchBox) > -1) {
                items[i].style.display = "";
            }
            else {
                items[i].style.display = "none";
            }
        }
    }
};

openSearch();
// open search
function openSearch() {
    const modal = document.querySelector(".js-modal");
    const searchPrd = document.querySelectorAll(".input-search");
    function showSearch() {
        modal.classList.add('open');
    }
    for (const searchP of searchPrd) {
        searchP.addEventListener('click', showSearch);
    }

    document.onclick = function (e) {
        if (e.target.id !== 'search-items') {
            modal.classList.remove('open');
        }
    }
}
modalV1();

function modalV1() {
    const contact = document.querySelectorAll('.js-contact');
    const modalV1 = document.querySelector('.js-modal-v1');
    const modalCloseV1 = document.querySelector('.js-modal-close-v1');
    const modalContainerV1 = document.querySelector('.js-modal-container-v1');

    function showContact() {
        modalV1.classList.add('open-v1');
    }

    for (const contactV1 of contact) {
        contactV1.addEventListener('click', showContact);
    }

    function closeBuyTicket() {
        modalV1.classList.remove('open-v1');
    }
    modalV1?.addEventListener('click', closeBuyTicket);
    modalContainerV1?.addEventListener('click', function (event) {
        event.stopPropagation();
    });
    modalCloseV1?.addEventListener('click', closeBuyTicket);

}


// bar



//

// const daysNow = document.getElementById("time-d");
// const hoursNow = document.getElementById("time-h");

// const minutesNow = document.getElementById("time-p");

// const secondsNow = document.getElementById("time-s");

// const currentY = new Date().getFullYear();
// const deadline = new Date(`December 30 ${currentY} 18:37:25`).getTime();

// function upFlash() {
//     const currentTime = new Date();
//     console.log(currentTime);
//     const diff = deadline - currentTime;
//     const d = Math.floor(diff / 1000 / 60 / 60 / 24);
//     const h = Math.floor(diff / 1000 / 60 / 60) % 24;
//     const m = Math.floor(diff / 1000 / 60 / 60) % 60;
//     const s = Math.floor(diff / 1000) % 60;

//     document.getElementById("time-d").innerHTML = d;
//     document.getElementById("time-h").innerHTML = h < 10 ? '0' + h : h;
//     document.getElementById("time-p").innerHTML = m < 10 ? '0' + m : m;
//     document.getElementById("time-s").innerHTML = s < 10 ? '0' + s : s;
// }
// setInterval(upFlash, 1000);