| Trường hợp kiểm thử    | Dữ liệu đầu vào       | Kết quả sai thực tế              | Kết quả đúng mong đợi  |
| ---------------------- | --------------------- | -------------------------------- | ---------------------- |
| Tắt điều hòa           | `{ isActive: false }` | Không cập nhật, vẫn `true`       | Cập nhật thành `false` |
| Hạ công suất đèn về 0W | `{ powerWatts: 0 }`   | Không cập nhật, vẫn công suất cũ | Cập nhật thành `0`     |
