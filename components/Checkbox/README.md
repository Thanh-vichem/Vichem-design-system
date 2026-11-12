# Checkbox

Lọc sản phẩm (chọn nhiều) hoặc chọn một lựa chọn trong nhóm (radio).

```jsx
<Checkbox label="Ngành sơn" hint="42 sản phẩm" checked={on} onChange={toggle} />
<Checkbox type="radio" name="sort" label="Mới nhất" defaultChecked />
```

Biến thể và thuộc tính: type="checkbox" (mặc định) hoặc type="radio" (cùng name để thành một nhóm) · label (bắt buộc) · hint · disabled · checked, defaultChecked, onChange.
