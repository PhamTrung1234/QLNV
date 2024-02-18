function ValiNumber() {
     
        this.kiemtranum = function (value, value1, value2, id, spam) {
            if (typeof value == Number || value < value1 || value > value2) {
                document.getElementById(id).innerHTML = spam;
                document.getElementById(id).style.display = "block"
                return false;
            } else {
                document.getElementById(id).style.display = "none";
                return true;
            }
        };
    }
