let current_player = 'X';
let arr = Array(9).fill(null);
let gameContainer = document.querySelector(".game-container");
function checkWinnerorDraw(){
    if(
        (arr[0]!==null && arr[0]===arr[1] && arr[1]===arr[2]) ||
        (arr[3]!==null && arr[3]===arr[4] && arr[4]===arr[5]) ||
        (arr[6]!==null && arr[6]===arr[7] && arr[7]===arr[8]) ||
        (arr[0]!==null && arr[0]===arr[3] && arr[3]===arr[6]) ||
        (arr[1]!==null && arr[1]===arr[4] && arr[4]===arr[7]) ||
        (arr[2]!==null && arr[2]===arr[5] && arr[5]===arr[8]) ||
        (arr[0]!==null && arr[0]===arr[4] && arr[4]===arr[8]) ||
        (arr[2]!==null && arr[2]===arr[4] && arr[4]===arr[6])
    ) {
        gameContainer.innerText = `Winner is ${current_player}`;
        return;
    }
    if(!(arr.some(e => e===null))){
        gameContainer.innerText = "Draw!!";
        return;
    }
    
}
function handleClick(event){
    if(event.target.innerText != '') return;
    event.target.innerText = `${current_player}`;
    const id = Number(event.target.id);
    arr[id] = current_player;
    checkWinnerorDraw();
    current_player = current_player === 'X' ? 'O' : 'X' ;  

}
let buttons = document.querySelectorAll(".col");
buttons.forEach((button) => {
    button.addEventListener("click",handleClick);
})