function print(str){
    document.write(str);
}

let rollnum;
let total = 0;
let limit = 21;
let img = document.getElementById("die");
let btn = document.getElementById("btn");
let num = document.getElementById("score");

btn.addEventListener('click', ()=>{
    btn.innerText = 'roll';
    let rand = Math.floor(Math.random() * 6) + 1;
    img.setAttribute("src", `./img/dice${rand}.png`);
    total += rand;
    if(rand == 1){
        num.innerText = 'You lose';
        btn.innerText = 'start again';
        total = 0;
    }
    else if(total >= limit){
        num.innerText = 'You win!';
        btn.innerText = 'start again';
        total = 0;
    }
    else{
        num.innerText = total;
    }
})



