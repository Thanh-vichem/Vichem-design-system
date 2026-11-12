# FeedbackButtons

Use it under an assistant answer to collect a helpful / not helpful rating; keep the value in state and pass it back in.

```jsx
const [fb, setFb] = React.useState(null);
<FeedbackButtons value={fb} onChange={setFb} />
```

Variants: `value` `null` (none chosen) · `"up"` (helpful, highlighted) · `"down"` (not helpful, highlighted). Click the chosen button again to clear it (`onChange(null)`). `labels` changes the wording.
