let choicess=["rock","paper","scissors"]
const pldisplay=document.getElementById("plchoice")
const cmdisplay=document.getElementById("cmchoice")
const rdisplay=document.getElementById("rdisplay")
const pscore=document.getElementById("pscore")
const cscore=document.getElementById("cscore")
let plcount=0;
let cmcount=0;
pscore.textContent=`Player score:${plcount}`;
cscore.textContent=`Computer Score:${cmcount}`;
function game(playerchoice){
    let cmchoice=choicess[Math.floor(Math.random()*3)];
    let res="";
    if (playerchoice === cmchoice){
        res="IT'S A TIE"
    }
    else{
        switch(playerchoice){
            case "rock":
                res=(cmchoice === "scissor" ? "YOU WIN" : "COMPUTER WIN");
                break;
            case "paper":
                res=(cmchoice === "rock" ? "YOU WIN" : "COMPUTER WIN");
                break;
            case "scissor":
                res=(cmchoice === "paper" ? "YOU WIN" : "COMPUTER WIN");
                break;
        }
    }
    pldisplay.textContent=`Player:  ${playerchoice}`;
    cmdisplay.textContent=`Computer:  ${cmchoice}`;
    rdisplay.textContent=res;
    switch(res){
        case "YOU WIN":
            rdisplay.style.color="#32cd32";
            plcount++;
            pscore.textContent=`Player score:${plcount}`;
            pscore.style.color = "#32cd32";
            break;
        case "COMPUTER WIN":
            rdisplay.style.color="#ff4500";
            cmcount++
            cscore.textContent=`Computer Score:${cmcount}`;
            cscore.style.color = "#ff4500";
            
            break;
        default:
            rdisplay.style.color = "#ff6b6b";
    }
}
