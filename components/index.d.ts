import * as React from "react";

// components/buttons/Button.d.ts
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Kiểu hiển thị. `primary` = nút CTA xanh, `accent` = xanh lá (chỉ cho hành động quan trọng nhất), `secondary`/`ghost` = hành động phụ, `dark` = trên nền sáng cần nút đậm. */
  variant?: "primary" | "accent" | "secondary" | "ghost" | "dark";
  /** Cỡ: sm 36px · md 44px · lg 54px. */
  size?: "sm" | "md" | "lg";
  /** Kiểu nút HTML. Mặc định "button". */
  type?: "button" | "submit" | "reset";
  /** Icon đặt trước chữ, vd. <Icon name="file-text" size={16} />. */
  leftIcon?: React.ReactNode;
  /** Icon đặt sau chữ. */
  rightIcon?: React.ReactNode;
  /** Chiếm hết chiều rộng khung chứa (dùng trong form). */
  fullWidth?: boolean;
  /** Lớp CSS thêm vào, nối sau các lớp vds-btn. */
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): React.ReactElement;

// components/buttons/IconButton.d.ts
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Kiểu hiển thị, giống Button (`dark` dùng trên nền sáng cần nút đậm). */
  variant?: "primary" | "accent" | "secondary" | "ghost" | "dark";
  /** Cỡ vuông: sm 36px · md 44px · lg 54px. */
  size?: "sm" | "md" | "lg";
  /** Kiểu nút HTML. Mặc định "button". */
  type?: "button" | "submit" | "reset";
  /** Nhãn truy cập bắt buộc: dùng làm aria-label và title. */
  label: string;
  /** Icon bên trong, vd. <Icon name="search" />. */
  icon?: React.ReactNode;
  /** Lớp CSS thêm vào, nối sau các lớp vds-iconbtn. */
  className?: string;
  disabled?: boolean;
  /** Tương thích ngược: nội dung thay cho `icon`. */
  children?: React.ReactNode;
}

/** Nút vuông chỉ có icon, cùng ngôn ngữ thị giác với Button. */
export function IconButton(props: IconButtonProps): React.ReactElement;

// components/chat/ChatComposer.d.ts
export interface ChatComposerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "onSubmit"> {
  /** Chữ đang nhập. Bỏ trống = không kiểm soát: thành phần tự giữ chữ và xoá sau khi gửi. */
  value?: string;
  /** Gọi khi chữ thay đổi. */
  onChange?: (text: string) => void;
  /** Gọi khi gửi (Enter hoặc bấm nút), với chữ đã cắt khoảng trắng đầu cuối. */
  onSubmit?: (text: string) => void;
  /** Khoá ô nhập và nút gửi. */
  disabled?: boolean;
  /** Đang trả lời: nút gửi hiện Spinner và bị khoá. */
  busy?: boolean;
  /** Chữ gợi ý khi ô trống. Mặc định "Hỏi về sản phẩm, thông số, ứng dụng…". */
  placeholder?: string;
  /** Số dòng tối đa trước khi ô cuộn. Mặc định 6. */
  maxRows?: number;
  /** Dòng gợi ý dưới khung, vd. "Enter để gửi · Shift+Enter xuống dòng". */
  hint?: React.ReactNode;
  /** Lớp CSS thêm vào, nối sau các lớp vds-composer. */
  className?: string;
}

export function ChatComposer(props: ChatComposerProps): React.ReactElement;

// components/chat/ChatMessage.d.ts
export interface ChatMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Vai trò trong hội thoại: `user` (câu hỏi, canh phải) hoặc `assistant` (trả lời). Không gắn xuống DOM. */
  role?: "user" | "assistant";
  /** Nội dung tin nhắn; có thể chứa bảng `Table`. */
  children?: React.ReactNode;
  /** Phần dưới trả lời, thường là `SourceList` và `FeedbackButtons`. */
  footer?: React.ReactNode;
  /** Đang trả lời: hiện chấm đang chạy thay nội dung. */
  pending?: boolean;
  /** Lớp CSS thêm vào, nối sau các lớp vds-msg. */
  className?: string;
}

