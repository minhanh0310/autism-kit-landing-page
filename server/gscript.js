/**
 * Google Apps Script - Lưu thông tin khách hàng vào Google Sheets
 * 
 * HƯỚNG DẪN SỬ DỤNG:
 * 1. Tạo Google Sheet mới
 * 2. Vào Extensions > Apps Script
 * 3. Copy toàn bộ code này và dán vào
 * 4. Lưu và nhấn Deploy > New deployment
 * 5. Chọn "Web app"
 * 6. Cấu hình:
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 7. Nhấn Deploy và copy URL Web App
 * 8. Dán URL vào file config hoặc biến môi trường
 */

// ===== CẤU HÌNH =====
const SPREADSHEET_NAME = "KhachHangAutismKit"; // Tên sheet sẽ tự động tạo

// ===== HÀM XỬ LÝ REQUEST =====
function doPost(e) {
  try {
    // Lấy dữ liệu từ request
    const data = JSON.parse(e.postData.contents);
    
    // Validate dữ liệu
    if (!data.phone || !data.name) {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          message: 'Thiếu thông tin bắt buộc'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Lưu vào Google Sheets
    const result = saveToSheet(data);
    
    // Trả về kết quả
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Lưu thông tin thành công',
        data: result
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Lỗi: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Hàm xử lý GET request (để test)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'ok',
      message: 'Google Apps Script đang hoạt động!',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ===== HÀM LƯU VÀO SHEET =====
function saveToSheet(data) {
  // Mở hoặc tạo spreadsheet
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  // Lấy sheet đầu tiên hoặc tạo mới
  let sheet = spreadsheet.getSheets()[0];
  
  // Nếu sheet trống, tạo header
  if (sheet.getLastRow() === 0) {
    const headers = [
      'STT', 
      'Thời gian', 
      'Họ và Tên', 
      'Số điện thoại', 
      'Địa chỉ', 
      'Ghi chú',
      'Sản phẩm quan tâm',
      'Giá sản phẩm'
    ];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // Format header
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.getRange(1, 1, 1, headers.length).setBackground('#4CAF50');
    sheet.getRange(1, 1, 1, headers.length).setFontColor('white');
  }

  // Tính STT tiếp theo
  const stt = sheet.getLastRow();
  
  // Lấy thời gian hiện tại
  const now = new Date();
  const timeString = Utilities.formatDate(now, 'GMT+7', 'dd/MM/yyyy HH:mm:ss');
  
  // Dữ liệu cần lưu
  const rowData = [
    stt,                    // STT
    timeString,             // Thời gian
    data.name || '',        // Họ và Tên
    data.phone || '',       // Số điện thoại
    data.address || '',     // Địa chỉ
    data.note || '',        // Ghi chú
    data.productName || '', // Sản phẩm quan tâm
    data.productPrice || '' // Giá sản phẩm
  ];

  // Thêm dòng mới
  const lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1, 1, rowData.length).setValues([rowData]);
  
  // Tự động điều chỉnh độ rộng cột
  sheet.autoResizeColumns(1, rowData.length);
  
  return {
    stt: stt,
    time: timeString,
    name: data.name,
    phone: data.phone
  };
}

// ===== HÀM PHỤ TRỢ =====

/**
 * Tạo menu trong Google Sheets để tiện sử dụng
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('🔧 AutismKit')
    .addItem('📊 Mở Dashboard', 'openDashboard')
    .addSeparator()
    .addItem('📋 Xem danh sách khách hàng', 'showCustomers')
    .addItem('📈 Thống kê đơn hàng', 'showStats')
    .addToUi();
}

/**
 * Mở link dashboard (có thể tùy chỉnh)
 */
function openDashboard() {
  SpreadsheetApp.getActiveSpreadsheet().toast('Cảm ơn bạn đã sử dụng AutismKit!', 'Thông báo', 5);
}

/**
 * Hiển thị danh sách khách hàng
 */
function showCustomers() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const lastRow = sheet.getLastRow();
  
  if (lastRow > 1) {
    SpreadsheetApp.getActiveSpreadsheet().toast(
      `Tổng số khách hàng: ${lastRow - 1}`, 
      'Danh sách khách hàng', 
      5
    );
  } else {
    SpreadsheetApp.getActiveSpreadsheet().toast(
      'Chưa có khách hàng nào!', 
      'Danh sách khách hàng', 
      5
    );
  }
}

/**
 * Hiển thị thống kê đơn hàng
 */
function showStats() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const lastRow = sheet.getLastRow();
  
  if (lastRow > 1) {
    // Đếm sản phẩm
    const dataRange = sheet.getRange(2, 7, lastRow - 1, 1);
    const products = dataRange.getValues().flat();
    const productCounts = {};
    
    products.forEach(p => {
      if (p) {
        productCounts[p] = (productCounts[p] || 0) + 1;
      }
    });
    
    let stats = `Tổng đơn hàng: ${lastRow - 1}\n\nSản phẩm:\n`;
    for (const [product, count] of Object.entries(productCounts)) {
      stats += `- ${product}: ${count}\n`;
    }
    
    SpreadsheetApp.getActiveSpreadsheet().toast(stats, 'Thống kê', 10);
  } else {
    SpreadsheetApp.getActiveSpreadsheet().toast('Chưa có đơn hàng nào!', 'Thống kê', 5);
  }
}
