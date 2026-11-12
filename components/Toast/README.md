# Toast

Thông báo nổi ngắn sau một thao tác (đã lưu, đã gửi, lỗi tải lên), đặt trong ToastRegion.

```jsx
<ToastRegion>
  <Toast tone="success" title="Đã lưu tài liệu" onClose={() => setShow(false)} open={show}>
    Thay đổi đã được cập nhật.
  </Toast>
</ToastRegion>
```

Biến thể `tone`: `info` (mặc định) · `success` · `warning` · `danger` (chỉ danger được đọc ngay như lỗi, role="alert").
Ẩn bằng `open={false}`; có nút đóng khi truyền `onClose`.