export function ChatMessage(props: ChatMessageProps): React.ReactElement;

// components/chat/FeedbackButtons.d.ts
export interface FeedbackButtonsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Lựa chọn hiện tại: `up`, `down`, hoặc `null` (chưa đánh giá). */
  value?: "up" | "down" | null;
  /** Gọi khi người dùng đổi lựa chọn. Bấm lại nút đang chọn thì nhận `null`. */
  onChange?: (value: "up" | "down" | null) => void;
  /** Nhãn cho từng nút (aria-label và tooltip). Mặc định "Hữu ích" và "Không hữu ích". */
  labels?: { up?: string; down?: string };
  /** Lớp CSS thêm vào, nối sau các lớp vds-feedback. */
  className?: string;
}

export function FeedbackButtons(props: FeedbackButtonsProps): React.ReactElement;

// components/chat/SourceList.d.ts
export interface SourceItem {
  /** Tên tài liệu, vd. "TDS Mã X". */
  title: string;
  /** Số trang trích dẫn. */
  page?: number | string;
  /** Đường dẫn tới tài liệu; có thì tên là liên kết mở tab mới. */
  href?: string;
}

export interface SourceListProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Danh sách nguồn. */
  sources?: SourceItem[];
  /** Thêm dòng cảnh báo: một phần câu trả lời không có trong tài liệu. */
  unverified?: boolean;
  /** Tiêu đề nhỏ phía trên. Mặc định "Nguồn". */
  heading?: string;
  /** Lớp CSS thêm vào, nối sau các lớp vds-sources. */
  className?: string;
}

export function SourceList(props: SourceListProps): React.ReactElement;

// components/data-display/Badge.d.ts
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Màu nhãn: neutral (mặc định), blue, success, danger. Tên cũ green→success, warning→neutral. */
  tone?: "neutral" | "blue" | "success" | "danger" | "green" | "warning";
  /** Không còn dùng; nhận để tương thích và bỏ qua. */
  variant?: "solid" | "soft" | "outline";
  /** Nội dung nhãn. */
  children?: React.ReactNode;
  /** Lớp CSS bổ sung, gộp với vds-badge. */
  className?: string;
}

/** Nhãn nhỏ trạng thái hoặc phân loại trong web và phần mềm. */
export function Badge(props: BadgeProps): React.ReactElement;

// components/data-display/CertificateBadge.d.ts
export interface CertificateBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  supplier: React.ReactNode;
  /** Phạm vi được phân phối */
  scope?: React.ReactNode;
  since?: React.ReactNode;
  /** Ràng buộc lãnh thổ — hiện dưới dạng cảnh báo vàng */
  territory?: React.ReactNode;
}

export declare function CertificateBadge(props: CertificateBadgeProps): React.JSX.Element;

// components/data-display/LogoWall.d.ts
export interface LogoWallItem {
  name: string;
  /** Đường dẫn logo; bỏ trống sẽ render tên bằng chữ */
  src?: string;
}

export interface LogoWallProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  items: LogoWallItem[];
  columns?: number;
  /** Làm xám logo, mặc định true */
  grayscale?: boolean;
}

export declare function LogoWall(props: LogoWallProps): React.JSX.Element;

// components/data-display/Stat.d.ts
export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Số liệu chính, font --font-data đậm. */
  value: React.ReactNode;
  /** Nhãn bên dưới số liệu. */
  label: React.ReactNode;
  /** Dòng phụ, màu nhạt hơn. */
  sublabel?: React.ReactNode;
  /** Được nhận nhưng bị bỏ qua. */
  accent?: boolean;
  /** Căn lề nội dung. */
  align?: "left" | "center" | "right";
  /** Lớp CSS bổ sung, gộp với vds-stat. */
  className?: string;
}

