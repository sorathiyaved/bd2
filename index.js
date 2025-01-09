const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));


let products = [
  {
    id: 1,
    name: "Xiaomi iPhone 12",
    brand: "Xiaomi",
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: "Android",
    camera: 108,
  },
  {
    id: 2,
    name: "Oppo Mi 10",
    brand: "Xiaomi",
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: "iOS",
    camera: 64,
  },
  {
    id: 3,
    name: "Samsung Mi 10",
    brand: "Oppo",
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 4,
    name: "Apple Find X2",
    brand: "Samsung",
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 48,
  },
  {
    id: 5,
    name: "Oppo Mi 11",
    brand: "Xiaomi",
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: "iOS",
    camera: 24,
  },
  {
    id: 6,
    name: "OnePlus Find X3",
    brand: "Apple",
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 7,
    name: "Apple Pixel 5",
    brand: "Apple",
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 8,
    name: "Google Mi 10",
    brand: "Oppo",
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 108,
  },
  {
    id: 9,
    name: "Oppo Mi 11",
    brand: "Samsung",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 10,
    name: "Xiaomi Mi 10",
    brand: "Oppo",
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: "Android",
    camera: 12,
  },
  {
    id: 11,
    name: "OnePlus Pixel 5",
    brand: "Apple",
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 12,
  },
  {
    id: 12,
    name: "Xiaomi OnePlus 8",
    brand: "Xiaomi",
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: "Android",
    camera: 48,
  },
  {
    id: 13,
    name: "Xiaomi Pixel 6",
    brand: "Oppo",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 108,
  },
  {
    id: 14,
    name: "Samsung Find X2",
    brand: "Oppo",
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: "Android",
    camera: 48,
  },
  {
    id: 15,
    name: "Google OnePlus 8",
    brand: "Apple",
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 16,
    name: "OnePlus iPhone 12",
    brand: "OnePlus",
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: "iOS",
    camera: 64,
  },
  {
    id: 17,
    name: "Google Mi 11",
    brand: "Oppo",
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 18,
    name: "Google OnePlus 9",
    brand: "Apple",
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 64,
  },
  {
    id: 19,
    name: "Oppo Galaxy S22",
    brand: "Samsung",
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: "Android",
    camera: 12,
  },
  {
    id: 20,
    name: "Apple Pixel 5",
    brand: "Oppo",
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: "Android",
    camera: 108,
  },
];


// sort products by rating

function sortProductByPopularity(product1, product2){
  return product2.rating - product1.rating;
};

app.get('/products/sort/popularity', (req, res) => {
  let productCopy = products.slice();
  productCopy.sort(sortProductByPopularity);
  res.json(productCopy);
});


// sort product high to low 

function sortProductByPrice(product1, product2){
  return product2.price -product1.price;
}

app.get('/products/sort/price-high-to-low', (req, res) => {
  productCopy = products.slice();
  productCopy.sort(sortProductByPrice);
  res.json(productCopy);
});

// sort product low to high 

function sortProductByPrice(product1, product2){
  return product1.price - product2.price;
};

app.get('/products/sort/price-low-to-high', (req, res) => {
  productCopy = products.slice();
  productCopy.sort(sortProductByPrice);
  res.json(productCopy);
});

// filter products by ram

function getProductByRam(ele, ram){
  return ele.ram === ram;
};

app.get('/products/filter/:ram', (req, res) => {
  let ram = parseFloat(req.params.ram);
  let result = products.filter(ele => getProductByRam (ele, ram));
  
  res.json(result);
});



// filter by rom

function getProductByRom(ele, rom){
  return ele.rom === rom;
};

app.get('/products/filter/rom/:rom', (req, res) => {
  let rom = parseFloat(req.params.rom);
  let result = products.filter(ele => getProductByRom (ele, rom));
  
  res.json(result);
});

// filter product based on brand

function getProductByBrand(ele, brand){
  return ele.brand === brand;
};

app.get('/products/filter/brand/:brand', (req, res) => {
  let brand = req.params.brand;
  let result = products.filter(ele => getProductByBrand (ele, brand));
  
  res.json(result);
});


// filter product based on brand

function getProductByOs(ele, os){
  return ele.os === os;
};

app.get('/products/filter/os/:os', (req, res) => {
  let os = req.params.os;
  let result = products.filter(ele => getProductByOs (ele, os));
  
  res.json(result);
});

// filter product based on brand

function getProductByPrice(ele, price){
  return ele.price === price;
};

app.get('/products/filter/price/:price', (req, res) => {
  let price = parseFloat(req.params.price);
  let result = products.filter(ele => getProductByPrice (ele, price));
  
  res.json(result);
});


// Send original array of products

function getProducts(ele){
  return ele;
};

app.get('/products', (req, res) => {
  let result = products.filter(ele => getProducts(ele));
  res.json(result);
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
