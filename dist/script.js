const products = [
    { name: 'Product 1', price: 1.99, date:new Date('2023-10-15'), image: '../assets/product3.jpg' },
    { name: 'Product 2', price: 5.99, date:new Date('2023-10-3'), image: '../assets/product2.jpg' },
    { name: 'Product 3', price: 2.49, date:new Date('2023-10-4'), image: '../assets/product3.jpg' },
    { name: 'Product 3', price: 25.49, date:new Date('2023-10-7'), image: '../assets/product3.jpg' },
    { name: 'Product 3', price: 7.49, date:new Date('2023-10-17'), image: '../assets/product3.jpg' },
    { name: 'Product 3', price: 25.49, date:new Date('2023-10-19') , image: '../assets/product3.jpg' },
    { name: 'Product 3', price: 27.49, date:new Date('2023-10-12') , image: '../assets/product3.jpg' },
    { name: 'Product 3', price: 4.49, date:new Date('2023-10-15') , image: '../assets/product3.jpg' },
    { name: 'Product 3', price: 22.49, date:new Date('2023-10-21'), image: '../assets/product3.jpg' },
    { name: 'Product 3', price: 9.49, date:new Date('2023-10-1') , image: '../assets/product3.jpg' },
    { name: 'Product 3', price: 25.49, date:new Date('2023-10-20'), image: '../assets/product3.jpg' },
    { name: 'Product 3', price: 29.49, date:new Date('2023-10-9'), image: '../assets/product3.jpg' },
    // Add more products as needed
];


// Get a reference to the product grid container
const productGrid = document.getElementById('product-grid');

// Loop through the products and create a grid item for each
products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product');

    // Create the HTML for the product item
    productItem.innerHTML = `
    <div class="bg-white rounded-lg shadow-lg p-6" >
        <img class=" w-full " src="${product.image}" alt="${product.name}" id="product_image" width="100">
        <div class="flex items-center justify-between mt-4">
        <h3 class="text-xl font-bold text-gray-900 mt-4">${product.name}</h3>
        <p class="text-gray-900 font-bold text-lg pl-10">Price: $${product.price.toFixed(2)}</p>
      
        </div>
        <div><br></div>
        <button class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 ml-28">Add to Cart</button>
        <p class="text-gray-500 ">date:${product.date.toLocaleDateString()}</p>
        </div>
    `;

    // Append the product item to the product grid
    productGrid.appendChild(productItem);
});
function priceup() {
    products.sort(
        function (a, b) {
        return a.price - b.price;
    });

    
// Get a reference to the product grid container
const productGrid = document.getElementById('product-grid');
products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product');
    productGrid.innerHTML = ``;
});

// Loop through the products and create a grid item for each
products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product');

    // Create the HTML for the product item
    
    productItem.innerHTML = `
    <div class="bg-white rounded-lg shadow-lg p-8" >
        <img class=" w-full " src="${product.image}" alt="${product.name}" id="product_image" width="100">
        <div class="flex items-center justify-between mt-4">
        <h3 class="text-xl font-bold text-gray-900 mt-4">${product.name}</h3>
        <p class="text-gray-900 font-bold text-lg pl-10">Price: $${product.price.toFixed(2)}</p>
        
      
        </div>
        <div><br></div>
        <button class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 ml-28">Add to Cart</button>
      
      <p class="text-gray-900 font-bold text-lg pl-10">date:${product.date.toLocaleDateString()}</p>
        </div>
    `;

    // Append the product item to the product grid
    productGrid.appendChild(productItem);
});
}


//------------------------------pricedown------------------------------------------------------------------------------
function pricedown() {
    products.sort(
        function (a, b) {
        return b.price - a.price;
    });

    
// Get a reference to the product grid container
const productGrid = document.getElementById('product-grid');
products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product');
    productGrid.innerHTML = ``;
});