/** Số liệu nổi bật kèm nhãn, cho dải số liệu. */
export function Stat(props: StatProps): React.ReactElement;

// components/data-display/Table.d.ts
export interface TableColumn {
  /** Khóa trong mỗi row */
  key: string;
  label: React.ReactNode;
  /** Canh lề; "right" thì như cột số */
  align?: "left" | "center" | "right";
  width?: number | string;
  /** Căn phải + font số + tabular-nums cho cột số */
  numeric?: boolean;
  /** In đậm ô của cột này */
  strong?: boolean;
}

export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Cấu hình cột */
  columns: TableColumn[];
  /** Dữ liệu: mỗi phần tử là một hàng, khóa theo `key` của cột */
  rows: Array<Record<string, React.ReactNode>>;
  /** Tiêu đề bảng, đặt phía trên */
  caption?: React.ReactNode;
  /** Đệm hẹp hơn */
  dense?: boolean;
  /** Sọc xen kẽ, mặc định true */
  zebra?: boolean;
  className?: string;
}

export declare function Table(props: TableProps): React.JSX.Element;

// components/data-display/Tag.d.ts
export interface TagProps extends Omit<React.HTMLAttributes<HTMLElement>, "onClick"> {
  /** Hiện chấm nhỏ đầu chip. */
  dot?: boolean;
  /** Trạng thái đã chọn: nền xanh dương. */
  active?: boolean;
  /** Khi có, hiện nút × để gỡ chip. */
  onRemove?: () => void;
  /** Khi có, chip thành nút bấm (dùng làm bộ lọc). */
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  /** Nội dung chip. */
  children?: React.ReactNode;
  /** Lớp CSS bổ sung, gộp với vds-tag. */
  className?: string;
}

/** Chip phân loại: lọc, đánh dấu chọn hoặc gỡ bỏ. */
export function Tag(props: TagProps): React.ReactElement;

// components/feedback/Alert.d.ts
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Mức độ: info (mặc định), success, warning, danger. Chỉ danger có role="alert". */
  tone?: "info" | "success" | "warning" | "danger";
  /** Tiêu đề in đậm, đặt trên nội dung. */
  title?: React.ReactNode;
  /** Nội dung cảnh báo. */
  children?: React.ReactNode;
  /** Lớp CSS bổ sung, gộp với vds-alert. */
  className?: string;
}

/** Hộp thông báo trạng thái: an toàn, lưu ý kỹ thuật, ràng buộc. */
export declare function Alert(props: AlertProps): React.JSX.Element;

// components/feedback/Dialog.d.ts
export interface DialogProps extends Omit<React.DialogHTMLAttributes<HTMLDialogElement>, "title"> {
  /** Mở (true) hoặc đóng (false). Mở bằng showModal, có khoá tiêu điểm và Esc. */
  open?: boolean;
  /** Tiêu đề <h2>, nối với aria-labelledby. */
  title?: React.ReactNode;
  /** Nội dung hộp thoại. */
  children?: React.ReactNode;
  /** Gọi khi bấm Đóng, nhấn Esc hoặc bấm nền phủ. */
  onClose?: () => void;
  /** Nút hành động, thường gồm hai Button (huỷ, xác nhận). */
  actions?: React.ReactNode;
  /** "danger" đổi màu tiêu đề sang màu nguy hiểm. */
  tone?: "danger";
  /** Lớp CSS bổ sung, gộp với vds-dialog. */
  className?: string;
}

/** Hộp thoại modal: xác nhận, cảnh báo, biểu mẫu ngắn. */
export declare function Dialog(props: DialogProps): React.JSX.Element;

