# Accordion

Dùng cho FAQ và nội dung dài cần thu gọn (thông số, tài liệu kỹ thuật); mỗi mục mở bằng nút tiêu đề.

```jsx
<Accordion
  allowMultiple
  defaultOpen={["bq"]}
  items={[
    { id: "bq", title: "Bảo quản thế nào?", content: "Nơi khô ráo, tránh nắng trực tiếp." },
    { id: "nc", title: "Có tương thích hệ gốc nước không?", content: "Nên thử mẫu nhỏ trước." },
  ]}
/>
```

Biến thể: một mục mở (mặc định) · `allowMultiple` (nhiều mục mở cùng lúc) · `defaultOpen` (mục mở sẵn).
