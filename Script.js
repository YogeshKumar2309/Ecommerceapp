Script js
// Simple Cart Logic using LocalStorage
let cart = JSON.parse(localStorage.getItem('ecommerce_cart')) || [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    localStorage.setItem('ecommerce_cart', JSON.stringify(cart));
    alert(${productName} has been added to your cart!);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (!cartContainer || !cartTotal) return; // Exit if not on the cart page

    cartContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach((item, index) => {
            total += item.price;
            cartContainer.innerHTML += 
                <div class="cart-item">
                    <span>${item.name}</span>
                    <span>$${item.price.toFixed(2)}</span>
                    <button class="btn" style="padding: 0.25rem 0.75rem; background: #ef4444;" onclick="removeFromCart(${index})">Remove</button>
                </div>
            ;
        });
    }
    cartTotal.innerText = $${total.toFixed(2)};
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('ecommerce_cart', JSON.stringify(cart));
    updateCartDisplay();
}

function handleCheckout(event) {
    event.preventDefault();
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Order placed successfully! Thank you for shopping with us.");
    cart = [];
    localStorage.setItem('ecommerce_cart', JSON.stringify(cart));
    window.location.href = '../index.html';
}

function handleLogin(event) {
    event.preventDefault();
    alert("Logged in successfully!");
    window.location.href = '../index.html';
}

function handleSupport(event) {
    event.preventDefault();
    alert("Message sent! Our support team will get back to you soon.");
    event.target.reset();
}

// Initialize cart display on load
document.addEventListener('DOMContentLoaded', updateCartDisplay);
