document.addEventListener("DOMContentLoaded", async () => {
  // Obtengo la categoria a base del catID de localStorage
  const catID = localStorage.getItem("catID");

  // Esto verifica si existe en el localStorage
  if (catID) {
    // Uso el link de la API y cambio el numero del catID por el llamado del catID de localStorage
    const API = `https://japceibal.github.io/emercado-api/cats_products/${catID}.json`;

    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        const catName = data.catName; // Obtener el valor de "catName" del JSON
        const categoriaElement = document.getElementById("productoCat");
        categoriaElement.innerHTML = catName;
      });
    // Misma funcion que manejamos para mostrar el resultado de la api
    const response = await fetch(API);
    const json = await response.json();
    const container = document.getElementById("container");
    let products = json.products;

    for (let i = 0; i < products.length; i++) {
      console.log(products[i]);

      let name = products[i].name;
      let description = products[i].description;
      let cost = products[i].cost;
      let currency = products[i].currency;
      let soldCount = products[i].soldCount;
      let image = products[i].image;
      const divs = document.createElement("div");
      divs.innerHTML = `
      <div class="">
          <div class="text-bg-dark me-sm-3 pt-5 px-3 pt-md-5 px-md-5">
              <div class="my-2 py-2">
                    <div class="d-flex shadow justify-content-between ">
                      <div class="d-flex">
                        <img src="${image}" class="p-2" width="250px">
                        <div class="ms-3">
                          <p class="h2 fw-normal">${name} - ${currency} ${cost}</p>
                          <p>${description}</p>
                        </div>   
                      </div>   
                      <small class="me-3 mt-2"> ${soldCount} vendidos</small>
                    </div>
              </div>
          </div>
      </div>
          `;
      container.appendChild(divs);
    }
  }
});
