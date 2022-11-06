// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Using_a_constructor_function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/default_parameters

function Product(id = 'undefined', cat = 'undefined', name, desc, stock, price) {

    this.id = Number(id);
    this.category_id = Number(cat);
    this.product_name = name;
    this.product_description = desc;
    this.product_stock = Number(stock);
    this.product_price = Number(price);
}

module.exports = Product;