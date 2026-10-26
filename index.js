const OrderService = require('./orderService');
const setupLogger = require('./logger');
const config = require('./config');

console.log('---KHỞI ĐỘNG HỆ THỐNG XỬ LÝ ĐƠN ----');
console.log(`Thời gian xử lý đơn hàng: ${config.PROCESSING_DELAY_MS} ms/n`);

const service = new OrderService();
setupLogger(service);

// Tạo đơn hàng mẫu
service.createOrder({ id: 'ORD-01', total: 100000 });
service.createOrder({ id: 'ORD-02', total: 200000 });

console.log('---ĐÃ GỬI LỆNH TẠO ĐƠN---');