# Hướng dẫn cài đặt Google Sheets để lưu thông tin khách hàng

## Bước 1: Tạo Google Sheet mới

1. Truy cập [Google Sheets](https://docs.google.com/spreadsheets)
2. Nhấn **+ New** (Mới) để tạo spreadsheet mới
3. Đặt tên cho spreadsheet: `KhachHangAutismKit` (hoặc tên tùy thích)

## Bước 2: Mở Apps Script

1. Trong Google Sheet vừa tạo, vào menu **Extensions** (Tiện ích mở rộng)
2. Chọn **Apps Script**
3. Một tab mới sẽ mở ra trình soạn thảo Apps Script

## Bước 3: Thêm code Google Apps Script

1. Xóa toàn bộ code mặc định trong trình soạn thảo
2. Mở file `server/gscript.js` trong project của bạn
3. Copy toàn bộ nội dung file đó
4. Dán vào trình soạn thảo Apps Script
5. Nhấn **Save** (Lưu) - biểu tượng 💾

## Bước 4: Deploy Web App

1. Nhấn nút **Deploy** (Triển khai) màu xanh bên phải
2. Chọn **New deployment** (Triển khai mới)
3. Click vào biểu tượng **Gear** (Cấu hình) bên cạnh "Select type"
4. Chọn **Web app** (Ứng dụng web)
5. Điền thông tin:
   - **Description**: `AutismKit Landing Page API`
   - **Execute as**: `Me` (đã chọn sẵn)
   - **Who has access**: `Anyone` (Ai cũng có thể truy cập) ⭐ QUAN TRỌNG
6. Nhấn **Deploy** (Triển khai)
7. **COPY** URL Web App được hiển thị (sẽ có dạng: `https://script.google.com/macros/s/.../exec`)

## Bướm 5: Cập nhật URL vào code

1. Mở file `src/components/CheckoutModal.jsx`
2. Tìm dòng:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL';
   ```
3. Thay thế `YOUR_GOOGLE_SCRIPT_WEB_APP_URL` bằng URL bạn vừa copy ở Bước 4
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/ABCxyz.../exec';
   ```

## Bước 6: Test

1. Chạy landing page: `npm run dev`
2. Nhấn nút đặt hàng và điền thông tin
3. Nhấn "Gửi thông tin ngay"
4. Quay lại Google Sheet kiểm tra xem dữ liệu đã được lưu chưa

---

## Cấu trúc dữ liệu trong Google Sheets

| STT | Thời gian | Họ và Tên | Số điện thoại | Địa chỉ | Ghi chú | Sản phẩm quan tâm | Giá sản phẩm |
|-----|-----------|-----------|---------|-------------------|---------------|---------|---------------|
| 1  | 05/03/2026 10:30:00 | Nguyễn Văn A | 0912345678 | Hà Nội | Cần tư vấn gấp | Bộ Kit Trị liệu 1 | 2.990.000đ |

---

## Tính năng bổ sung

Sau khi deploy, trong Google Sheet của bạn sẽ có thêm menu **🔧 AutismKit** với các chức năng:
- **📊 Mở Dashboard**: Thông báo chào mừng
- **📋 Xem danh sách khách hàng**: Hiển thị tổng số khách
- **📈 Thống kê đơn hàng**: Xem thống kê sản phẩm

---

## Xử lý sự cố

### ❌ Lỗi "Access denied"
- Đảm bảo đã chọn **Who has access: Anyone** khi deploy

### ❌ Dữ liệu không lưu được
- Kiểm tra URL trong `CheckoutModal.jsx` có chính xác không
- Mở Developer Tools (F12) > Console để xem lỗi chi tiết

### ❌ Lỗi CORS
- Đây là normal khi dùng Google Apps Script với fetch từ client
- Code đã được xử lý để vẫn hoạt động (fallback về hiển thị thành công)

---

## Lưu ý bảo mật

⚠️ **Quan trọng**: URL Web App của bạn sẽ công khai. Tuy nhiên:
- Google Apps Script có cơ chế bảo vệ
- Không lưu thông tin nhạy cảm (mật khẩu, thẻ tín dụng)
- Nếu cần bảo mật hơn, có thể chuyển sang giải pháp khác (Firebase, custom backend)
