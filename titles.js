async function fetchProducts(){

    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();

    let container=document.getElementById("products");

    data.products.slice(0,6).forEach(product=>{

        container.innerHTML += `
        <div class="card">

            <img src="${product.thumbnail}">

            <div class="content">

                <h2 class="title">${product.title}</h2>

                <p><b>ID:</b> ${product.id}</p>

                <p class="description">
                    ${product.description}
                </p>

                <p class="price">$${product.price}</p>

            </div>

        </div>
        `;
    });

}

fetchProducts();