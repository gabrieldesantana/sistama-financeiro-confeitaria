ScrollReveal().reveal(".card", { delay: 500 });

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function Wpp() {
  var btn_enviar = document.getElementById("enviar");

  var nome_cliente = document.getElementById("nome").value;
  var tel_cliente = document.getElementById("tele").value;

  btn_enviar.setAttribute(
    "href",
    `https://api.whatsapp.com/send?phone=55${tel_cliente}&text=Oi%2C%20me%20chamo%20${nome_cliente}%20e%20gostaria%20de%20encomendar%20umas%20tortas`
  );

  console.log("setou");
}

function ValidaPermissao() {
  let foo = prompt("Senha");
  var admin = document.getElementById("menu-admin");

  if (foo == "admin") {
    console.log(foo);
    admin.setAttribute("href", "/web_admin/web/index_admin.html");
  } else if (foo != "admin") {
    window.alert("Senha incorreta :(");
  }
}
