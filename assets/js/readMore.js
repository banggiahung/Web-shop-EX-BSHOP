

function readMoreText() {

    var dotS = document.getElementById("dots");
    var moreText = document.getElementById("more-text-dec");

    var btnMore = document.getElementById("btnMore");

    if (dotS.style.display == "none") {
        dotS.style.display = "inline";
        btnMore.innerHTML = "Xem thêm";
        moreText.style.display = "none";
    }
    else {
        dotS.style.display = "none";
        btnMore.innerHTML = "Thu gọn";
        moreText.style.display = "inline";
    }
}

//  Đổi ảnh nhỏ!!!!

var mainImg = document.getElementById('big-img');
var smallImg = document.getElementsByClassName('small-img');

smallImg[0].onclick = function () {

    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function () {

    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function () {

    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function () {

    mainImg.src = smallImg[3].src;
}
    // End