// Loop through the products and create a grid item for each
products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product');

    // Create the HTML for the product item
    
    productItem.innerHTML = `
    <div class="bg-white rounded-lg shadow-lg p-8" >
        <img class=" w-full " src="${product.image}" alt="${product.name}" id="product_image" width="100">
        <div class="flex items-center justify-between mt-4">
        <h3 class="text-xl font-bold text-gray-900 mt-4">${product.name}</h3>
        <p class="text-gray-900 font-bold text-lg pl-10">Price: $${product.price.toFixed(2)}</p>
      
        </div>
        <div><br></div>
        <button class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 ml-28">Add to Cart</button>
        <p class="text-gray-900 font-bold text-lg pl-10">date:${product.date.toLocaleDateString()}</p>
        </div>
    `;

    // Append the product item to the product grid
    productGrid.appendChild(productItem);
});
}

//------------------------------datesort------------------------------------------------------------------------------
function recent() {
    products.sort(
        function (a, b) {
         return a.date - b.date;
    });

    
// Get a reference to the product grid container
const productGrid = document.getElementById('product-grid');
products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product');
    productGrid.innerHTML = ``;
});

// Loop through the products and create a grid item for each
products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product');

    // Create the HTML for the product item
    
    productItem.innerHTML = `
    <div class="bg-white rounded-lg shadow-lg p-8" >
        <img class=" w-full " src="${product.image}" alt="${product.name}" id="product_image" width="100">
        <div class="flex items-center justify-between mt-4">
        <h3 class="text-xl font-bold text-gray-900 mt-4">${product.name}</h3>
        <p class="text-gray-900 font-bold text-lg pl-10">Price: $${product.price.toFixed(2)}</p>
      
        </div>
        <div><br></div>
        <button class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 ml-28">Add to Cart</button>
        <p class="text-gray-900 font-bold text-lg pl-10">date:${product.date.toLocaleDateString()}</p>
        </div>
    `;

    // Append the product item to the product grid
    productGrid.appendChild(productItem);
});
}
//---------------------------------------search------------------------------------------------------------------

  function search(){
    var inputElement = document.getElementById("searchinput");
    const results = products.filter((product) => product.name === inputElement.value);
       // Get a reference to the product grid container
const productGrid = document.getElementById('product-grid');
results.forEach(result => {
    const productItem = document.createElement('div');
    productItem.classList.add('product');
    productGrid.innerHTML = ``;
});

// Loop through the products and create a grid item for each
results.forEach(result => {
    const productItem = document.createElement('div');
    productItem.classList.add('product');

    // Create the HTML for the product item
    
    productItem.innerHTML = `
    <div class="bg-white rounded-lg shadow-lg p-8" >
        <img class=" w-full " src="${result.image}" alt="${result.name}" id="product_image" width="100">
        <div class="flex items-center justify-between mt-4">
        <h3 class="text-xl font-bold text-gray-900 mt-4">${result.name}</h3>
        <p class="text-gray-900 font-bold text-lg pl-10">Price: $${result.price.toFixed(2)}</p>
      
        </div>
        <div><br></div>
        <button class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 ml-28">Add to Cart</button>
        <p class="text-gray-900 font-bold text-lg pl-10">date:${result.date.toLocaleDateString()}</p>
        </div>
    `;

    // Append the product item to the product grid
    productGrid.appendChild(productItem);
});
  }


  var menu = document.getElementById("menu");

  // open/close the menu when the user clicks on the button
  function toggleMenu() {
      if (menu.classList.contains('hidden')) {
          menu.classList.remove('hidden');
      } else {
          menu.classList.add('hidden');
      }
  }

  // close the menu when the user clicks outside of it 
  window.onclick = function (event) {
      var dropdownWrapper = document.getElementById('dropdown-wrapper');
      if (!dropdownWrapper.contains(event.target) && !menu.classList.contains('hidden')) {
          menu.classList.add('hidden');
      }
  }