// components/feedback/EmptyState.d.ts
export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tên icon Lucide hiển thị trong vòng tròn, mặc định "message-square". */
  icon?: string;
  /** Tiêu đề ngắn. */
  title: React.ReactNode;
  /** Mô tả bên dưới tiêu đề. */
  children?: React.ReactNode;
  /** Hành động, thường là một Button, đặt dưới mô tả. */
  action?: React.ReactNode;
  /** Lớp CSS bổ sung, gộp với vds-empty. */
  className?: string;
}

/** Khung trạng thái trống: chưa có dữ liệu, chưa có hội thoại. */
export declare function EmptyState(props: EmptyStateProps): React.JSX.Element;

// components/feedback/Spinner.d.ts
export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Kiểu hiển thị. `ring` = vòng xoay, `dots` = ba chấm mờ dần (đang trả lời). */
  variant?: "ring" | "dots";
  /** Cỡ vòng xoay (px). Chỉ dùng với `ring`. Mặc định 20. */
  size?: number;
  /** Chữ cho trình đọc màn hình. Mặc định "Đang tải" (ring) hoặc "Đang trả lời" (dots). */
  label?: string;
  /** Lớp CSS thêm vào, nối sau các lớp vds-spinner. */
  className?: string;
}

export function Spinner(props: SpinnerProps): React.ReactElement;

// components/feedback/Toast.d.ts
export interface ToastProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** Mức độ: info (mặc định), success, warning, danger. Chỉ danger có role="alert". */
  tone?: "info" | "success" | "warning" | "danger";
  /** Tiêu đề in đậm, đặt trên nội dung. */
  title?: React.ReactNode;
  /** Nội dung thông báo. */
  children?: React.ReactNode;
  /** Có nút đóng khi truyền vào. */
  onClose?: () => void;
  /** Hiện (true, mặc định) hoặc ẩn bằng mờ dần. */
  open?: boolean;
  /** Lớp CSS bổ sung, gộp với vds-toast. */
  className?: string;
}

/** Thông báo nổi ngắn: trạng thái thao tác, cảnh báo nhẹ. */
export declare function Toast(props: ToastProps): React.JSX.Element;

export interface ToastRegionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Các Toast con. */
  children?: React.ReactNode;
  /** Lớp CSS bổ sung, gộp với vds-toast-region. */
  className?: string;
}

/** Khung cố định chứa Toast, góc dưới phải. */
export declare function ToastRegion(props: ToastRegionProps): React.JSX.Element;

// components/forms/Checkbox.d.ts
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Nội dung nhãn bên cạnh ô. */
  label: React.ReactNode;
  /** Dòng mô tả nhỏ dưới nhãn. */
  hint?: React.ReactNode;
  /** "radio" + cùng name để chọn một trong nhóm. Mặc định "checkbox". */
  type?: "checkbox" | "radio";
  /** Lớp CSS thêm vào thẻ label gốc (không phải thẻ input). */
  className?: string;
  /** Style gắn vào thẻ label gốc. */
  style?: React.CSSProperties;
}

/** Ô chọn nhiều (checkbox) hoặc chọn một (radio). className và style vào label; các thuộc tính khác vào input. */
export declare function Checkbox(props: CheckboxProps): React.JSX.Element;

// components/forms/FileDrop.d.ts
export interface FileDropFile {
  /** Tên file hiển thị. */
  name: string;
  /** Dung lượng tính bằng byte. */
  size: number;
  /** Tiến độ tải 0–100; có giá trị thì hiện thanh tiến độ. */
  progress?: number;
  /** Thông báo lỗi của file; có thì chữ đỏ kèm icon cảnh báo. */
  error?: string;
}

export interface FileDropProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Loại file được chọn, mặc định ".pdf,.md". */
  accept?: string;
  /** Cho chọn nhiều file cùng lúc. */
  multiple?: boolean;
  /** Gọi khi thả hoặc chọn file, nhận FileList. */
  onFiles?: (files: FileList) => void;
  /** Danh sách file hiển thị dưới vùng kéo thả. */
  files?: FileDropFile[];
  /** Gợi ý dưới dòng chính. */
  hint?: string;
  /** Lớp CSS bổ sung, gộp với vds-filedrop. */
  className?: string;
}

