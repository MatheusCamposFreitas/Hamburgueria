fetch("http://localhost:3000/dados")
    .then((response) => response.json())
    .then((data) => {
      const tbody = document.querySelector("#tabela-dados tbody");

      data.forEach((row) => {
        const tr = document.createElement("tr");

        const idTd = document.createElement("td");
        idTd.textContent = row.id;
        tr.appendChild(idTd);

        const nomeTd = document.createElement("td");
        nomeTd.textContent = row.nome;
        tr.appendChild(nomeTd);

        const valorTd = document.createElement("td");
        valorTd.textContent = row.valor;
        tr.appendChild(valorTd);

        tbody.appendChild(tr);
      });
    })
    .catch((error) => console.error(error));


const updateData = document.getElementById("buscar-produtos");

updateData.addEventListener("click", (event) => {
  document.location.reload(true);
});

const formUpdate = document.querySelector("#form-update");

formUpdate.addEventListener("submit", (event) => {
  event.preventDefault();

  const id = document.getElementById("id").value;
  const nome = document.getElementById("nome").value;
  const valor = document.getElementById("valor").value;

  fetch(`http://localhost:3000/dados/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome: nome, valor: valor }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert(data.message);
    })
    .catch((error) => {
      console.log(error);
      alert("Erro ao atualizar os dados");
    });
});
