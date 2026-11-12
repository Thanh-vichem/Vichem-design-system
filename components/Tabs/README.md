# Tabs

Dùng để tách nội dung cùng trang thành nhiều tab (vd. TDS · SDS · Ứng dụng); bàn phím ←/→, Home, End đổi tab.

```jsx
<Tabs
  defaultTab="tds"
  tabs={[
    { id: "tds", label: "TDS", content: "Thông số kỹ thuật theo tài liệu hãng." },
    { id: "sds", label: "SDS", content: "Thông tin an toàn hóa chất." },
    { id: "app", label: "Ứng dụng", content: "Hệ sơn gốc nước, mực in." },
  ]}
/>
```

Biến thể: không kiểm soát (`defaultTab`) · có kiểm soát (`value` + `onChange`).
