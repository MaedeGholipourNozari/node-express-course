const express = require('express'); 
const { products } = require("./data");

const app = express();  

app.use(express.static("./public"));

app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked!" });
  });

app.get('/api/v1/products', (req, res) => {
    res.json(products);
  });

  app.get('/api/v1/products/:productID', (req, res) => {

    const idToFind = parseInt(req.params.productID); 

    const product = products.find((p) => p.id === idToFind);

    if (!product) {
        // If the product doesn't exist, return a 404 status with the error message
        return res.status(404).json({ message: "That product was not found." });
      }

    res.json(product);
  });

  app.get('/api/v1/query', (req, res) => {

    const { search = '', limit = 10, maxPrice  } = req.query;
    const limitValue = parseInt(limit, 10);
  
    let filteredProducts = products.filter(p => p.name.toLowerCase().startsWith(search.toLowerCase()));

    if (maxPrice) {
        const maxPriceValue = parseFloat(maxPrice);
        filteredProducts = filteredProducts.filter(p => p.price < maxPriceValue);
      }
  
    const limitedProducts = filteredProducts.slice(0, limitValue);
  
    // Return the filtered and limited products
    res.json(limitedProducts);
  });
  

        app.all('*', (req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});


// Start the server and listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});