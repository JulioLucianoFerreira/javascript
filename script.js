const form = document.querySelector("#form");
const numero1 =document.getElementById("num-01");
const number2 =document.getElementById("num-02");
const mensErro =document.getElementById("mens");
const botao =document.getElementById("botao");
const sucesso =document.getElementById("sucesso");



botao.addEventListener("click",function(e){
    e.preventDefault();
    
let num01 =numero1.valueAsNumber;
let num02 =number2.valueAsNumber;

if(num02 < num01){
    mensErro.style.display = "block"
    sucesso.style.display = "none";
}
else if(num02 == num01){
    mensErro.style.display = "block"
    sucesso.style.display = "none";}
 

else if(num02 > num01){
sucesso.style.display = "block";
mensErro.style.display = "none";}


})









