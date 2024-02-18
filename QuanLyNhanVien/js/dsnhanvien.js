function DSNV(){
    this.nhanvien = [];
    this.timvitriNV = function(tk){
        let index = -1;
        for(let i=0;i<this.nhanvien.length;i++){
            if(this.nhanvien[i].taikhoan == tk){
                index = i;
                break
            }
        }
        return index
    }
    this.doicontent = function(value){
        switch (value) {
            case"nhân viên trung bình":
                return "nhan vien trung binh"
                break;
                case"nhân viên khá":
                return "nhan vien kha"
                break;
                case"nhân viên giỏi":
                return "nhan vien gioi"
                break;
                case"nhân viên xuất sắc":
                return "nhan vien xuat sac"
                break;
            default:
                break;
        }
    }
    this.themNV = function(nv){
       this.nhanvien.push(nv)
    }
    this.xoaNV = function(acc){
        let index = this.timvitriNV(acc)
        if(index !==-1){
            this.nhanvien.splice(index,1)
        }
    }
    this.suaNV = function(nv){
         let index = this.timvitriNV(nv)
         if(index != -1){
            return this.nhanvien[index]
         }
    }
    this.updateNV =function(nv){
        let index = this.timvitriNV(nv.taikhoan);
        if(index != -1){
            this.nhanvien[index] = nv
        }
    }
    this.timNV = function(nv){
        let xephang = [];
        for(let i=0;i<this.nhanvien.length;i++){
           let keyword = nv.toLowerCase();
           let keyup = this.doicontent(this.nhanvien[i].xeploai);
           let keyuplow = keyup.toLowerCase();
           let keylow1 = this.nhanvien[i].xeploai.toLowerCase();
           if(keyuplow.indexOf(keyword) != -1 || keylow1.indexOf(keyword) !=-1){
            xephang.push(this.nhanvien[i]);
           }
        }
        return xephang;

    }
}