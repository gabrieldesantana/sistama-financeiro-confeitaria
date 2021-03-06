// Funcoes Externas

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function ajax() {
  var xmlHttp;
  if (window.XMLHttpRequest) {
    xmlHttp = new XMLHttpRequest();
  } else {
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      var rsp = xmlHttp.responseText;
      var texto = document.getElementById("div-lista-produtos");
      texto.innerHTML = rsp;
    }
  };
  xmlHttp.open("GET", "lista-produtos.txt", true);
  xmlHttp.send();
}

function ajax2() {
  var xmlHttp;
  if (window.XMLHttpRequest) {
    xmlHttp = new XMLHttpRequest();
  } else {
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      var rsp = xmlHttp.responseText;
      var texto = document.getElementById("pie-screen");
      texto.innerHTML = rsp;
    }
  };
  xmlHttp.open("GET", "lista-tortas.txt", true);
  xmlHttp.send();
}

//Variaveis globais
var cont = 0;
var cont_i = 0;
var db = [];
var db_total = [];
var dados_tabela = [];
var validador = false;

var total = 0;

// Funcoes Custom
var listaQuanti = [];

var validInputQuanti = 0;

function TrazerInputs() {
  let inp1 = document.getElementById("input1").value;
  let inp2 = document.getElementById("input2").value;

  document.getElementById("pie-remaining").style.display = "block";

  if (inp2 > contFatias) {
    console.log("Quantidade maior que estoque");
    window.alert("Quantidade maior que estoque, recomeçando...");
    document.location.reload(true);
  }

  let v1 = document.getElementById("v1");
  let v2 = document.getElementById("v2");
  let v3 = document.getElementById("v3");

  if (
    document.getElementById("investimento-input").value == "" ||
    document.getElementById("data-input").value == "" ||
    document.getElementById("input1").value == "" ||
    document.getElementById("input2").value == ""
  ) {
    window.alert("Favor preencher todos os campos, recomeçando...");
    document.location.reload(true);
  } else {
    validador = true;
  }

  if (v1.selected) {
    let inp3 = (document.getElementById("input3").value = 12);
    var total = inp2 * inp3;
    var inp4 = (document.getElementById("input4").value = total);
    ManipularLista(inp1, inp2, inp3, inp4);
    listaQuanti.push(parseInt(inp2));
  }
  if (v2.selected) {
    let inp3 = (document.getElementById("input3").value = 12);
    var total = inp2 * inp3;
    var inp4 = (document.getElementById("input4").value = total);
    ManipularLista(inp1, inp2, inp3, inp4);
    listaQuanti.push(parseInt(inp2));
  }
  if (v3.selected) {
    let inp3 = (document.getElementById("input3").value = 12);
    var total = inp2 * inp3;
    var inp4 = (document.getElementById("input4").value = total);
    ManipularLista(inp1, inp2, inp3, inp4);
    listaQuanti.push(parseInt(inp2));
  }

  if (v4.selected) {
    let inp3 = (document.getElementById("input3").value = 12);
    var total = inp2 * inp3;
    var inp4 = (document.getElementById("input4").value = total);
    ManipularLista(inp1, inp2, inp3, inp4);
    listaQuanti.push(parseInt(inp2));
  }

  if (v5.selected) {
    let inp3 = (document.getElementById("input3").value = 12);
    var total = inp2 * inp3;
    var inp4 = (document.getElementById("input4").value = total);
    ManipularLista(inp1, inp2, inp3, inp4);
    listaQuanti.push(parseInt(inp2));
  }
}

