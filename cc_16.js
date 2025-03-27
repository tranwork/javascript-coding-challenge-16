// Task 2: Fetch with .then()
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
      .then(response => response.json())
      .then(products => {
        products.forEach(product => {
          console.log(product.fields.name);
        });
      })
      .catch(error => {
        console.error("Error in fetchProductsThen:", error);
      });
  }

  // Task 3: Fetch with async/await
async function fetchProductsAsync() {
    try {
      const response = await fetch('https://www.course-api.com/javascript-store-products');
      const products = await response.json();
      displayProducts(products);
    } catch (error) {
      handleError(error);
    }
  }

  // Task 4: Display products in the DOM
function displayProducts(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = '';
  
    products.slice(0, 5).forEach(product => {
      const { name, price, image } = product.fields;
      const productCard = document.createElement('div');
      productCard.className = 'product-card';
  
      productCard.innerHTML = `
        <img src="${image[0].url}" alt="${name}" />
        <div class="product-name">${name}</div>
        <div class="product-price">$${(price / 100).toFixed(2)}</div>
      `;
  
      container.appendChild(productCard);
    });
  }

  
// Task 5: Reusable error handler
function handleError(error) {
    console.error("An error occurred:", error.message);
  }


// Task 6: Trigger both fetch functions
fetchProductsThen();
fetchProductsAsync();