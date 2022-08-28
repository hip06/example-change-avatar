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