function ManipularLista(valor1, valor2, valor3, valor4) {
  var listaTemp = [];
  listaTemp = [valor1, valor2, valor3, valor4];
  db.push(listaTemp);

  var produtosLista = document.getElementsByClassName("item-produtos");

  for (i = 0; i < db.length; i++) {
    if (db[i][4] == "X") {
      i = i + 1;
    }

    produtosLista[0].innerHTML = db[i][0];
    produtosLista[1].innerHTML = db[i][1];
    produtosLista[2].innerHTML = db[i][2];
    produtosLista[3].innerHTML = db[i][3];
    db[i].push("X");
  }

  if (cont < 1) {
    cont = cont + 1;
  }

  if (cont >= 1) {
    Adicionar(valor1, valor2, valor3, valor4);
  }
}

function Adicionar(item1, item2, item3, item4) {
  item3 = item3.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  item4 = item4.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  var lista =
    document.getElementsByClassName("lista-produtos-new")[cont_i].innerHTML;

  lista = lista + "<p>" + "Produto:" + "</p>";
  lista = lista + "<li>" + item1 + "</li>";
  lista = lista + "<p>" + "Quantidade:" + "</p>";
  lista = lista + "<li>" + item2 + "</li>";
  lista = lista + "<p>" + "Valor Uni:" + "</p>";
  lista = lista + "<li>" + item3 + "</li>";
  lista = lista + "<p>" + "Valor Total:" + "</p>";
  lista = lista + "<li>" + item4 + "</li>";

  document.getElementsByClassName("lista-produtos-new")[cont_i].innerHTML =
    lista;
  cont_i += 1;
  lista = "";

  var div = document.getElementById("div-lista-produtos").innerHTML;

  div += lista;
  document.getElementById("lista-produtos").style.display = "none";
}

function Finalizar_dia() {
  listaQuanti = [];

  for (i = 0; i < db.length; i++) {
    total += db[i][3];
  }

  total = total.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  var campo_data = document.getElementById("data-input");
  var dataCompleta = campo_data.value;
  let day = dataCompleta.slice(8, 10);
  let month = dataCompleta.slice(5, 7);
  let year = dataCompleta.slice(0, 4);
  var dataFormatada = `${day}/${month}/${year}`;

  var total_data = (document.getElementById(
    "res"
  ).innerHTML = `${total} : ${dataFormatada}`);

  total = 0;
  db_total.push(total_data);
  total_data = "";
  total = 0;

  var div = document.getElementById("div-lista-produtos").innerHTML;

  ManipularDados();
  ajax();
  contTortas = 0;
  contFatias = 0;
  ajax2();

  LimparTodosCampos();

  // document.getElementById("pie-remaining").style.display = "none";
  document.getElementById("ver-torta").style.display = "none";
}

function ManipularDados() {
  for (i = 0; i < db.length; i++) {
    total += db[i][3];
  }

  db = [];

  var investimento = document.getElementById("investimento-input").value;

  var retorno_int = total;
  var retorno = total;

  total = 0;

  var campo_data = document.getElementById("data-input");
  var dataCompleta = campo_data.value;

  let day = dataCompleta.slice(8, 10);
  let month = dataCompleta.slice(5, 7);
  let year = dataCompleta.slice(0, 4);

  var dataFormatada = `${day}/${month}/${year}`;
  var lucro = retorno - investimento;

  retorno = retorno.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  investimento = investimento.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  lucro = lucro.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  var dadosTemp = [];
  dadosTemp.push(dataFormatada);
  dadosTemp.push(investimento);
  dadosTemp.push(retorno);

  var numeroTortas = document.getElementById("tortas-input").value;
  var numeroTortasEmReal = numeroTortas * 120;
  var TortasNaoVendidas = numeroTortasEmReal - retorno_int;

  TortasNaoVendidas = TortasNaoVendidas.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  dadosTemp.push(lucro);
  dadosTemp.push(TortasNaoVendidas);
  dadosTemp.push(numeroTortas);
  dados_tabela.push(dadosTemp);
  dadosTemp = [];
}