/** Vùng kéo thả file kèm danh sách tiến độ và lỗi. */
export declare function FileDrop(props: FileDropProps): React.JSX.Element;

// components/forms/Input.d.ts
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Nhãn hiển thị phía trên ô nhập. */
  label?: string;
  /** Gợi ý ngắn dưới ô. Bị thay bởi error khi có lỗi. */
  hint?: string;
  /** Thông báo lỗi: viền và chữ đổi sang đỏ, thêm aria-invalid="true". */
  error?: string;
  /** Icon trong ô, bên trái: tên Lucide (vd. "mail") hoặc một node icon. */
  leftIcon?: React.ReactNode;
  /** Lớp CSS thêm vào thẻ input. */
  className?: string;
  /** Style gắn vào thẻ input. */
  style?: React.CSSProperties;
  /** Style gắn vào khung ngoài (nhãn, ô, gợi ý/lỗi). */
  containerStyle?: React.CSSProperties;
}

/** Ô nhập một dòng có nhãn, gợi ý và thông báo lỗi. */
export function Input(props: InputProps): React.ReactElement;

// components/forms/Select.d.ts
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Nhãn hiển thị phía trên ô chọn. */
  label?: string;
  /** Gợi ý ngắn dưới ô. Bị thay bởi error khi có lỗi. */
  hint?: string;
  /** Thông báo lỗi: viền và chữ đổi sang đỏ, thêm aria-invalid="true". */
  error?: string;
  /** Các thẻ option. */
  children?: React.ReactNode;
  /** Lớp CSS thêm vào thẻ select. */
  className?: string;
  /** Style gắn vào thẻ select. */
  style?: React.CSSProperties;
  /** Style gắn vào khung ngoài (nhãn, ô, gợi ý/lỗi). */
  containerStyle?: React.CSSProperties;
}

/** Ô chọn (dropdown) với mũi tên thương hiệu. */
export function Select(props: SelectProps): React.ReactElement;

// components/forms/Textarea.d.ts
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Nhãn hiển thị phía trên ô nhập. */
  label?: string;
  /** Gợi ý ngắn dưới ô. Bị thay bởi error khi có lỗi. */
  hint?: string;
  /** Thông báo lỗi: viền và chữ đổi sang đỏ, thêm aria-invalid="true". */
  error?: string;
  /** Số dòng hiển thị ban đầu. Mặc định 4. */
  rows?: number;
  /** Lớp CSS thêm vào thẻ textarea. */
  className?: string;
  /** Style gắn vào thẻ textarea. */
  style?: React.CSSProperties;
  /** Style gắn vào khung ngoài (nhãn, ô, gợi ý/lỗi). */
  containerStyle?: React.CSSProperties;
}

/** Ô nhập nhiều dòng, cùng kiểu với Input. */
export function Textarea(props: TextareaProps): React.ReactElement;

// components/layout/AppShell.d.ts
export interface AppShellProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Nội dung thanh bên (thường là NavList). Thanh bên nằm trong thẻ nav. */
  sidebar?: React.ReactNode;
  /** Thanh tiêu đề cao 56px phía trên vùng chính (chứa nút menu nếu cần). */
  header?: React.ReactNode;
  /** Vùng chính, cuộn độc lập. */
  children?: React.ReactNode;
  /** Thanh bên đang mở (chỉ có tác dụng dưới 900px). */
  sidebarOpen?: boolean;
  /** Gọi khi bấm lớp phủ hoặc nhấn Esc lúc thanh bên đang mở. */
  onSidebarClose?: () => void;
  /** Nhãn của thẻ nav thanh bên, mặc định "Điều hướng". */
  sidebarLabel?: string;
  /** Lớp CSS thêm vào thẻ gốc. */
  className?: string;
}

