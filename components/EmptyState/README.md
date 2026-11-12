# EmptyState

Thông báo khi một khu vực chưa có nội dung (chưa có hội thoại, chưa có tài liệu) và gợi ý bước tiếp theo.

```jsx
<EmptyState
  title="Chưa có hội thoại"
  action={<Button leftIcon={<Icon name="plus" size={18} />}>Cuộc hội thoại mới</Button>}
>
  Hãy đặt câu hỏi đầu tiên về sản phẩm, thông số hoặc ứng dụng.
</EmptyState>
```

Biến thể và thuộc tính: icon (tên Lucide, mặc định "message-square") · title (bắt buộc) · children (mô tả) · action (một nút hành động).
