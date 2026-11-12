Bộ nhận diện của **Công ty Cổ phần Vichem**, nhà phân phối hoá chất: logo, màu, chữ, thành phần giao diện và template ấn phẩm. Gốc là Company Profile đã duyệt: nền trắng, hai màu xanh và sắc độ nhạt của chúng, đường kẻ mảnh 1px, chữ nội dung đen, tiêu đề UTM Bebas in hoa.

## Cách dùng hệ thống này

- Mỗi token trong `tokens.json` là một biến CSS cùng tên: `var(--text-body)`, `var(--space-4)`, `var(--radius-md)`. Không ghi mã màu tay; không thêm màu mới.
- Màu có hai tầng: **bảng màu** (giá trị, tên `--color-primary-600`…) và **vai trò** (tên theo công dụng). **Khi dựng chỉ dùng tầng vai trò.**
- Hai font (UTM Bebas, Be Vietnam Pro) đã gắn sẵn qua `--font-display`, `--font-body`, `--font-data`.
- Thành phần giao diện nằm ở `window.VichemDesignSystem_0c9bec` và cần React 18 trên trang. Mỗi thành phần có hướng dẫn (README) và thẻ xem trước riêng; tên thẻ trùng tên thành phần.
- Logo, logo đối tác và ảnh nằm trong các nhóm ảnh `Logos`, `PartnerLogos`, `Images`.

## Chữ và nội dung

- Tiếng Việt trước, giữ đúng dấu. Tiếng Anh là bản thứ hai.
- Tiêu đề lớn viết bằng UTM Bebas, **in hoa**, màu `--text-heading`.
- **Không emoji. Không dùng ký tự làm icon** (`✓ ! i × ▾`).
- Nội dung mẫu ghi rõ là ví dụ (vd. "Mã X"). Chữ mặc định tiếng Việt. Không chế độ tối.
- Nội dung kinh doanh (lĩnh vực, sản phẩm, số liệu, chứng nhận, giá, chính sách, địa chỉ) và giọng điệu, xưng hô: **hỏi người dùng**, không tự điền.

## Logo

File trong nhóm ảnh `Logos`.

| Nền / tình huống | Dùng bản |
|---|---|
| Trắng, sáng | `vichem-logo-full.svg` (màu) |
| Xanh dương, tối, ảnh tối | `vichem-logo-full-white.svg` (trắng) |
| Xanh lá | bản **màu** (bản trắng trên xanh lá không đủ tương phản) |
| Chỗ hẹp, ảnh đại diện | `vichem-logo-mark*.svg` (chỉ chữ V) |
| In một màu, dập nổi | `*-mono.svg` · in đen, khắc kim loại: `*-black.svg` |
| Biểu tượng trang web | `vichem-favicon.svg` |

- **Khoảng an toàn 2x** mọi phía (x = độ rộng nét cuối chữ "m"). Không có chữ, hình hay mép trang trong vùng này.
- **Cỡ tối thiểu:** web 100px ngang · in 2cm ngang · favicon 16px (chỉ dùng file favicon).
- **Tỉ lệ logo đầy đủ 3.55 : 1.** Không kéo dãn, bóp méo.
- **Cấm:** xoay nghiêng; đổi vị trí các phần trong logo; đổi tỉ lệ; làm mờ, đổ bóng, thêm viền, 3D, phát sáng; đặt trên nền không đủ tương phản (nhiều hoạ tiết, màu gần trùng logo).
- **Logo trên ảnh:** đặt ở vùng phẳng. Ảnh sáng hoặc nhiều chi tiết thì đặt logo lên khối nền đặc (trắng hoặc xanh).

**Logo đối tác** (nhóm ảnh `PartnerLogos`: `partners/` là nhà cung cấp, `customers/` là khách hàng):
- Vichem là nhà phân phối, nên **logo Vichem luôn là logo chủ**: ở vị trí ưu tiên (trên hoặc trái), cao ≥ 1,5 lần logo đối tác lớn nhất.
- Không đặt logo Vichem ngang hàng, cùng cỡ, sát cạnh **một** logo đối tác duy nhất (dễ hiểu nhầm là liên doanh).
- Nhiều logo đối tác: xếp lưới ô bằng nhau, có tiêu đề hoặc nhãn nói rõ quan hệ.
- Dùng đúng file gốc của đối tác, giữ màu gốc, không tô lại theo màu Vichem. Đây là ngoại lệ duy nhất của luật màu (kèm nút "Đăng nhập bằng Microsoft" trong chatbot).

