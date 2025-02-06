let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.getElementById('cart-icon');
    const cartCount = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');

    // Function to update cart count
    const updateCartCount = () => {
        cartCount.textContent = cart.length;
    };

    // Function to render cart items
    const renderCartItems = () => {
        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = '';
            cart.forEach((item, index) => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('cart-item');
                itemElement.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="item-details">
                        <h3>${item.name}</h3>
                        <p>$${item.price}</p>
                        <div class="item-quantity">
                            <button class="decrease" data-index="${index}">-</button>
                            <span>${item.quantity}</span>
                            <button class="increase" data-index="${index}">+</button>
                        </div>
                        <button class="remove" data-index="${index}">Remove</button>
                    </div>
                `;
                cartItemsContainer.appendChild(itemElement);
            });

            // Add event listeners for increase, decrease, and remove buttons
            document.querySelectorAll('.increase').forEach(button => {
                button.addEventListener('click', increaseQuantity);
            });
            document.querySelectorAll('.decrease').forEach(button => {
                button.addEventListener('click', decreaseQuantity);
            });
            document.querySelectorAll('.remove').forEach(button => {
                button.addEventListener('click', removeItem);
            });
        }
    };

    // Function to add item to cart
    const addToCart = (item) => {
        const existingItem = cart.find(cartItem => cartItem.name === item.name);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...item, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        renderCartItems();
    };

    // Function to increase item quantity
    const increaseQuantity = (event) => {
        const index = event.target.dataset.index;
        cart[index].quantity += 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCartItems();
    };

    // Function to decrease item quantity
    const decreaseQuantity = (event) => {
        const index = event.target.dataset.index;
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            cart.splice(index, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        renderCartItems();
    };

    // Function to remove item from cart
    const removeItem = (event) => {
        const index = event.target.dataset.index;
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        renderCartItems();
    };

    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const item = {
                name: button.dataset.name,
                price: button.dataset.price,
                image: button.dataset.image
            };
            addToCart(item);
        });
    });

    // Initial render
    updateCartCount();
    renderCartItems();
});