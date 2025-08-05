const nomeProduto : string = "Iphone 14";
const precoProduto : number = 4999;
const emEstoque : boolean = true;
const categorias : string[] = ["celular", "iphone"];
const coordenadas : [number, number] = [-23, 74];

enum StatusPedido {
    Pendente = "Pendente",
    Processando = "Processando",
    Entregue = "Entregue",
    Cancelado = "Cancelado"
  }

function formatarInfoProduto(nome: string, preco: number): string {
    return `O produto ${nome} custa R$ ${preco.toFixed(2)}`;
  }

  console.log(formatarInfoProduto(nomeProduto, precoProduto));
