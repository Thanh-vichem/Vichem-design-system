# ChatComposer

Use it as the input box of a chatbot: the user types a question, presses Enter or the send button, and the answer appears above.

```jsx
<ChatComposer value={text} onChange={setText} onSubmit={(q) => ask(q)} busy={loading} hint="Enter để gửi · Shift+Enter xuống dòng" />
```

Variants: empty (placeholder shown) · with text (grows up to `maxRows` lines, then scrolls) · `busy` (send button shows a spinner and locks) · `disabled` (whole box greyed out) · `hint` (line of help under the box). Without `value` the component keeps the text itself and clears it after sending.
