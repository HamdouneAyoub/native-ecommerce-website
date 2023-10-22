const cats = [
    { name: 'MEN', price: 10.99, image: '../assets/cat1.jpg' },
    { name: 'WOMEN', price: 19.99, image: '../assets/cat2.jpg' },
    { name: 'CHILDREN', price: 25.49, image: '../assets/cat3.jpg' },
    
    // Add more products as needed
];

// Get a reference to the product grid container
const productGrid = document.getElementById('product-grid');

// Loop through the products and create a grid item for each
cats.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product');

    // Create the HTML for the product item
    productItem.innerHTML = `
    <div class="bg-white rounded-lg shadow-lg p-8" >
        <img class=" w-full " src="${product.image}" alt="${product.name}" id="product_image" width="100">
        <div class="flex items-center justify-between mt-4 ml-32">
        <h3 class="text-xl font-bold  text-gray-900 mt-4">${product.name}</h3>
        </div>
        <div><br></div>
        <button class="bg-gray-900  text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 ml-24">Explore More ></button>
        </div>
    `;

    // Append the product item to the product grid
    productGrid.appendChild(productItem);
});