/** Khung ứng dụng: thanh bên điều hướng, tiêu đề và vùng chính. Thu thành lớp trượt dưới 900px. */
export function AppShell(props: AppShellProps): React.ReactElement;

// components/layout/NavList.d.ts
export interface NavListItem {
  /** Mã định danh mục, dùng cho activeId và onSelect. */
  id: string;
  /** Nhãn hiển thị, dài quá sẽ bị cắt "…". */
  label: React.ReactNode;
  /** Tên icon Lucide (vd. "message-square") hiển thị bên trái. */
  icon?: string;
  /** Thông tin phụ bên phải, vd. "2 giờ trước". */
  meta?: React.ReactNode;
}

export interface NavListProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Danh sách mục điều hướng. */
  items: NavListItem[];
  /** Mã mục đang chọn (có aria-current="page"). */
  activeId?: string;
  /** Gọi với mã mục khi bấm. */
  onSelect?: (id: string) => void;
  /** Tiêu đề nhóm, in hoa nhỏ phía trên danh sách. */
  heading?: React.ReactNode;
  /** Lớp CSS thêm vào thẻ gốc. */
  className?: string;
}

/** Danh sách điều hướng dạng nút, có tiêu đề nhóm, icon và thông tin phụ. */
export function NavList(props: NavListProps): React.ReactElement;

// components/media/Icon.d.ts
export interface IconProps extends Omit<React.SVGAttributes<SVGSVGElement>, "name"> {
  /** Tên icon Lucide kebab-case có trong components/media/icons.js (vd. "send", "check"). Tên lạ thì không render gì. */
  name: string;
  /** Cạnh icon tính bằng px. Mặc định 18. */
  size?: number;
  /** Độ dày nét. Mặc định 1.75 (nét mảnh). */
  strokeWidth?: number;
  /** Nhãn cho trình đọc màn hình. Không truyền thì icon bị ẩn khỏi trình đọc. */
  label?: string;
  className?: string;
}

/** Icon Lucide nhúng sẵn, màu lấy theo `currentColor`. */
export function Icon(props: IconProps): React.ReactElement | null;

// components/navigation/Breadcrumb.d.ts
export interface BreadcrumbItem {
  label: React.ReactNode;
  href?: string;
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  /** Các mục đường dẫn. Mục cuối là trang hiện tại, không phải link. */
  items: BreadcrumbItem[];
  /** Gọi khi bấm một mục link, thay cho chuyển trang mặc định. */
  onNavigate?: (item: BreadcrumbItem) => void;
  /** Lớp CSS bổ sung, gộp với vds-breadcrumb. */
  className?: string;
}

/** Đường dẫn phân cấp, mục cuối là trang hiện tại. */
export declare function Breadcrumb(props: BreadcrumbProps): React.JSX.Element;

// components/navigation/Pagination.d.ts
export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  /** Trang hiện tại, bắt đầu từ 1. */
  page: number;
  /** Tổng số trang. Nhỏ hơn 2 thì không hiện gì. */
  total: number;
  /** Gọi khi bấm sang trang khác. */
  onChange?: (page: number) => void;
  /** Số trang hiện hai bên trang hiện tại, mặc định 2 */
  window?: number;
  /** Lớp CSS bổ sung, gộp với vds-pagination. */
  className?: string;
}

/** Phân trang danh sách dài, rút gọn bằng "…". */
export declare function Pagination(props: PaginationProps): React.JSX.Element;

// components/navigation/Tabs.d.ts
export interface TabItem {
  id: string;
  label: React.ReactNode;
  content: React.ReactNode;
}

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Danh sách tab */
  tabs: TabItem[];
  /** Id tab mở ban đầu (không kiểm soát) */
  defaultTab?: string;
  /** Id tab đang chọn (có kiểm soát); dùng cùng onChange */
  value?: string;
  /** Gọi khi người dùng chọn tab khác */
  onChange?: (id: string) => void;
  className?: string;
}

