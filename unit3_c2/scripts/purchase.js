
var wallet = JSON.parse(localStorage.getItem('user'))
// console.log(amount)
wallet.map(function (el) {
    document.getElementById("wallet_balance").innerText = el.amount
})

var cart= JSON.parse(localStorage.getItem("purchase"))
// console.log(cart)

cartData.map(function (el) {
    //console.log(el)
    let div = document.createElement("div")

    let title = document.createElement("p")
    title.innerText = el.name;

    let img = document.createElement('img')
    img.src = el.image;

    let price = document.createElement('p')
    price.innerText = el.price

    div.append(img, title, price)
    document.getElementById("purchased_vouchers").append(div)
})