## Màu

**Chữ**

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--text-heading` | xanh dương `#1e5cab` | tiêu đề |
| `--text-body` | đen `#050606` | **mọi chữ nội dung** |
| `--text-strong` | đen | chữ đậm, nhấn mạnh |
| `--text-muted` | xám `#6b778a` | chữ phụ rất nhỏ: chân trang, chú thích nguồn, chữ gợi ý trong ô nhập. **Chỉ trên nền trắng** (trên nền nhạt không đủ tương phản; trong hộp nền nhạt dùng chữ đen) |
| `--text-on-brand` | trắng | chữ trên nền xanh dương |
| `--text-link` | xanh dương | đường link |
| `--text-faint` | xanh nhạt `#9db4d3` | icon phụ; không dùng cho chữ cần đọc |

**Nền, đường kẻ**

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--surface-page`, `--surface-card` | trắng | nền trang, nền thẻ |
| `--surface-subtle`, `--surface-sunken` | xanh rất nhạt `#f2f6fa` | hộp nền nhạt (vd. hộp Sứ mệnh), đầu bảng |
| `--surface-brand` | xanh dương `#1e5cab` | khối xanh, nút chính |
| `--surface-brand-dark` | xanh dương đậm `#1a447b` | khối xanh đậm |
| `--border-subtle` | `#e3e9f1` | đường kẻ danh sách, bảng, viền ô logo |
| `--border-default` | `#d5dfec` | viền ô nhập |
| `--border-strong` | `#9db4d3` | viền khi rê chuột, ô chọn |
| `--border-footer` | `#d9e1ec` | kẻ chân trang slide |
| `--line-connector` | `#7a9cc6` | đường nối sơ đồ tổ chức |

**Tương tác và trạng thái (trạng thái chỉ dùng trong phần mềm, web)**

| Token | Dùng cho |
|---|---|
| `--color-primary` / `--color-primary-hover` | nút chính xanh dương / khi rê chuột chuyển xanh đậm |
| `--color-accent` / `--color-accent-contrast` | xanh lá `#aad037` / chữ trên xanh lá = **đen** |
| `--color-danger` + `--color-danger-bg` | **lỗi trong phần mềm**: đỏ trầm `#9b2c2c` trên nền `#fbeeee` |
| `--color-success` + `--color-success-bg` | thành công: nền xanh lá nhạt `#f1f7e1`, chữ đen |
| `--color-info` + `--color-info-bg` | thông tin: nền `#f2f6fa`, chữ đen, icon xanh |
| `--color-warning` + `--color-warning-bg` | cảnh báo: giống thông tin, icon "!" xanh đậm |
| `--focus-ring`, `--shadow-focus` | viền sáng khi chọn bằng bàn phím |
| `--chart-1` … `--chart-4` | biểu đồ, **tối đa 4 màu**, theo đúng thứ tự (xanh đậm, xanh, xanh nhạt, xanh lá cho nhóm cần nhấn) |

**Luật màu**
- **Chữ nội dung luôn đen** (`--text-body`). Trên nền xanh dương thì trắng (`--text-on-brand`).
- **Xanh lá và olive chỉ làm nền, không làm màu chữ.** Chữ trên nền xanh lá luôn đen, không bao giờ trắng. Xanh lá chiếm **≤ 10%** diện tích (một nút, một điểm nhấn, chấm nhỏ).
- Được dùng **sắc độ nhạt** của hai màu xanh (các token `--surface-subtle`, `--border-*`) như Company Profile.
- **Đỏ trầm chỉ cho lỗi trong phần mềm.** Cấm trong ấn phẩm (thumbnail, carousel, slide).
- **Không gradient.** Không cam, không đỏ khác. Chữ nội dung không dùng màu xám (xám chỉ cho chữ phụ rất nhỏ, xem `--text-muted`).
- Xanh dương đậm và olive không dùng làm màu chữ nội dung.

## Chữ

| Token | Font | Dùng cho |
|---|---|---|
| `--font-display` | **UTM Bebas** | tiêu đề lớn (h1–h3, tiêu đề ấn phẩm), **in hoa**, màu `--text-heading` |
| `--font-body` | **Be Vietnam Pro** | chữ nội dung, h4–h6, nút, bảng, nhãn |
| `--font-data` | Be Vietnam Pro | **mọi số liệu, đơn vị, ký hiệu** (KPI, thông số, phần trăm, nhiệt độ) |

