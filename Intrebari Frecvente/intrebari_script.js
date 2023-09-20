var intrebare = document.getElementsByClassName("intrebare");
var i;

for(i=0; i < intrebare.length; i++){
    intrebare[i].addEventListener("click",
    function(){
        this.classList.toggle("active");

        var raspuns = this.nextElementSibling;
            if(raspuns.style.display === "block"){
                raspuns.style.display = "none";
            } else {
                raspuns.style.display = "block";
            }
    }
    
    )
}