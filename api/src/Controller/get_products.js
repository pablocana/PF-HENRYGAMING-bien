const Router = require("express");
const { Product } = require("../db");

//ejemplo de ruta: http://localhost:3001/products

const getAllProducts = Router();

getAllProducts.get("/", async (req, res, next) => {
  try {
    let allProducts = await Product.findAll();
    allProducts.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (b.id > a.id) {
        return -1;
      }
      return 0;
    });
    return res.json(allProducts);
  } catch (error) {
    console.error(error);
    next();
  }
});

module.exports = getAllProducts;
