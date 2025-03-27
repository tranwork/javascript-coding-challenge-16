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