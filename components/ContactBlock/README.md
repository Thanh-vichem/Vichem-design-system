# ContactBlock

Khối thông tin liên hệ cho bìa sau, slide kết thúc hoặc chữ ký email — mặc định là thông tin Vichem.

```jsx
<ContactBlock layout="row" color="var(--text-on-brand)" iconColor="var(--text-on-brand)" />
```

Biến thể: `layout` `stack` (mặc định, xếp dọc) | `row` (xếp ngang, tự xuống dòng); `color` màu chữ (trên nền xanh dùng `var(--text-on-brand)`); `iconColor` màu icon; `size` cỡ chữ px. Truyền `address`, `phone`, `email`, `web` để thay thông tin.
