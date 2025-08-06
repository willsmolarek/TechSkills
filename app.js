"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario = {
    id: 1,
    name: "Maria Silva",
    email: "maria@gmail.com",
    isActive: true
};
const produto = {
    id: 101,
    name: "Notebook Gamer",
    price: 4999.99,
    inStock: true,
    categories: ["Eletrônicos", "Computadores", "Gamer"]
};
const admin = {
    id: 2,
    name: "Will",
    email: "will@empresa.com",
    isActive: true,
    role: "admin"
};
function imprimirUsuario(user) {
    console.log(`Usuário: ${user.name} (${user.email}) - Ativo: ${user.isActive}`);
}
function imprimirProduto(product) {
    console.log(`Produto: ${product.name} - R$ ${product.price.toFixed(2)} - Em estoque: ${product.inStock}`);
    console.log(`Categorias: ${product.categories.join(", ")}`);
}
imprimirUsuario(usuario);
imprimirUsuario(admin);
imprimirProduto(produto);
//# sourceMappingURL=app.js.map