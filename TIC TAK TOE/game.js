const boxes = document.querySelectorAll(".box")
const resetbtn = document.querySelector("#reset-btn")
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container")

let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO

const winpatterns = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 6], [6, 7, 8]];


boxes.forEach((box,index) => {
    box.addEventListener("click", function () {
        console.log("box was clicked",index);
        if (turnO) {
            box.innerHTML = "O";
            turnO = false;
        } else {
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();


    });
});
const disableBoxes = ()=>{
   for(let box of boxes){
    box.disabled=true;
   } 
}

const showWinner = (winner) => {
    msg.innerHTML = `congragulation,Winner is Player-${winner}`;
    msgContainer.classList.remove("hide");

}




const checkWinner = () => {
    for (let pattern of winpatterns) {
        // console.log(pattern,"3333");
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showWinner(pos1val);
            }
        }


    }
};


resetbtn.addEventListener("click",function(){
    boxes.forEach((box) => {
        box.innerText="";
        box.disabled=false;
    });
});