interface IUser{
    id: number;
    name:string;
    email:string;
}

interface IProduct{
    id: number;
    name: string;
    price: number;
    category: string;
}

function getData<T>(items: T[]): T[]{
    console.log(`getData chamada com ${items.length} itens do tipo:` , typeof items[0]);
    return items;
}

function getById<T extends {id:number}>(items: T[], id: number): T | undefined{
    console.log(`Procurando por id ${id} em array de ${items.length} itens`);

    const resultado = items.find(item => item.id === id);
    if (resultado){
        console.log(`item encontrado com id ${id}:`, resultado);
    }else{
        console.log(`nenhum item encontrado com o id ${id}`);
    }

    return resultado;
}

const usuarios: IUser[] = [
    { id: 1, name: "João", email: "joao@email.com" },
    { id: 2, name: "Maria", email: "maria@email.com" },
    { id: 3, name: "Pedro", email: "pedro@email.com" }
  ];

  const produtos: IProduct[] = [
    { id: 101, name: "Notebook", price: 2500, category: "Eletrônicos" },
    { id: 102, name: "Mouse", price: 50, category: "Eletrônicos" },
    { id: 103, name: "Teclado", price: 150, category: "Eletrônicos" }
  ];

  const strings: string[] = ["Typescript", "Javascript", "Python"];
  const numeros: number[] = [10, 20 ,30 ,40, 50];


  console.log("Testando getData<T>");
  
  console.log("teste 1: Array de strings");
  const resultadoStrings = getData<string>(strings);
  console.log("Resultado:", resultadoStrings);

  console.log("teste 2: Array de números");
  const resultadoNumeros = getData(numeros);
  console.log("Resultado:", resultadoNumeros);

  console.log("teste 3: Array de objetos IUser");
  const resultadoUsuarios = getData(usuarios);
  console.log("Resultado:", resultadoNumeros);

  console.log("Testando getById<T>");

  console.log("teste 4: buscando usuario por Id");
  const usuarioEncontrado = getById(usuarios, 2);
  const usuarioNaoEncontrado = getById(usuarios, 999);

  console.log("teste 5: buscando produto por id");
  const produtoEncontrado = getById(produtos, 102);
  const produtoNaoEncontrado = getById(produtos, 999);

  function exemploDebugging(){
    console.log("Exemplo debugging");

    const resultado = getById(usuarios, 1);
    if (resultado){
        console.log("Usuario encontrado - nome:", resultado.name);
        console.log("Usuario encontrado - email:", resultado.email);
    }
  }

  exemploDebugging();

  console.log("Verificações de tipo:");
  console.log("usuarioEncontrado tem id?", usuarioEncontrado && 'id' in usuarioEncontrado);
  console.log("produtoEncontrado tem price?", produtoEncontrado && 'price' in produtoEncontrado);