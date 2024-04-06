let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let msg=document.querySelector(".msg");
let turno=true;
let count=0;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame = () => {
    turno = true;
    count=0;
    enableboxes();
    msg.classList.add("hide");
  };
const disabledboxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msg.classList.remove("hide");
    disabledboxes();
}
const checkWinner=()=> {
    for(let pattern of winpatterns)
    {
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val===pos2val && pos2val === pos3val){
                showWinner(pos1val);
                return true;
            }
        }
    } 
}
const gameDraw = () => {
    msg.innerText = `Game Draw.`;
    msg.classList.remove("hide");
    disabledboxes();
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText = "O";
            turno=false;
        }
        else{
            box.innerText="X";
            turno=true;
        }
        box.disabled = true;
        count++;

        let iswinner=checkWinner();
        if (count === 9 && !iswinner) {
            gameDraw();
          }
    }) 
});
reset.addEventListener("click",resetGame);