var res = document.getElementById("resultat");
const rep = document.querySelector("reponse");
function calculer(){
    var nombreQuestion=20;
    var question;
    var score=0;
    for(var j=1 ; j<nombreQuestion + 1 ; j++){
    question = document.getElementsByName("q"+j);
    for(var i=0 ; i < question.length ; i++){
        if(question[i].checked){
            score=score + Number(question[i].value);
        }
    }
}
    res.textContent=score.toString()+"/13";
    rep.style.visibility="visible";
}








var boutonElement = document.getElementById("bouton");
boutonElement.addEventListener("click",calculer);