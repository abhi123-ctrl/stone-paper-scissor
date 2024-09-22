const display = document.querySelector("#input")
const btna = document.querySelector("#btna")
const btnb = document.querySelector("#btnb")
const btnadd = document.querySelector("#btnadd")
const btnsub = document.querySelector("#btnsub")
const btnmul = document.querySelector("#btnmul")
const btndiv = document.querySelector("#btndiv")

let a;
let b;

btna.addEventListener("click", function () {
    a = Number(display.value);
    display.value ="";
})

console.log(a, "---t--")
console.log(b, "--gyg---")

btnb.addEventListener("click", function () {
    b = Number(display.value);
    display.value = "";

})

btnadd.addEventListener("click", function () {
    if (a === undefined) {
        console.log("enter value of a")


    } else if (b === undefined) {
        console.log("enter value of b")
    } else {
        let c = a + b;
        display.value = c;
        console.log(c, "---")
    }



})

btnsub.addEventListener("click", function () {
    if (a === undefined) {
        console.log("enter value of a")
    } else if (b === undefined) {
        console.log("enter value of b")
    }else{
        let c=a-b;
        display.value=c;
        console.log(c,"---")
    }
})

btnmul.addEventListener("click",function(){
if(a===undefined){
    console.log("enter value of a")
}else if(b===undefined){
console.log("entdsdr value of b")

}else{
    let c=a*b;
    display.value=c;
    console.log(c);
}
})

btndiv.addEventListener("click",function(){
if(a===undefined){
    console.log("enter value of a")
}else if(b===undefined){
    console.log("enter value of b")
}else{
let c=a/b;
display.value=c;
console.log(c);


}

})

