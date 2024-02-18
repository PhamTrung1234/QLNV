function Validation(){
    this.kiemtra = function(value,id,spam){
        if(value === ""){
            document.getElementById(id).innerHTML = spam;
            document.getElementById(id).style.display = "block"
            return false;
        }else{
            document.getElementById(id).style.display ="none"
            return true;
        }
    }
}