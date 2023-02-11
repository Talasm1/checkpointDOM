var products = [
    {
        id: 1,
        name: "tee-shirt",
        picture: "t-shirt.webp",
        like: "false"
    
    },
    {
        id: 2,
        name: "short",
        picture: "short.webp",
        like: "false"
    },

    {
        id: 3,
        name: "skirt",
        picture: "skirt.webp",
        like: "false"
    },
    {
        id: 4,
        name: "trousers",
        picture: "trousers.webp",
        like: "false"
    },
    {
        id: 5,
        name: "hat",
        picture:"hat.webp",
        like: "false"
    },

    {
        id: 6,
        name: "dress",
        picture:"dress.webp",
        like: "false"
    }
]
var cart = []
document.addEventListener("DOMContentLoaded", function () {
    let productdiv = document.getElementById("products")
    products.forEach(product => {
        productdiv.innerHTML += "\
 <div class='product'> <img src='pictures/"+ product.picture + "'> <p> " + product.name + " </p> <i class='fa-regular fa-heart'> </i>\
        <div> <input type='number'> <button class='addtocart'> AJOUTER </button> <input type='hidden' value='"+ product.id + "'> </div> </div>\
        "
    })
    var buttons = document.getElementsByClassName("addtocart")
    console.log(buttons);
    for (const x of buttons) {
        x.addEventListener('click', function () {
        if (cart.find(a=> a.id == x.nextElementSibling.value)==undefined) {
           
            console.log(x.nextElementSibling, x.previousElementSibling);
            let product = products.find(a => a.id == x.nextElementSibling.value)
            product.quantity = parseInt(x.previousElementSibling.value)
            cart.push(product)
            console.log(cart);

            let cartdiv = document.getElementById("cart")
            cartdiv.innerHTML += "\
           <div> "+product.name+"<br> quantite:"+product.quantity+"<br> <button class='deletefromcart'> supprimer </button> <input type='hidden' value='"+ product.id + "'></div>"
        }
    
        })

    
    var supprimer = document.getElementsByClassName("deletefromcart")<arguments
    
    for (const x of supprimer) {
        x.addEventListener('click', function () {
       cart.splice(cart.findIndex(a=>a.id==x.nextElementSibling.value),1)
       console.log("kldhoihsd");
x.parentElement.remove()

    })


    }
}})