- Không gọi Google Fonts, không thêm font khác.
- **UTM Bebas chỉ cho chữ cái và chữ số trơn.** Lý do: font này vẽ dấu `+` thành `±`, thiếu `°` `³` `×` `₂`. Số liệu, ký hiệu viết bằng `--font-data`.
- Khoảng dòng tiêu đề `--leading-display` (1.05). Chữ nội dung web `--leading-normal` (1.5), chữ nội dung slide `--leading-slide-body` (1.55).
- Độ đậm: `--weight-regular|medium|semibold|bold` (400/500/600/700).
- **Cỡ chữ web** (rem, 16px): `--text-xs` 12 · `--text-sm` 14 · `--text-base` 16 · `--text-md` 18 · `--text-lg` 22 · `--text-xl` 28 · `--text-2xl` 36 · `--text-3xl` 48 · `--text-4xl` 64 · `--text-5xl` 88 (px).
- **Cỡ chữ slide 16:9** (khung 1920×1080): `--slide-cover` 168 (tiêu đề bìa) · `--slide-thanks` 184 ("Cảm ơn") · `--slide-title` 120 (tiêu đề trang) · `--slide-lead` 30 (đoạn mở đầu) · `--slide-body` 28 (đoạn chính, tiêu đề mục) · `--slide-card` 26 (mô tả thẻ) · `--slide-label` 24 (nhãn, danh mục, chân trang).
- Ấn phẩm (thumbnail, carousel) đã đặt sẵn cỡ chữ trong template. Không đổi cỡ.

## Khoảng cách, bo góc, đường kẻ, bóng

