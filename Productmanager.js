class ProductManager {
    constructor(){
        this.products = [] ;
    }

getProducts = () => {
    return this.products;
}

addProduct = (title, description, price, thumbnail, code, stock, id) => {
    const product = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        id
    }
    if(this.products.find(prod => prod.code === product.code)) {
        return console.error(`El producto con el code: ${product.code} ya existe`);
    }

    if (this.products.length === 0) {
        product.id = 0;
    } else {
        product.id = this.products[this.products.length -1].id +1;
}
this.products.push(product);
console.log(`Se agrego ${product.title}`);
}

getProductsById = (id) => {
    const product = this.products.find(prod => prod.id === id);
    if (!product){
        return "Not Found";
    } else {
        return `El producto con el id: ${product.id} existe, y se llama ${product.title}`;
    }
}

}

const productManager = new ProductManager();
console.log(productManager.getProducts());
productManager.addProduct("Producto Prueba", "este es un producto prueba", 1000, "sin imagen", "code123", 25);
console.log(productManager.products)
productManager.addProduct("producto prueba 2", "este es un producto prueba", 1000, "sin imagen", "code123", 25);
productManager.addProduct("producto prueba 2", "este es un producto prueba", 1000, "sin imagen", "code12345", 25)
console.log(productManager.products)
console.log(productManager.getProductsById(2))
console.log(productManager.getProductsById(1))
