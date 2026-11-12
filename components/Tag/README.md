# Tag

Chip phân loại, dùng làm bộ lọc (có `onClick` và `active`) hoặc là token gỡ được (có `onRemove`).

```jsx
<Tag dot active={filter === "Paint"} onClick={() => setFilter("Paint")}>Paint</Tag>
<Tag onRemove={() => remove(id)}>PVC</Tag>
```

Biến thể: `dot` thêm chấm nhỏ đầu chip · `active` tô xanh dương · `onRemove` hiện nút × (aria-label "Bỏ") · `onClick` biến chip thành nút bấm có `aria-pressed`.
