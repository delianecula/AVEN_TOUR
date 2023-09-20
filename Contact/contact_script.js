function trimiteMesaj(){
    var input1 = document.getElementById("input1")
    var input2 = document.getElementById("input2")
    var input3 = document.getElementById("input3")
    var newLine = "\r"
    if(input1.value === "" || input2.value === "" || input3.value === ""){
        alert("EROARE !!" + newLine + newLine +  "Trebuie sa completezi campurile marcate cu * !")
    } else{
        alert("Mesajul tau a fost trimis!")
    }
}



