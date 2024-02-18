

const dsnv = new DSNV();
getItem();
const valinum = new ValiNumber();
const validation = new Validation();
const valichucvu = new ValiChucvu();
function getID(id) {
  return document.getElementById(id);
}
function thongtinnhanvien() {
  const taikhoan = getID("tknv").value;
  const hoten = getID("name").value;
  const email = getID("email").value;
  const matkhau = getID("password").value;
  const ngaylam = getID("datepicker").value;
  const luongcoban = getID("luongCB").value;
  const chucvu = getID("chucvu").value;
  const giolam = getID("gioLam").value;
  const tongluong = 0;
  const xeploai = "";

  let isvalid = true;
   isvalid &= valinum.kiemtranum(luongcoban,1000000,20000000,"tbLuongCB","(*) lương cơ bản từ 1000000-20000000")
   isvalid &= valinum.kiemtranum(giolam,80,200,"tbGiolam","(*) giờ làm từ 80-120 giờ ")
   isvalid &= validation.kiemtra(taikhoan,"tbTKNV","(*) tài khoản không được trống")
   isvalid &= validation.kiemtra(hoten,'tbTen',"(*) yêu cầu nhập họ và tên")
   isvalid &= validation.kiemtra(email,'tbEmail',"(*) hãy nhập đầy đủ email")
   isvalid &= validation.kiemtra(matkhau,'tbMatKhau',"(*) bạn chưa nhập mật khẩu")
   isvalid &= valichucvu.kiemtra(chucvu,'tbChucVu',"(*) hãy chọn loại chức vụ")
   if(!isvalid) return null
  let nhanvien = new NhanVien(
    taikhoan,
    hoten,
    email,
    matkhau,
    ngaylam,
    luongcoban,
    chucvu,
    giolam
  );
  nhanvien.xeploai();
  nhanvien.tongluong();

  return nhanvien;
}
function setItem() {
  const arrJSON = JSON.stringify(dsnv.nhanvien);
  localStorage.setItem("dsnv", arrJSON);
}
function getItem() {
  if (!localStorage.getItem("dsnv")) return;
  const arrJSON = localStorage.getItem("dsnv");
  const arrstring = JSON.parse(arrJSON);
  dsnv.nhanvien = arrstring;
  hienthidanhsanhNV(arrstring);
}

function hienthidanhsanhNV(data) {
  let content = "";
  for (let index = 0; index < data.length; index++) {
    const nhanvien = data[index];
    content += `
        <tr>
            <td>${nhanvien.taikhoan}</td>
            <td>${nhanvien.hoten}</td>
            <td>${nhanvien.email}</td>
            <td>${nhanvien.ngaylam}</td>
            <td>${nhanvien.chucvu}</td>
            <td>${nhanvien.tongluong}</td>
            <td>${nhanvien.xeploai}</td>
            <td><button style="border:none;color:red;cursor: pointer;background:none;"class="btn" onclick="xoaNV('${nhanvien.taikhoan}')"><i class="fa-solid fa-circle-xmark"></i></button>
            <button onclick="suaNV('${nhanvien.taikhoan}')" style="background:none;color:blue;" class="btn" data-toggle="modal" data-target="#myModal"><i class="fa-solid fa-user-pen"></i></button>
            </td>
        </tr>
     `;
  }
  getID("tableDanhSach").innerHTML = content;
}




function xoaNV(id){
  dsnv.xoaNV(id);
  hienthidanhsanhNV(dsnv.nhanvien)
  setItem();
}


function suaNV(id){
  let nv =  dsnv.suaNV(id)
  if(nv){
    getID("tknv").value = nv.taikhoan;
  getID("tknv").disabled = true;
  getID('btnthem').style.display = "none"
  getID('btnCapNhat').style.display = "block"
  getID("name").value = nv.hoten;
  getID("email").value = nv.email
  getID("password").value = nv.matkhau;
  getID("datepicker").value = nv.ngaylam;
  getID("luongCB").value =nv.luongcoban;
  getID("chucvu").value = nv.chucvu;
  getID("gioLam").value = nv.giolam;
  }
  setItem();
}

function themNV() {
 
  const nhanvien = thongtinnhanvien();
  let counts = -1;
 if(!nhanvien) return;
 if(!dsnv.nhanvien){
  dsnv.themNV(nhanvien)
 }else{
  for(let i=0;i<dsnv.nhanvien.length;i++){
    if(dsnv.nhanvien[i].taikhoan===nhanvien.taikhoan){
      counts ++;
      break
    } 
  }
 }
  if(counts===-1){
    getID('tbTKNV').innerHTML =""
    getID('tbTKNV').style.display = "none"
    dsnv.themNV(nhanvien)
  } else{
    getID('tbTKNV').innerHTML ="tài khoản đã tồn tại"
    getID('tbTKNV').style.display = "block"
    return null
  }
  hienthidanhsanhNV(dsnv.nhanvien);
  setItem();
   getID("tknv").value = "";
  getID('btnthem').style.display = "block"
  getID('btnCapNhat').style.display = "none"
  getID("name").value = "";
  getID("email").value = "";
  getID("password").value = "";
  getID("luongCB").value ="";
  getID("chucvu").value = "Chọn chức vụ";
  getID("gioLam").value = "";
}


function updateNV(){
  const nv = thongtinnhanvien();
  dsnv.updateNV(nv);
 hienthidanhsanhNV(dsnv.nhanvien)
 
  setItem();
}
getID('btnThem').onclick = function(){
  getID("tknv").value = "";
  getID("tknv").disabled = false;
  getID('btnthem').style.display = "block"
  getID('btnCapNhat').style.display = "none"
  getID("name").value = "";
  getID("email").value = "";
  getID("password").value = "";
  getID("luongCB").value ="";
  getID("chucvu").value = "Chọn chức vụ";
  getID("gioLam").value = "";
}
getID('searchName').addEventListener("keyup",function(){
  const keyword = getID('searchName').value;
  hienthidanhsanhNV(dsnv.timNV(keyword))
})