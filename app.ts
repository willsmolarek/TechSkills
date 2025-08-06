type UserRole = 'admin' | 'user'; 

interface IUser {
    name: string;
    id: number;
    email: string;
    isActive: boolean;
}

interface IProduct {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    categories: string[];
}

interface IAdminUser extends IUser {
    role: UserRole;
}

const usuario: IUser = {
    id: 1,
    name: "Maria Silva",
    email: "maria@gmail.com",
    isActive: true
};

const produto: IProduct = {
    id: 101,
    name: "Notebook Gamer",
    price: 4999.99,
    inStock: true,
    categories: ["Eletrônicos", "Computadores", "Gamer"]
};

const admin: IAdminUser = {
    id: 2,
    name: "Will",
    email: "will@empresa.com",
    isActive: true,
    role: "admin"
};

function imprimirUsuario(user: IUser): void {
    console.log(`Usuário: ${user.name} (${user.email}) - Ativo: ${user.isActive}`);
}

function imprimirProduto(product: IProduct): void {
    console.log(`Produto: ${product.name} - R$ ${product.price.toFixed(2)} - Em estoque: ${product.inStock}`);
    console.log(`Categorias: ${product.categories.join(", ")}`);
}

imprimirUsuario(usuario);
imprimirUsuario(admin); 
imprimirProduto(produto);
