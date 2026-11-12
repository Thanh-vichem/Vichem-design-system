# Pagination

Phân trang danh sách sản phẩm / bài viết dài. Tự rút gọn bằng "…" khi nhiều trang.

```jsx
<Pagination page={page} total={12} onChange={setPage} />
```

Biến thể: `window` đổi số trang hiện hai bên trang hiện tại (mặc định 2). Nút trước/sau tự khoá ở đầu và cuối.
