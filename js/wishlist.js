// Sample product data
const products = [
  { id: 1, name: 'Product 1', price: 100, imageUrl: 'img/home/product-1-320_x_320.jpg' },
  { id: 2, name: 'Product 2', price: 200, imageUrl: 'img/home/product-2-320_x_436.jpg' },
  // Add more products as needed
];

// Function to create a product element
function createProductElement(product) {
  const productElement = document.createElement('div');
  productElement.className = 'product';

  const productImage = document.createElement('img');
  productImage.src = product.imageUrl;
  productImage.alt = product.name;

  const productName = document.createElement('h2');
  productName.textContent = product.name;

  const productPrice = document.createElement('p');
  productPrice.textContent = `$${product.price}`;

  productElement.appendChild(productImage);
  productElement.appendChild(productName);
  productElement.appendChild(productPrice);

  return productElement;
}

// Function to render the wishlist
function renderWishlist(products) {
  const wishlistContainer = document.getElementById('wishlist-container');
  wishlistContainer.innerHTML = ''; // Clear existing content

  products.forEach(product => {
    const productElement = createProductElement(product);
    wishlistContainer.appendChild(productElement);
  });
}

// Call the renderWishlist function with the sample product data
document.addEventListener('DOMContentLoaded', () => {
  renderWishlist(products);
});