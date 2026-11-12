# Dialog

Hộp thoại xác nhận trước thao tác không hoàn tác, hoặc hiển thị một biểu mẫu ngắn.

```jsx
const [open, setOpen] = React.useState(false);

<Dialog
  open={open}
  tone="danger"
  title="Xoá tài liệu này?"
  onClose={() => setOpen(false)}
  actions={
    <>
      <Button variant="secondary" onClick={() => setOpen(false)}>Huỷ</Button>
      <Button variant="primary" onClick={() => { doDelete(); setOpen(false); }}>Xoá</Button>
    </>
  }
>
  Tài liệu sẽ bị gỡ khỏi chatbot. Không hoàn tác được.
</Dialog>
```

Biến thể: mặc định (tiêu đề đen) · `tone="danger"` (tiêu đề đỏ, dùng cho thao tác xoá). Esc và bấm nền phủ gọi `onClose`.
