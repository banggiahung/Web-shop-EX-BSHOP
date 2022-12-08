// 


let cartIcon = document.querySelector('#cart-icons');
let cart = document.querySelector('.cart-nav');
let cartClose = document.querySelector('#close-ur-cart');

cartIcon.onclick = () => {
    cart.classList.add("open-v3")
}
cartClose.onclick = () => {
    cart.classList.remove("open-v3")
}
// Work with cart

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

// 
function ready() {
    // xóa cart
    var removeC = document.getElementsByClassName('cart-remove');

    for (var i = 0; i < removeC.length; i++) {
        var btnRemove = removeC[i];
        btnRemove.addEventListener('click', removeCart);
    }
    //qtt
    var qttInput = document.getElementsByClassName('cart-qtt');
    for (var i = 0; i < qttInput.length; i++) {
        var input = qttInput[i];
        input.addEventListener("change", qttChange)
    }
    // thêm giỏ hàng
    var addCart = document.getElementsByClassName('add-cart')
    for (var i = 0; i < addCart.length; i++) {
        var btn = addCart[i];
        btn.addEventListener('click', addCartClicked);
    }

    document.getElementsByClassName('btn-cart')[0].addEventListener('click', btnClickBuy);
}
// buy

function btnClickBuy() {
    alert('thanh toán thành công');
    var cartContent = document.getElementsByClassName('cart-content')[0]
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updateCart();
}

// xóa cart

function removeCart(e) {
    var clickBtnRemove = e.target
    clickBtnRemove.parentElement.remove()
    updateCart();
}

// qtt

function qttChange(e) {
    var input = e.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCart();
}
// add
function addCartClicked(e) {
    var btn = e.target;
    var shopProducts = btn.parentElement;
    var title = shopProducts.getElementsByClassName('title-prds')[0].innerText;
    console.log(title);
    // var priceAll = shopProducts.getA('price-products')[0].innerText;

    var priceAll = shopProducts.getElementsByClassName('price-products')[0].innerText;
    console.log(priceAll);
    var imgAll = shopProducts.getElementsByClassName('items-1')[0].src;
    addToCart(priceAll, title, imgAll);
    updateCart();
}

function addToCart(priceAll, title, imgAll) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var itemsName = cartItems.getElementsByClassName('detail-box-title');
    for (var i = 0; i < itemsName.length; i++) {
        if (itemsName[i].innerText == title) {
            alert("da co");
            return;
        }
    }
    var cartBoxContent = `  <img class="cart-img" src="${imgAll}" alt="">
                        <div class="detail-box-cart">
                            <div class="detail-box-title">${title}</div>
                            <div class="cart-price"> ${priceAll}</div>
                            <input value="1" type="number" class="cart-qtt">
                        </div>
                        <i class='bx bxs-trash cart-remove'></i>`;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCart);
    cartShopBox.getElementsByClassName('cart-qtt')[0].addEventListener('change', qttChange);
}


//  Cập nhật kho hàng

function updateCart() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBox = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cartBox.length; i++) {
        var cartBoxes = cartBox[i];
        var priceEle = cartBoxes.getElementsByClassName('cart-price')[0];
        console.log(priceEle);
        var qttEle = cartBoxes.getElementsByClassName('cart-qtt')[0];
        var price = parseFloat(priceEle.innerText.replace("đ", ""));
        console.log(price);
        var cartQtt = qttEle.value;
        total = total + (price * 1000 * cartQtt);
        // total = total.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    }
    total = total.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    // console.log(total);
    document.getElementsByClassName('total-price')[0].innerText = total;
}


