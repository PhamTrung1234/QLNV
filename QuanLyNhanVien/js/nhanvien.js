function NhanVien(_taikhoan,_hoten,_email,_matkhau,_ngaylam,_luongcoban,_chucvu,_giolam){
    this.taikhoan = _taikhoan;
    this.hoten = _hoten;
    this.email = _email;
    this.matkhau = _matkhau;
    this.ngaylam =_ngaylam;
    this.luongcoban = _luongcoban;
    this.chucvu = _chucvu;
    this.giolam = _giolam;
    this.xeploai = "";
    this.tongluong = 0;
    this.tongluong = function(){
        if(this.chucvu == 'Sếp'){
            this.tongluong = this.luongcoban * 3 * this.giolam
        }else if(this.chucvu == 'Trưởng phòng'){
            this.tongluong = this.luongcoban * 2 * this.giolam
        }else if(this.chucvu == 'Nhân viên'){
            this.tongluong = this.luongcoban * this.giolam;
        }
    }
    this.xeploai = function(){
         if(this.giolam <160){
            this.xeploai = "nhân viên trung bình"
        }else if(this.giolam >=160 && this.giolam<176){
            this.xeploai = "nhân viên khá"
        }else if(this.giolam>=176 && this.giolam<192){
            this.xeploai = "nhân viên giỏi"
        }else{
            this.xeploai ="nhân viên xuất sắc"
        }
    }
}