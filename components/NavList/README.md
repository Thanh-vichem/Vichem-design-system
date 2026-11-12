# NavList

Danh sách mục điều hướng trong thanh bên hoặc menu: danh sách hội thoại, nhóm mục quản trị, các trang của một khu vực.

```jsx
<NavList
  heading="Hội thoại"
  items={[
    { id: "a", label: "Tư vấn defoamer cho sơn", icon: "message-square", meta: "2 giờ trước" },
    { id: "b", label: "Báo giá phụ gia", icon: "file-text", meta: "Hôm qua" },
  ]}
  activeId="a"
  onSelect={(id) => setActive(id)}
/>
```

Biến thể và thuộc tính: items (mỗi mục có id, label, icon tuỳ chọn, meta tuỳ chọn) · activeId (mục đang chọn, đậm và tô nền) · onSelect(id) · heading (tiêu đề nhóm in hoa nhỏ). Không có icon thì nhãn bắt đầu sát lề trái.
