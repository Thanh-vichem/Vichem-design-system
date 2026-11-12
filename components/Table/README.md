# Table

Dùng cho bảng thông số kỹ thuật (TDS/SDS), so sánh sản phẩm, bảng quy cách; cột số dùng `numeric` để căn phải và thẳng hàng.

```jsx
<Table
  caption="Chất phá bọt silicone — liều dùng (ví dụ)"
  columns={[
    { key: "name", label: "Sản phẩm", strong: true },
    { key: "sup", label: "Hãng" },
    { key: "dose", label: "Liều dùng", numeric: true },
  ]}
  rows={[{ name: "Defoamer A-220", sup: "Covestro", dose: "0.2 – 0.5 %" }]}
/>
```

Biến thể: `zebra` (sọc xen kẽ, mặc định bật) · `dense` (đệm hẹp) · `numeric` / `align="right"` (cột số) · `strong` (in đậm cột).
