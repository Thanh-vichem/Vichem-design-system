# Icon

Icon nét mảnh (Lucide, nhúng sẵn) dùng trong nút, ô nhập, thông báo và danh sách; màu theo chữ hiện tại, dùng `label` khi icon mang nghĩa riêng.

```jsx
<Icon name="check" size={20} label="Đã xong" />
```

Biến thể: `name` (47 tên có sẵn, xem `NAMES` trong tools/build-icons.mjs, vd. `send`, `check`, `x`, `chevron-down`, `upload`) · `size` (mặc định 18) · `strokeWidth` (mặc định 1.75) · `label` (có thì đọc được, không thì ẩn).
