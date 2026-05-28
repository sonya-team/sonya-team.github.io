let cart = [];

        function addToCart(name, price) {
            cart.push({ name, price });
            updateCartUI();
        }

        function updateCartUI() {
            const cartContainer = document.getElementById('cart-items');
            const totalContainer = document.getElementById('cart-total-price');
            
            if (cart.length === 0) {
                cartContainer.innerHTML = 'Cart is empty';
                totalContainer.innerText = '0';
                return;
            }

            cartContainer.innerHTML = '';
            let total = 0;

            cart.forEach((item, index) => {
                total += item.price;
                cartContainer.innerHTML += `
                    <div class="cart-item">
                        <span>${item.name}</span>
                        <span>${item.price} $</span>
                        <button onclick="removeFromCart(${index})" style="padding: 5px 10px; background: #cc0000;">Х</button>
                    </div>
                `;
            });

            totalContainer.innerText = total;
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCartUI();
        }

        function checkout() {
            if (cart.length === 0) {
                alert('Cart is empty!');
                return;
            }
            alert('Order successfully placed! Thank you for choosing us.');
            cart = [];
            updateCartUI();
        }