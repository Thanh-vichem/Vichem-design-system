# IconButton

Nút vuông chỉ có icon, cho thanh công cụ và điều khiển gọn. Luôn truyền `label` để trình đọc màn hình đọc được.

```jsx
<IconButton label="Tải xuống" variant="secondary" icon={<Icon name="download" />} />
```

Biến thể: `primary` (xanh, mặc định) · `accent` (xanh lá, chỉ cho một hành động quan trọng nhất mỗi màn hình) · `secondary` (viền) · `ghost` · `dark` (trên nền sáng cần nút đậm). Cỡ `sm|md|lg` (36/44/54px). Icon trong nút tự co theo cỡ (16/18/20px).
