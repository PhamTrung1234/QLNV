function ValiChucvu(){
    this.kiemtra = function(value,id,spam){
        if(value == "Chọn chức vụ"){
            getID(id).innerHTML = spam;
            getID(id).style.display = "block"
            return false;
        }else{
            getID(id).style.display = "none";
            return true
        }
    }
}