fetch("https://picsum.photos/v2/list")
.then((response) => response.json())
.then((data) => {
    let products = data
    console.log(products);

    products.forEach((product) => {
        const author = product.author
        const img = product.download_url
        const imgURL = product.url
        const height = product.height
        const width = product.width

        let productContainer = document.createElement("div")

        let productImage = document.createElement("img")
        productImage.setAttribute("src", img)
        productImage.setAttribute("height", `${height / 10}px`)
        productImage.setAttribute("width", `${width / 10}px`)
        productContainer.appendChild(productImage)

        let productAuthor = document.createElement("h2")
        productAuthor.textContent = author
        productContainer.appendChild(productAuthor)

        let productButton = document.createElement("button")
        productButton.textContent = "See more"
        productButton.addEventListener("click", () => {
            window.open(imgURL)
        })
        productContainer.appendChild(productButton)
        document.querySelector("#products").appendChild(productContainer)
    })
})
.catch((error) => console.log(error))
