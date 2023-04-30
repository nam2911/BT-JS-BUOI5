// Bài 1
function ketQua() {
  // Lấy giá trị từ các ô nhập
  var diem_chuan = parseFloat(document.getElementById("diem_chuan").value);
  var diem_mon_1 = parseFloat(document.getElementById("diem_mon_1").value) || 0;
  var diem_mon_2 = parseFloat(document.getElementById("diem_mon_2").value) || 0;
  var diem_mon_3 = parseFloat(document.getElementById("diem_mon_3").value) || 0;
  var khu_vuc = document.getElementById("khu_vuc").value;
  var doi_tuong = document.getElementById("doi_tuong").value;

  // Tính điểm khu vực
  var diem_khu_vuc = 0;
  switch (khu_vuc) {
    case "A":
      diem_khu_vuc = 2.0;
      break;
    case "B":
      diem_khu_vuc = 1.0;
      break;
    case "C":
      diem_khu_vuc = 0.5;
      break;
    default:
      diem_khu_vuc = 0;
  }

  // Tính điểm đối tượng
  var diem_doi_tuong = 0;
  switch (doi_tuong) {
    case "1":
      diem_doi_tuong = 2.5;
      break;
    case "2":
      diem_doi_tuong = 1.5;
      break;
    case "3":
      diem_doi_tuong = 1.0;
      break;
    default:
      diem_doi_tuong = 0;
  }

  // Kiểm tra điểm môn thi
  if (diem_mon_1 === 0 || diem_mon_2 === 0 || diem_mon_3 === 0) {
    var ket_qua = "<div>Kết quả: Rớt. Do bạn có 1 môn 0 điểm</div>";
    document.getElementById("ket_qua").innerHTML = ket_qua;
  } else {
    // Tính tổng điểm
    var tong_diem = diem_mon_1 + diem_mon_2 + diem_mon_3 + diem_khu_vuc + diem_doi_tuong;
    document.getElementById("tong_diem").innerHTML = "Tổng điểm: " + tong_diem;

    // Kiểm tra xem đậu hay rớt
    if (tong_diem >= diem_chuan) {
      document.getElementById("ket_qua").innerHTML = "Kết quả: Đậu";
    } else {
      document.getElementById("ket_qua").innerHTML = "Kết quả: Rớt";
    }
  }
}

// Bài 2
const price1 = 500; // giá tiền cho 50kw đầu
    const price2 = 650; // giá tiền cho 50kw tiếp theo
    const price3 = 850; // giá tiền cho 100kw tiếp theo
    const price4 = 1100; // giá tiền cho 150kw tiếp theo
    const price5 = 1300; // giá tiền cho KW còn lại

    function calculate() {
      var name = document.getElementById("name").value;
      var kw = parseFloat(document.getElementById("kw").value);

      if (kw <= 0) {
        return "Số KW không hợp lệ";
      }

      switch (true) {
        case kw <= 50 && kw > 0:
          return kw * price1;
        case kw <= 100 && kw > 50:
          return 50 * price1 + (kw - 50) * price2;
        case kw <= 200 && kw > 100:
          return 50 * price1 + 50 * price2 + (kw - 100) * price3;
        case kw <=200 && kw > 200:
          return 50 * price1 + 50 * price2 + 100 * price3 + (kw - 200) * price4;
          case kw > 350:
          return 50 * price1 + 50 * price2 + 100 * price3 + 150 * price4 + (kw - 350) * price5;
          default:
          return "Số KW không hợp lệ";
          }
          }
          
          function displayResult() {
            var total = calculate();
          
            if (typeof(total) !== "string") {
              var name = document.getElementById("name").value;
              document.getElementById("customer-name").innerHTML = "Tên khách hàng: " + name;
              document.getElementById("result").innerHTML = "Số tiền phải trả: " + total.toLocaleString('vi-VN') + " VNĐ";
            } else {
              document.getElementById("customer-name").innerHTML = "";
              document.getElementById("result").innerHTML = total;
            }
          }











// Tính thuế
function tinhThue() {
  // Lấy thông tin nhập vào từ các input
  var hoTen = document.getElementById("hoTenInput").value;
  var tongThuNhap = parseFloat(document.getElementById("tongThuNhapInput").value);
  var soNguoiPhuThuoc = parseInt(document.getElementById("soNguoiPhuThuocInput").value);

  // Kiểm tra số tiền thu nhập năm có đủ để tính thuế hay không
  if (tongThuNhap < 4000000 + soNguoiPhuThuoc * 1600000) {
    alert("Số tiền thu nhập năm của bạn không đủ để tính thuế");
    return; // Kết thúc hàm nếu số tiền không đủ để tính thuế
  }

  // Tính thuế theo quy định của đề bài
  var thuNhapChiuThue = tongThuNhap - 4000000 - soNguoiPhuThuoc * 1600000;
  var thueSuat = 0;
  if (thuNhapChiuThue > 960000000) {
    thueSuat = 0.35;
  } else if (thuNhapChiuThue > 624000000) {
    thueSuat = 0.3;
  } else if (thuNhapChiuThue > 384000000) {
    thueSuat = 0.25;
  } else if (thuNhapChiuThue > 210000000) {
    thueSuat = 0.2;
  } else if (thuNhapChiuThue > 120000000) {
    thueSuat = 0.15;
  } else if (thuNhapChiuThue > 60000000) {
    thueSuat = 0.1;
  } else {
    thueSuat = 0.05;
  }
  var tienThue = thuNhapChiuThue * thueSuat;

  // Hiển thị kết quả thuế
  document.getElementById("hoTen").innerHTML = hoTen;
  document.getElementById("tienThue").innerHTML = formatCurrency(tienThue);
  document.getElementById("ketQuaThue").style.display = "block";
}

// Hàm định dạng số thành tiền tệ (VD: 1,000,000)
function formatCurrency(number) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
  }).format(number);
}
// TÍNH TIỀN CÁP
function showHide() {
  var loaiKhachHang = document.getElementById("loaiKhachHang").value;
  if (loaiKhachHang == "doanhNghiep") {
    document.getElementById("soKetNoiDiv").style.display = "block";
  } else {
    document.getElementById("soKetNoiDiv").style.display = "none";
  }
}

function tinhHoaDon() {
  var maKhachHang = document.getElementById("maKhachHang").value;
  var loaiKhachHang = document.getElementById("loaiKhachHang").value;
  var soKetNoi = parseFloat(document.getElementById("soKetNoi").value);
  var soKenh = parseFloat(document.getElementById("soKenh").value);

  var phiXuLy = 0;
  var phiDichVuCoBan = 0;
  var thuKenhCaoCap = 0;

  if (loaiKhachHang == "nhaDan") {
    phiXuLy = 4.5;
    phiDichVuCoBan = 20.5;
    thuKenhCaoCap = 7.5 * soKenh;
  } else if (loaiKhachHang == "doanhNghiep") {
    phiXuLy = 15;
    if (soKetNoi > 10) {
      phiDichVuCoBan = 75 + (soKetNoi - 10) * 5;
    } else {
      phiDichVuCoBan = 75;
    }
    thuKenhCaoCap = 50 * soKenh;
  }

  var tongTien = phiXuLy + phiDichVuCoBan + thuKenhCaoCap;

  document.getElementById("tongTien").innerHTML = "Mã khách hàng: " + maKhachHang + "<br/>Tổng tiền: $" + tongTien.toFixed(2);
}