- **Hệ 8px:** `--space-1` 4 · `--space-2` 8 · `--space-3` 12 · `--space-4` 16 · `--space-5` 24 · `--space-6` 32 · `--space-7` 40 · `--space-8` 48 · `--space-9` 64 · `--space-10` 80 · `--space-12` 96 · `--space-15` 120 (px).
- **Bo góc theo Company Profile:**

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--radius-sm` | 4px | nhãn nhỏ trong phần mềm |
| `--radius-md` | 8px | nút, ô nhập, ô nhỏ, ô sơ đồ |
| `--radius-lg` | 10px | ảnh, thẻ |
| `--radius-xl` | 12px | hộp lớn (vd. hộp Sứ mệnh) |
| `--radius-pill` | tròn | thẻ phân loại, vòng tròn icon |

- **Đường kẻ mảnh 1px** (`--border-width`) là chuẩn: chân trang, danh sách, bảng, viền ô logo. Ngoại lệ: `--border-width-strong` 2px chỉ cho viền chọn bằng bàn phím trong phần mềm; viền 2px của sơ đồ tổ chức trong Company Profile (có trong bản đã duyệt).
- **Không thanh gạch trang trí:** không gạch dưới tiêu đề, không viền trái dày, không thanh nhỏ trước nút. Ngăn cách bằng khoảng trắng, đường kẻ 1px hoặc hộp nền nhạt. (Gạch dưới tab đang chọn là chỉ báo trạng thái, được phép.)
- **Bóng đổ:** ấn phẩm **không** dùng. Web, phần mềm chỉ dùng bóng nhẹ (`--shadow-sm|md|lg`) cho lớp nổi lên trên (menu thả xuống, hộp thoại, thông báo nổi).

## Ảnh

- Dùng **ảnh chụp thật**, tông sáng, sạch, hơi lạnh: phòng lab, nhà máy, dây chuyền, kho, bao bì hoá chất, hạt nhựa, bột màu, thiết bị.
- Không lọc màu ấm/vàng, không HDR gắt. Không ảnh mạng chung chung không liên quan ngành, không người mẫu cười kiểu quảng cáo, không ảnh có nhãn hiệu không phải đối tác Vichem, không ảnh mờ hay bị kéo méo.
- Ảnh bo `--radius-lg` (trừ ảnh tràn mép khung). Bố cục Company Profile: ảnh tràn nửa trái, nội dung bên phải.
- Carousel kiến thức kỹ thuật được dùng hình minh hoạ phẳng tông xanh dương (như ảnh trong `Images`, thư mục `carousel/`). Ấn phẩm khác dùng ảnh thật.

## Icon

- **Chỉ dùng thành phần `Icon`**. Bộ Lucide nét mảnh, nhúng sẵn, không tải từ mạng: `<Icon name="check" />`.
- **Không emoji. Không dùng ký tự làm icon** (`✓ ! i × ▾`).
- Không trộn icon nét với icon đặc. Ngoại lệ đã duyệt: icon điện thoại đặc ở dòng liên hệ thumbnail/Zalo (đúng ảnh mẫu).

## Trạng thái tương tác

Token rê chuột, viền khi chọn bằng bàn phím: bảng **Tương tác và trạng thái** ở mục Màu.
- Mọi thứ bấm được phải có viền khi chọn bằng bàn phím (đã có sẵn trong thành phần).
- **Chuyển động:** `--ease-out`, `--duration-fast` 120ms / `--duration-base` 200ms / `--duration-slow` 320ms. Chỉ mờ dần và dịch chuyển nhẹ, không nảy.

## Thành phần

**Dùng thành phần có sẵn, không tự viết lại nút, ô nhập, bảng.**

| Việc cần làm | Thành phần | Xem ở |
|---|---|---|
| Khung trang có thanh bên (chatbot, quản trị) | `AppShell` | thẻ `AppShell` |
| Danh sách hội thoại, menu thanh bên | `NavList` | thẻ `NavList` |
| Tin nhắn hỏi / trả lời trong chat | `ChatMessage` | thẻ `ChatMessage` |
| Ô nhập câu hỏi + nút gửi | `ChatComposer` | thẻ `ChatComposer` |
| Nguồn trích dẫn dưới câu trả lời | `SourceList` | thẻ `SourceList` |
| Nút hữu ích / không hữu ích | `FeedbackButtons` | thẻ `FeedbackButtons` |
| Nút bấm có chữ | `Button` | thẻ `Button` |
| Nút chỉ có icon | `IconButton` | thẻ `IconButton` |
| Icon | `Icon` | thẻ `Icon` |
| Ô nhập một dòng | `Input` | thẻ `Input` |
| Ô nhập nhiều dòng | `Textarea` | thẻ `Textarea` |
| Chọn một giá trị trong danh sách | `Select` | thẻ `Select` |
| Ô đánh dấu, chọn một trong nhóm | `Checkbox` | thẻ `Checkbox` |
| Kéo thả, tải file lên | `FileDrop` | thẻ `FileDrop` |
| Bảng dữ liệu, thông số | `Table` | thẻ `Table` |
| Số liệu thống kê | `Stat` | thẻ `Stat` |
| Nhãn trạng thái nhỏ | `Badge` | thẻ `Badge` |
| Thẻ lọc, thẻ gỡ được | `Tag` | thẻ `Tag` |
| Tách nội dung thành tab | `Tabs` | thẻ `Tabs` |
| Nội dung thu gọn, câu hỏi thường gặp | `Accordion` | thẻ `Accordion` |
| Đường dẫn phân cấp | `Breadcrumb` | thẻ `Breadcrumb` |
| Phân trang | `Pagination` | thẻ `Pagination` |
| Khung nội dung | `Card` | thẻ `Card` |
| Thẻ năng lực, ngành có icon | `FeatureCard` | thẻ `FeatureCard` |
| Thẻ sản phẩm (catalogue) | `ProductCard` | thẻ `ProductCard` |
| Chứng nhận phân phối | `CertificateBadge` | thẻ `CertificateBadge` |
| Tường logo nhà cung cấp | `LogoWall` | thẻ `LogoWall` |
| Thông báo trong trang (thông tin, thành công, cảnh báo, lỗi) | `Alert` | thẻ `Alert` |
| Thông báo nổi sau thao tác | `Toast` (đặt trong `ToastRegion`) | thẻ `Toast` |
| Hộp thoại xác nhận | `Dialog` | thẻ `Dialog` |
| Đang tải, đang trả lời | `Spinner` | thẻ `Spinner` |
| Khu vực chưa có nội dung | `EmptyState` | thẻ `EmptyState` |

**Khối ấn phẩm** (nhóm thẻ "Khối ấn phẩm"), dùng cho ấn phẩm mới chưa có template: `TitleBlock` (tiêu đề + đoạn dẫn), `HeadingLockup` (tiêu đề mục 2 dòng), `StatBlock` (số liệu nổi bật), `NumberTile` (ô số thứ tự), `SpecTable` (bảng thông số), `ProductTile` (thẻ sản phẩm), `PartnerLogos` (lưới logo đối tác), `CertificationMark` (chứng từ), `QuoteBlock` (trích dẫn), `CallToAction` (lời kêu gọi), `ContactBlock` (liên hệ), `BrandFooter` (chân trang).

## Template

Template giống ảnh mẫu đã duyệt đến từng điểm ảnh. **Chỉ thay chữ và ảnh**, giữ nguyên bố cục, cỡ chữ, màu, khối xanh, logo, dòng liên hệ. Ảnh mẫu từng template nằm trong nhóm ảnh `Templates`.

- **Thumbnail Blog 1448×1086 + ảnh Zalo 1400×900** (thẻ `TplBlogZalo`; khổ `--format-thumb-w|h`, `--format-zalo-w|h`). Facebook, LinkedIn dùng lại nguyên thumbnail 1448×1086. Tiêu đề **in hoa, tối đa 4 dòng**. Ảnh hiển thị nhỏ trên web nên tiêu đề phải ngắn. Ảnh tối thiểu 668×1086 (thumbnail) và 640×900 (Zalo). Tiêu đề không chạm dòng liên hệ; ảnh không méo.
- **Carousel 6 khung 1080×1080** (thẻ `TplCarousel`; khổ `--format-carousel`). Thứ tự theo mạch bài: vấn đề (bìa) → từng ý (02–05) → kết có lời kêu gọi (06). Logo chỉ ở khung đầu và cuối. **Tiêu đề tối đa 2 dòng, đoạn văn tối đa 4 dòng.** Chữ trên nền trắng màu đen, trên nền xanh màu trắng (đã đặt sẵn). Kiểm tra: không chữ nào đè lên ảnh hay khối màu, không tràn khung.
- **Company Profile 16:9, 14 slide 1920×1080** (thẻ `TplProfileVI`, `TplProfileEN`). Chi tiết riêng (giữ khi làm slide): chữ V lớn mờ làm nền bìa; bullet vuông 8px xanh; lưới logo đối tác 4 cột, ô trắng viền 1px; logo góc phải trên; chân trang "Công ty Cổ phần Vichem" + "vichem.vn | số trang" trên đường kẻ 1px. Lề `--format-slide-margin` 128px; vị trí logo, chân trang theo `--slide-logo-*`, `--slide-footer-y`.
- **Chatbot nội bộ** (thẻ `TplChatbot`: đăng nhập, hỏi đáp, quản trị). Dựng chatbot thì làm giống bản này. **Website** (thẻ `TplWebsite`) là trang web mẫu.
- Ấn phẩm chưa có mẫu đã duyệt (danh thiếp, catalog, brochure…): hỏi người dùng trước khi làm.

## Nên

- **Khi dựng chỉ dùng tầng vai trò.**
- **Chữ nội dung luôn đen** (`--text-body`). Trên nền xanh dương thì trắng (`--text-on-brand`).
- Được dùng **sắc độ nhạt** của hai màu xanh (các token `--surface-subtle`, `--border-*`) như Company Profile.
- Vichem là nhà phân phối, nên **logo Vichem luôn là logo chủ**.
- Ngăn cách bằng khoảng trắng, đường kẻ 1px hoặc hộp nền nhạt.
- Dùng **ảnh chụp thật**, tông sáng, sạch, hơi lạnh.
- **Chỉ dùng thành phần `Icon`**.
- **Dùng thành phần có sẵn, không tự viết lại nút, ô nhập, bảng.**
- Ấn phẩm: **Chỉ thay chữ và ảnh**, giữ nguyên bố cục, cỡ chữ, màu, khối xanh, logo, dòng liên hệ.
- Tiếng Việt trước, giữ đúng dấu. Tiếng Anh là bản thứ hai.
- Nội dung mẫu ghi rõ là ví dụ (vd. "Mã X").

## Không nên

- Không ghi mã màu tay; không thêm màu mới.
- **Không gradient.** Không cam, không đỏ khác.
- **Xanh lá và olive chỉ làm nền, không làm màu chữ.** Chữ trên nền xanh lá luôn đen, không bao giờ trắng.
- **Đỏ trầm chỉ cho lỗi trong phần mềm.** Cấm trong ấn phẩm (thumbnail, carousel, slide).
- Không gọi Google Fonts, không thêm font khác.
- **UTM Bebas chỉ cho chữ cái và chữ số trơn.**
- **Cấm:** xoay nghiêng; đổi vị trí các phần trong logo; đổi tỉ lệ; làm mờ, đổ bóng, thêm viền, 3D, phát sáng; đặt trên nền không đủ tương phản.
- **Không thanh gạch trang trí:** không gạch dưới tiêu đề, không viền trái dày, không thanh nhỏ trước nút.
- **Bóng đổ:** ấn phẩm **không** dùng.
- **Không emoji. Không dùng ký tự làm icon** (`✓ ! i × ▾`).
- Không chế độ tối.
