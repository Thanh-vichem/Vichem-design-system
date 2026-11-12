# SourceList

Use it under an assistant answer to show which document and page the answer came from.

```jsx
<SourceList sources={[{ title: "TDS Mã X", page: 2, href: "/tai-lieu/tds-ma-x.pdf" }, { title: "SDS Mã Y", page: 1 }]} unverified />
```

Variants: source with `href` (opens in a new tab) or without (plain text) · `page` shown as ", trang N" · `unverified` adds the warning line that part of the answer is not in the documents · `heading` (default "Nguồn").
