const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../products.json');


function getProducts() {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
}


// /products/instock/:qt → DOIT VENIR EN PREMIER
router.get('/instock/:qt', (req, res) => {
    const products = getProducts();
    const qt = parseInt(req.params.qt);
    const filtered = {};
  
    for (let id in products) {
      if (products[id].stock >= qt) {
        filtered[id] = products[id];
      }
    }
  
    res.json(filtered);
  });
  
  // /products/:id/:qt → prix total
  router.get('/:id/:qt', (req, res) => {
    const products = getProducts();
    const id = req.params.id.toUpperCase();
    const qt = parseInt(req.params.qt);
    const product = products[id];
  
    if (product) {
      const total = product.price * qt;
      res.json({ total: total });
    } else {
      res.status(404).json({ error: "Produit introuvable" });
    }
  });
  
  // /products/:id → détails du produit
  router.get('/:id', (req, res) => {
    const products = getProducts();
    const id = req.params.id.toUpperCase();
    const product = products[id];
  
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: "Produit introuvable" });
    }
  });
  
  // /products → tous les produits
  router.get('/', (req, res) => {
    const products = getProducts();
    res.json(products);
  });
  

module.exports = router;
