function validationForm() {
    let validationCod = document.forms["register"]["cod"].value;
    let validationName = document.forms["register"]["name"].value;
    let validationCantor = document.forms["register"]["cantor"].value;
    let validationDate = document.forms["register"]["date"].value;
    let validationRadio = document.forms["register"]["radio"].value;
  
    if (validationCod == "") {
      alert("O Código deve ser preenchido");
      return false;
    }
    if (validationName == "") {
      alert("O nome da musica deve ser preenchido");
      return false;
    }
    if (validationCantor == "") {
      alert("O Nome do cantor deve ser preenchido");
      return false;
    }
    if (validationDate == "") {
      alert("A data deve ser preenchida");
      return false;
    }
    if (validationRadio == "") {
      alert("O Gênero deve ser preenchido");
      return false;
    }
  
    alert("A validação ocorreu de forma correta");
  }
  
  function insert() {
    let cod = document.forms["register"]["cod"].value;
    let name = document.forms["register"]["name"].value;
    let cantor = document.forms["register"]["cantor"].value;
    let date = document.forms["register"]["date"].value;
    let radio = document.forms["register"]["radio"].value;
  
    let insert = window.document.getElementById("insertRow");
  
    insert.innerHTML = `
    <th scope="row">${cod}</th>
    <td>${name}</td>
    <td>${cantor}</td>
    <td>${date}</td>
    <td>${radio}</td>
    `;
  }