// OPEN & CLOSE CART
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");
const likeCart = document.querySelector(".like");

cartIcon.addEventListener('click' , ()=>{
    cart.classList.add('active');
});

closeCart.addEventListener('click' , ()=>{
    cart.classList.remove('active');
});

// start when the document is ready
if(document.readyState == "loading"){
    document.addEventListener('DOMContentLoaded' , start);
}else{
    start();
}


//****************START******************** */
function start(){
    addEvents();
}

// *********UPDATE & RERENDER***************
function update(){
    addEvents();
    updateTotal();
}

// *************************ADD EVENTS*************
function addEvents(){
// remove items from cart
    let cartRemove__btns = document.querySelectorAll('.cart-remove');
    console.log(cartRemove__btns);
    cartRemove__btns.forEach(btn => {
        btn.addEventListener('click', handle_removeCartItem);
    });

    // **************CHANGE ITEM QUANTITY
    let cartQuantity_inputs = document.querySelectorAll('.cart-quantity');
    cartQuantity_inputs.forEach(input => {
        input.addEventListener("change" , handle_changeItemQuantity);
    })

    // *************ADD ANOTHER ITEM TO CART******************
    let addCart_btns = document.querySelectorAll(".add");
    addCart_btns.forEach(btn => {
        btn.addEventListener('click', handle_addCartItem);
    });

    // ***************BUY NOW****************
    const buy_btn = document.querySelector('.btn-buy');
    buy_btn.addEventListener("click", handle_buyOrder);
}

// ***************HANDLE EVENTS FUNCTIONS***********
let itemsAdded = []
function handle_addCartItem(){
    let product = this.parentElement;
    let title = product.querySelector('.product-title').innerHTML;
    let price = product.querySelector('.product-price').innerHTML;
    let imgsrc = product.querySelector('.product-img').src;
    console.log(title, price, imgsrc);

    let newToAdd = {
        title,
        price,
        imgsrc,
    };

    // ITEM IS ALREADY ADDED****************
    if(itemsAdded.find(el => el.title == newToAdd.title)){
        alert("Already added!!!\nIncrease the quantity in your cart if need be.");
        return;
    }else{
        itemsAdded.push(newToAdd);
    }

    // **********ADD PRODUCT TO CART************
    let cartBoxElement = CartBoxComponent(title, price, imgsrc);
    let newNode = document.createElement("div");
    newNode.innerHTML = cartBoxElement;
    const cartContent = cart.querySelector(".cart-content");
    cartContent.appendChild(newNode);

    update();
}

function handle_removeCartItem(){
    this.parentElement.remove();
    itemsAdded  = itemsAdded.filter(el => el.title != this.parentElement.querySelector('.cart-product-title').innerHTML)

    update();
}

function handle_changeItemQuantity(){
    if(isNaN(this.value) || this.value < 1) {
        this.value = 1;
    }
    this.value = Math.floor(this.value);

    update();
}

function handle_buyOrder(){
    if (itemsAdded.length <= 0){
        alert("You mean you want to buy nothing?!\nPlease make an order first.");
        return;
    }
    const cartContent = cart.querySelector(".cart-content");
    cartContent.innerHTML = '';
    alert("Successful Order.");
    itemsAdded = [];

    update();
}

// ***********UPDATE & RERENDER FUNCTIONS**************
function updateTotal(){
    let cartBoxes = document.querySelectorAll('.cart-box');
    const totalElement = cart.querySelector('.total-price');
    let total = 0;
    cartBoxes.forEach(cartBox => {
        let priceElement = cartBox.querySelector('.cart-price')
        let price = parseFloat(priceElement.innerHTML.replace("#", ""))
        let quantity  = cartBox.querySelector(".cart-quantity").value;
        total += price * quantity;
    });

    totalElement.innerHTML = "#" + total;
}


// ***************HTML COMPONENTS****************
function CartBoxComponent(title, price, imgsrc){
    return`
     <div class="cart-box">
    <img src=${imgsrc} alt="" class="cart-img">
    <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" value="1" class="cart-quantity">
    </div>
    <!-- REMOVE CART -->
    <i class='bx bx-trash cart-remove'></i>
</div>`;
}


//*************HEARTLIKE BUTTON ACTIVATED*********** */
// ***********FIRST BUTTON***************
const heartButton = document.getElementById("like1");

heartButton.addEventListener("click", function() {
  if (heartButton.classList.contains("clicked")) {
    heartButton.classList.remove("clicked");
  } else {
    heartButton.classList.add("clicked");
  }
});

// ***************SECOND BUTTON*****************
const heartButton2 = document.getElementById("like2");

heartButton2.addEventListener("click", function() {
  if (heartButton2.classList.contains("clicked")) {
    heartButton2.classList.remove("clicked");
  } else {
    heartButton2.classList.add("clicked");
  }
});

// ******************THIRD BUTTON***************
const heartButton3 = document.getElementById("like3");

heartButton3.addEventListener("click", function() {
  if (heartButton3.classList.contains("clicked")) {
    heartButton3.classList.remove("clicked");
  } else {
    heartButton3.classList.add("clicked");
  }
});

// *********************FOURTH BUTTON *********************
const heartButton4 = document.getElementById("like4");

heartButton4.addEventListener("click", function() {
  if (heartButton4.classList.contains("clicked")) {
    heartButton4.classList.remove("clicked");
  } else {
    heartButton4.classList.add("clicked");
  }
});
// **************FIFTH BUTTON***********************
const heartButton5 = document.getElementById("like5");

heartButton5.addEventListener("click", function() {
  if (heartButton5.classList.contains("clicked")) {
    heartButton5.classList.remove("clicked");
  } else {
    heartButton5.classList.add("clicked");
  }
});

// ******************SIXTH BUTTON******************
const heartButton6 = document.getElementById("like6");

heartButton6.addEventListener("click", function() {
  if (heartButton6.classList.contains("clicked")) {
    heartButton6.classList.remove("clicked");
  } else {
    heartButton6.classList.add("clicked");
  }
});

// *******************SEVENTH BUTTON***************
const heartButton7 = document.getElementById("like7");

heartButton7.addEventListener("click", function() {
  if (heartButton7.classList.contains("clicked")) {
    heartButton7.classList.remove("clicked");
  } else {
    heartButton7.classList.add("clicked");
  }
});
// **********************EIGHTH BUTTON***************
const heartButton8 = document.getElementById("like8");

heartButton8.addEventListener("click", function() {
  if (heartButton8.classList.contains("clicked")) {
    heartButton8.classList.remove("clicked");
  } else {
    heartButton8.classList.add("clicked");
  }
});

                    