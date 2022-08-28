Lưu avatar người dùng:

1. Tải thư viện: npm i buffer
2. Bắt sự kiện onChange của input file sẽ trả về object có chứa thông tin ảnh. Bỏ object này vào hàm toBase64 để convert sang link base64
3. Attribute src của thẻ img đọc đc link base64
4. Sau khi bấm cập nhập, sẽ gửi link base64 này lên db để lưu dưới dạng Blob. Việc từ base 64 sang blob có server xử lí.
5. Khi call api get user thì trường avartar lúc này sẽ có data là 1 arrayBuffer, nên client dùng thư viện buffer để convert nó lại thành base64, rồi bỏ dô src img là đc.

Sau khi update thành công db sẽ lưu ntn:
[image](https://lh3.googleusercontent.com/xwUA97W5LvbgrG45UjdWMyYwVN3rCY8_ZZHwRNUZIFUNghYuqJVxBCvDG1NwkM_qrd8XpzjKUt0ltR7gjEYmWDMXcyjrpPC1ndYBiw=w1920-h880-rw-sm-pa-nu-v0)