export declare function Tabs(props: TabsProps): React.JSX.Element;

// components/print/BrandFooter.d.ts
export interface BrandFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  company?: React.ReactNode;
  url?: React.ReactNode;
  /** Số trang, ví dụ "02". */
  page?: React.ReactNode;
  size?: number;
}
/** Chân trang cho Profile, slide, datasheet. */
export function BrandFooter(props: BrandFooterProps): React.ReactElement;
// components/print/CallToAction.d.ts
export interface CallToActionProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode;
  /** Thông tin kèm theo, ví dụ số điện thoại hoặc url. */
  detail?: React.ReactNode;
  variant?: "solid" | "outline" | "link";
  /** Cỡ chữ px. */
  size?: number;
}
/** Lời kêu gọi hành động trên slide, Profile, ảnh chung. */
export function CallToAction(props: CallToActionProps): React.ReactElement;
// components/print/CertificationMark.d.ts
export interface CertificationMarkProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Mã ngắn: COA, MSDS, CO/CQ, ISO 9001… */
  code: React.ReactNode;
  /** Mô tả ngắn. */
  label?: React.ReactNode;
  size?: "md" | "lg";
}
/** Badge chứng nhận / chứng từ đi kèm sản phẩm. */
export function CertificationMark(props: CertificationMarkProps): React.ReactElement;
// components/print/ContactBlock.d.ts
export interface ContactBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  address?: React.ReactNode;
  phone?: React.ReactNode;
  email?: React.ReactNode;
  web?: React.ReactNode;
  layout?: "stack" | "row";
  size?: number;
  /** Màu chữ; trên nền xanh dùng "var(--text-on-brand)". */
  color?: string;
  iconColor?: string;
}
/** Thông tin liên hệ Vichem cho bìa sau, slide closing, email. */
export function ContactBlock(props: ContactBlockProps): React.ReactElement;
// components/print/HeadingLockup.d.ts
export interface HeadingLockupProps extends React.HTMLAttributes<HTMLDivElement> {
  line1: React.ReactNode;
  line2?: React.ReactNode;
  /** Số mục, ví dụ "02". */
  number?: React.ReactNode;
  /** Cỡ chữ px. Slide: 72, A4: 42. */
  size?: number;
}
/** Tiêu đề mục 2 dòng dùng cho trang Profile và slide nội dung. */
export function HeadingLockup(props: HeadingLockupProps): React.ReactElement;
// components/print/NumberTile.d.ts
export interface NumberTileProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Số, ví dụ "01". */
  n: React.ReactNode;
  size?: number;
}
/** Ô số thứ tự cho danh sách, quy trình. */
export function NumberTile(props: NumberTileProps): React.ReactElement;
// components/print/PartnerLogos.d.ts
export interface PartnerLogo { src?: string; name: string; }
export interface PartnerLogosProps extends React.HTMLAttributes<HTMLDivElement> {
  logos: PartnerLogo[];
  columns?: number;
  cellHeight?: number;
}
/** Lưới logo đối tác / nhà cung cấp. */
export function PartnerLogos(props: PartnerLogosProps): React.ReactElement;
// components/print/ProductTile.d.ts
export interface ProductTileProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  /** Ngành hàng, ví dụ "Chất phủ & Mực in". */
  category?: React.ReactNode;
  name: React.ReactNode;
  description?: React.ReactNode;
  /** 2–3 cặp [chỉ tiêu, giá trị]. */
  specs?: [React.ReactNode, React.ReactNode][];
}
/** Thẻ sản phẩm cho Profile, catalogue, slide. */
export function ProductTile(props: ProductTileProps): React.ReactElement;
// components/print/QuoteBlock.d.ts
export interface QuoteBlockProps extends React.HTMLAttributes<HTMLElement> {
  quote: React.ReactNode;
  name?: React.ReactNode;
  /** Chức danh, công ty. */
  role?: React.ReactNode;
  /** Cỡ chữ trích dẫn px. */
  size?: number;
}
/** Trích dẫn khách hàng, lãnh đạo. */
export function QuoteBlock(props: QuoteBlockProps): React.ReactElement;
// components/print/SpecTable.d.ts
export interface SpecTableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  columns?: React.ReactNode[];
  rows: React.ReactNode[][];
  /** Chỉ số các cột số (căn phải). Mặc định [2]. */
  numericColumns?: number[];
  fontSize?: number;
}
/** Bảng thông số kỹ thuật cho datasheet, Profile, slide. */
export function SpecTable(props: SpecTableProps): React.ReactElement;
// components/print/StatBlock.d.ts
export interface StatBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  value: React.ReactNode;
  /** Đơn vị hoặc hậu tố: +, %, năm… */
  unit?: React.ReactNode;
  label: React.ReactNode;
  /** Cỡ số px. Slide: 96, A4: 56. */
  size?: number;
  /** Đường kẻ phía trên. */
  divider?: boolean;
}
/** Số liệu nổi bật cho Profile, slide. */
export function StatBlock(props: StatBlockProps): React.ReactElement;
// components/print/TitleBlock.d.ts
export interface TitleBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tiêu đề — tối đa 3 dòng, hiển thị in hoa. */
  title: React.ReactNode;
  /** Đoạn dẫn ngắn, tùy chọn. */
  lead?: React.ReactNode;
  /** Thang chữ theo khổ: ảnh chung 1280×720, slide 1920×1080, A4. */
  size?: "share" | "slide" | "a4";
  align?: "left" | "center";
  maxWidth?: number | string;
}
/** Tiêu đề chính của một ấn phẩm (ảnh chung, slide, trang Profile). */
export function TitleBlock(props: TitleBlockProps): React.ReactElement;
// components/surfaces/Accordion.d.ts
export interface AccordionItem {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Danh sách mục */
  items: AccordionItem[];
  /** Cho phép mở nhiều mục cùng lúc */
  allowMultiple?: boolean;
  /** Mảng id mở sẵn */
  defaultOpen?: string[];
  className?: string;
}

