# Mini Hệ thống Xử lý Đơn hàng

## 1. Chuẩn Module đã chọn
Dự án này sử dụng chuẩn **CommonJS (CJS)**.

## 2. Lý do chọn CommonJS
- **Tính mặc định & Ổn định:** CommonJS là hệ thống module mặc định của Node.js, không cần phải cấu hình thêm `"type": "module"` trong `package.json`.
- **Tích hợp dễ dàng:** Việc nạp các thư viện như `dotenv` diễn ra đồng bộ từ dòng code đầu tiên (`require('dotenv').config()`), giúp các biến môi trường luôn sẵn sàng ngay lập tức cho các đoạn code phía dưới.
- **Tính đóng gói:** Hỗ trợ tốt cơ chế lưu bộ nhớ đệm (cache), giúp module `config.js` dù được gọi ở nhiều file khác nhau nhưng chỉ khởi tạo cấu hình đúng một lần duy nhất.

## 3. Cách chạy dự án
Chạy lệnh: `node index.js`
(Hai dòng log `processed` sẽ xuất hiện trễ hơn hai dòng log `created` đúng 2 giây).