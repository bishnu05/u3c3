//https://masai-vouchers-api.herokuapp.com/api/vouchers

var wallet = JSON.parse(localStorage.getItem('user'))
// console.log(amount)
wallet.map(function (el) {
    document.getElementById("wallet_balance").innerText = el.amount
})

let url="https://masai-vouchers-api.herokuapp.com/api/vouchers";
fetch(url)
      .then(function(res){
          return res.json();
      })
       .then(function(res){
           console.log(res)
           displayitems(res[0].vouchers)
       })
        .catch(function(err){
            console.log(err);
        })

        let items= document.querySelector("#voucher_list");
        function displayitems(res){
             console.log(res)
             res.map(function(el){
                 console.log(el)
                 let box=document.createElement("div");
                 box.setAttribute("class", "voucher")
                 let name1= document.createElement("h3")
                 name1.innerText=el.name;
                
                 var img=document.createElement("img");
                 img.src=el.image;
                //  console.log(el.image)
                 let price1=document.createElement("p");
                 price1.innerText=el.price;

                let btn= document.createElement("button")
                btn.innerText="Buy";
                btn.setAttribute("class","buy_voucher")
                btn.addEventListener("click",function(){
                    AddToCart(el)
                })
                 box.append(img,name1,price1,btn)
                 document.querySelector("#voucher_list").append(box)
             })
        }

        let cart=JSON.parse(localStorage.getItem("purchase"))||[];
        function AddToCart(el){
            cart.push(el);
            localStorage.setItem("purchase",JSON.stringify(cart));
            window.location.reload();
        }