export declare function Accordion(props: AccordionProps): React.JSX.Element;

// components/surfaces/Card.d.ts
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Viền đậm khi rê chuột, con trỏ bấm. */
  interactive?: boolean;
  /** Đệm trong, giá trị CSS. Mặc định --space-6. */
  padding?: string;
  /** Được nhận nhưng không vẽ gì (không dùng thanh trang trí). */
  accentTop?: boolean;
  /** Lớp CSS bổ sung, gộp với vds-card. */
  className?: string;
  children?: React.ReactNode;
}

/** Bề mặt nền trắng, viền nhạt, bo lớn. */
export function Card(props: CardProps): React.ReactElement;

// components/surfaces/FeatureCard.d.ts
export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  /** Icon node rendered in the tinted tile. */
  icon?: React.ReactNode;
  title?: React.ReactNode;
  /** Tint of the icon tile. */
  tone?: "blue" | "green" | "neutral";
  interactive?: boolean;
  children?: React.ReactNode;
}

/** Icon tile + title + body, for capability / industry grids. */
export function FeatureCard(props: FeatureCardProps): React.ReactElement;

// components/surfaces/ProductCard.d.ts
export interface ProductSpec {
  label: React.ReactNode;
  value: React.ReactNode;
}

export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  name: React.ReactNode;
  supplier?: React.ReactNode;
  category?: React.ReactNode;
  /** 2–4 thông số nổi bật */
  specs?: ProductSpec[];
  /** Ghi chú ràng buộc, hiện màu cảnh báo */
  note?: React.ReactNode;
  onRequest?: () => void;
}

export declare function ProductCard(props: ProductCardProps): React.JSX.Element;
