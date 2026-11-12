# ChatMessage

Use it for each turn of a chatbot conversation: the user's question, the assistant's answer, or an answer still being written.

```jsx
<ChatMessage role="assistant" footer={<><SourceList sources={[{ title: "TDS Mã X", page: 2 }]} /><FeedbackButtons value={null} onChange={setFb} /></>}>
  Với sơn ngoại thất nên chọn loại có hàm lượng TiO₂ cao.
</ChatMessage>
```

Variants: `role="user"` (question, grey bubble, right) · `role="assistant"` (answer, full width, default) · `pending` (shows the dots spinner instead of content) · `footer` (sources and feedback under the answer).
