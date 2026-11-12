# FileDrop

Vùng để người dùng kéo file PDF hoặc Markdown vào, hoặc bấm chọn file, rồi theo dõi tiến độ tải lên.

```jsx
<FileDrop
  files={[{ name: "TDS Mã X.pdf", size: 1200000, progress: 40 }]}
  onFiles={(list) => addFiles(list)}
/>
```

Biến thể và thuộc tính: accept (mặc định ".pdf,.md") · multiple (chọn nhiều file) · hint (gợi ý dưới vùng) · files (danh sách: name, size, progress 0–100 để hiện thanh, error để hiện lỗi đỏ) · onFiles (nhận FileList khi thả hoặc chọn).
