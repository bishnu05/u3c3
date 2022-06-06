let arr=JSON.parse(localStorage.getItem("user"))||[];

function UserS(a,b,c,d){
    this.name=a;
    this.email=b;
    this.address=c;
    this.amount=d;
}

function Signup(event){
    event.preventDefault();
    let form=document.querySelector("#formid");
    let name=form.name.value;
    let email=form.email.value;
    let address=form.address.value;
    let amount=form.amount.value;

    var nameset= new UserS(name,email,address,amount);

    arr.push(nameset)
    localStorage.setItem("user",JSON.stringify(arr))
    window.location.reload();
}