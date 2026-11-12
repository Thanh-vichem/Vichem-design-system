# AppShell

Khung giao diện ứng dụng có thanh điều hướng bên trái, tiêu đề phía trên và vùng nội dung chính cuộn độc lập. Dùng cho trang quản trị, khu vực chatbot có danh sách hội thoại.

```jsx
<AppShell
  sidebar={<NavList items={menu} activeId="hoi-thoai" onSelect={setTab} />}
  header={<span>Tổng quan</span>}
  sidebarOpen={open}
  onSidebarClose={() => setOpen(false)}
>
  <p>Nội dung trang</p>
</AppShell>
```

Biến thể và thuộc tính: sidebar (thanh bên) · header (tiêu đề, bỏ trống thì không có thanh tiêu đề) · sidebarOpen (mở thanh bên trên điện thoại) · onSidebarClose (bấm lớp phủ hoặc Esc) · sidebarLabel (nhãn vùng điều hướng, mặc định "Điều hướng"). Dưới 900px thanh bên ẩn: đặt nút menu trong header để mở.
