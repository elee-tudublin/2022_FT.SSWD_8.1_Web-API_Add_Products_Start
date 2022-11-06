// Data access functions for products

// Import dependencies
const { PrismaClient } = require('@prisma/client');

// declare an instance of the client
const prisma = new PrismaClient();

// Get all products from DB
// https://www.prisma.io/client
async function getProducts() {
    // define variable to store products
    let products;

    try {  
        // Get all products
        // https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#findmany
        products = await prisma.product.findMany({
                orderBy: {product_name: 'asc'}

    });

    // Catch and log errors to server side console 
    } catch (err) {
        console.log('DB Error - get products: ', err.message);
    } finally {

    }
    return products;
}


// Get product by id from DB
//
async function getProductById(id) {

    // Define variable
    let product;

    try {
        // use where with findUnique
        product = await prisma.product.findUnique ({
            where: {id: id}
        });

    // Catch and log errors to server side console 
    } catch (err) {
        console.log('DB Error - get product by id: ', err.message);
    } finally {

    }
    // return a single product if found
    return product;
}

// Get products from DB by cat id
//
async function getProductsByCatId(catId) {

    // define variable to store products returned
    let products;

    // execute the query to find products
    try {
        // find all products
        products = await prisma.product.findMany ({
            // where category_id = catId
            where: {category_id: catId},
            orderBy: {product_name: 'asc'} 
        });

    // Catch and log errors to server side console 
    } catch (err) {
        console.log('DB Error - get products by category: ', err.message);
    } finally {

    }
    // return all products found
    return products;
}

// Insert a new product into the database
// Return the result
//

// Export 
module.exports = {
    getProducts,
    getProductById,
    getProductsByCatId
}