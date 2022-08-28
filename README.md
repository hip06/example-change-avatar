Lưu avatar người dùng:

1. Tải thư viện: npm i buffer
2. Bắt sự kiện onChange của input file sẽ trả về object có chứa thông tin ảnh. Bỏ object này vào hàm toBase64 để convert sang link base64
3. Attribute src của thẻ img đọc đc link base64
4. Sau khi bấm cập nhập, sẽ gửi link base64 này lên db để lưu dưới dạng Blob. Việc từ base 64 sang blob có server xử lí.
5. Khi call api get user thì trường avartar lúc này sẽ có data là 1 arrayBuffer, nên client dùng thư viện buffer để convert nó lại thành base64, rồi bỏ dô src img là đc.

Sau khi update thành công db sẽ lưu ntn:
[image](https://lh3.googleusercontent.com/xwUA97W5LvbgrG45UjdWMyYwVN3rCY8_ZZHwRNUZIFUNghYuqJVxBCvDG1NwkM_qrd8XpzjKUt0ltR7gjEYmWDMXcyjrpPC1ndYBiw=w1920-h880-rw-sm-pa-nu-v0)




Các bước sửa datatype avatar sang BLOB:

1. Vào file user trong folder models:
- Sửa avatar: DataTypes.STRING => avatar: DataTypes.BLOB
2. Vào file create-user trong folder migrations:
- Sửa avatar: { type: Sequelize.STRING } => { type: Sequelize.BLOB('long') }
3. Vào file app.js trong folder root:
- Sửa app.use(express.json()) => app.use(express.json({ limit: '10mb' }))
- Sửa app.use(express.urlencoded({ extended: false })) => app.use(express.urlencoded({ extended: false, limit: '10mb' }))
4. Vào phpmyadmin drop bảng user và xóa create-user trong bảng sequelizemata
5. Đứng ở thư mục src trên terminal, gõ enter: npx sequelize db:migrate
6. Vào phpmyadmin check xem datatype của avatar là bloblong chưa?

