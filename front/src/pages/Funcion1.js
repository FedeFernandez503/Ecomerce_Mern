function guardarLocal(){
    var textarea1 = document.getElementById("nombre").value;
    localStorage.setItem("text1", textarea1);
    document.getElementById("Nombres").innerHTML = localStorage.getItem("text1");
    //document.getElementById("textareaUno").reset();
}    
document.addEventListener("click", guardarLocal);
console.log(guardarLocal)
document.getElementById("Nombres").innerHTML = localStorage.getItem("text1");