# Breadcrumb

Đường dẫn phân cấp danh mục sản phẩm. Mục cuối là trang hiện tại, không phải link.

```jsx
<Breadcrumb items={[
  { label: "Trang chủ", href: "/" },
  { label: "Sản phẩm", href: "/san-pham" },
  { label: "Chất phá bọt" },
]} />
```

Biến thể: `onNavigate` thay cho chuyển trang mặc định khi bấm mục link.
