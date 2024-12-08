// Example: Add to Cart functionality
document.querySelectorAll('.product-card button').forEach((button) => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});
// Cart functionality
let cartCount = 0;

// Function to update cart count
function updateCart() {
    const cartMessage = document.querySelector('.cart-message');
    cartMessage.textContent = `Items in Cart: ${cartCount}`;
}

// Function to handle "Add to Cart" button
document.querySelectorAll('.product-card button').forEach((button) => {
    button.addEventListener('click', () => {
        cartCount++;
        alert('Product added to cart!');
        updateCart();
    });
});

// Display cart count on page load
window.onload = () => {
    const cartMessage = document.createElement('div');
    cartMessage.className = 'cart-message';
    cartMessage.style.position = 'fixed';
    cartMessage.style.top = '10px';
    cartMessage.style.right = '20px';
    cartMessage.style.backgroundColor = '#2874f0';
    cartMessage.style.color = 'white';
    cartMessage.style.padding = '10px';
    cartMessage.style.borderRadius = '5px';
    cartMessage.style.fontSize = '16px';
    document.body.appendChild(cartMessage);
    updateCart();
};
const products = [
    { name: 'Product 1', price: 999, image: 'https://via.placeholder.com/200' },
    { name: 'Product 2', price: 1499, image: 'https://via.placeholder.com/200' },
    { name: 'Product 3', price: 1999, image: 'https://via.placeholder.com/200' }
];

function renderProducts() {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = ''; // Clear existing products
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button>Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
}

// Call the render function
renderProducts();
// Function to search products
function searchProducts() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchInput);
    });
    renderProducts(filteredProducts);  // Render filtered products
}

// Update render function to accept a filtered list
function renderProducts(filteredProducts = products) {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = ''; 
    // Clear existing products
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button>Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
}

// Call the render function initially to display all products
renderProducts();

// Function to sort products
function sortProducts() {
    const sortOption = document.getElementById('sort').value;
    let sortedProducts = [...products];  // Create a copy of the products array

    if (sortOption === 'name-asc') {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'name-desc') {
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOption === 'price-asc') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    renderProducts(sortedProducts);  // Render sorted products
}

const products = [
    { name: 'Product 1', price: 999, image: 'https://via.placeholder.com/200' },
    { name: 'Product 2', price: 1499, image: 'https://via.placeholder.com/200' },
    { name: 'Product 3', price: 1999, image: 'https://via.placeholder.com/200' },
    { name: 'Product 4', price: 1299, image: 'https://via.placeholder.com/200' },
    { name: 'Product 5', price: 2499, image: 'https://via.placeholder.com/200' },
    { name: 'Product 6', price: 3999, image: 'https://via.placeholder.com/200' },
    { name: 'Product 7', price: 599, image: 'https://via.placeholder.com/200' },
    { name: 'Product 8', price: 799, image: 'https://via.placeholder.com/200' }
];