function AlimentarTabela() {
  if (validador) {
    var dados = dados_tabela;
  } else {
    window.alert("Nenhuma informação foi inserida");
  }
  var table = document.getElementById("table");
  table = document.getElementById("table").innerHTML;

  table = table + "<tr>";
  table = table + "<th>" + "Data" + "</th>";
  table = table + "<th>" + "Num de tortas" + "</th>"; //new
  table = table + "<th>" + "Investimento" + "</th>";
  table = table + "<th>" + "Retorno" + "</th>";
  table = table + "<th>" + "Lucro/Prejuizo" + "</th>";
  table = table + "<th>" + "Perda" + "</th>";

  table = table + "</tr>";

  for (i = 0; i < dados_tabela.length; i++) {
    table = table + "<tr>";
    table = table + "<td>" + dados[i][0] + "</td>"; //data
    table = table + "<td>" + dados[i][5] + "</td>"; //n de tortas
    table = table + "<td>" + dados[i][1] + "</td>"; //investimento
    table = table + "<td>" + dados[i][2] + "</td>"; //retorno
    table = table + "<td>" + dados[i][3] + "</td>"; // lucro
    table = table + "<td>" + dados[i][4] + "</td>"; // perda
    table = table + "</tr>";
  }

  document.getElementById("table").innerHTML = table;
  var div = document.getElementById("table-resultados").innerHTML;
  var caption = document.createElement("caption");
  caption = "<caption>" + "Vendas Semanais" + "</caption>";
  div += caption;
  div += table;
  table = "";
}

var contTortas = 0;
var contFatias = 0;

function DesenharTorta() {
  setInterval(function () {
    UpdateQuant();
  }, 1500);
  document.getElementById("ver-torta").style.display = "block";

  var numeroTortas = document.getElementById("tortas-input").value;
  contTortas += 1;

  var numeroFatias = 10; // pode alterar

  if (contTortas == 1) {
    for (let i = 0; i < numeroTortas; i++) {
      for (let j = 0; j < numeroFatias; j++) {
        var img = document.createElement("img");
        img.src = "./image/icon-pie.png";
        document.getElementsByClassName("flex-pie")[i].appendChild(img);
        contFatias += 1;
      }
    }

    console.log("Fatias colocadas: " + contFatias);
  } else if (contTortas > 1) {
    console.log("Numero de tortas já informado");
  }
}

function LimparTodosCampos() {
  var inputTortas = (document.getElementById("tortas-input").value = "");
  var inputValor = (document.getElementById("investimento-input").value = "");
  var inputData = (document.getElementById("data-input").value = "");
  var inputProduto = (document.getElementById("input1").value = "");
  var inputQuantidade = (document.getElementById("input2").value = "");
  var inputValorUni = (document.getElementById("input3").value = "");
  var inputValorTotal = (document.getElementById("input4").value = "");
}

window.onload = () => {
  console.log("Iniciando");
};

function UpdateQuant() {
  let sum = 0;
  for (let i = 0; i < listaQuanti.length; i++) {
    sum += listaQuanti[i];
    // console.log("Soma " + sum)
  }

  var restante = document.getElementById("pie-remaining");
  var contAtual = contFatias - sum;

  // restante.innerHTML = contFatias - sum;
  restante.innerHTML = `${contFatias - sum} Fatias`;
}

var db_sabores = [1, 2, 3];
var i_value = 0;

function criarlista() {
  //implementar futuramente
  const lista_select = ["Ruby", "JavaScript", "Python", "GoLang"];
  const lista_value = ["v1", "v2", "v3", "v4", "v5"];
  const select = document.getElementById("select-fatias");

  lista_select.forEach((item) => {
    option = new Option(item, item.toLowerCase());
    option.setAttribute("value", lista_value[i_value]);
    i_value++;
    select.options[select.options.length] = option;
  });
}

// function calculadora()
// {
//   var valor1 = document.getElementById("valor1").value
//   var valor2 = document.getElementById("valor1").value
//   var valor3 = parseInt(valor1) + parseInt(valor2);
//   document.getElementById("result1").value = parseInt(valor3);
// }

// setInterval(function () {
//   calculadora();
// }, 1500);
