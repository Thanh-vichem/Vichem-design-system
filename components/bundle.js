/* @ds-bundle: {"format":4,"namespace":"VichemDesignSystem_0c9bec","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"ChatComposer","sourcePath":"components/chat/ChatComposer.jsx"},{"name":"ChatMessage","sourcePath":"components/chat/ChatMessage.jsx"},{"name":"FeedbackButtons","sourcePath":"components/chat/FeedbackButtons.jsx"},{"name":"SourceList","sourcePath":"components/chat/SourceList.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"CertificateBadge","sourcePath":"components/data-display/CertificateBadge.jsx"},{"name":"LogoWall","sourcePath":"components/data-display/LogoWall.jsx"},{"name":"Stat","sourcePath":"components/data-display/Stat.jsx"},{"name":"Table","sourcePath":"components/data-display/Table.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastRegion","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"FileDrop","sourcePath":"components/forms/FileDrop.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"AppShell","sourcePath":"components/layout/AppShell.jsx"},{"name":"NavList","sourcePath":"components/layout/NavList.jsx"},{"name":"Icon","sourcePath":"components/media/Icon.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"BrandFooter","sourcePath":"components/print/BrandFooter.jsx"},{"name":"CallToAction","sourcePath":"components/print/CallToAction.jsx"},{"name":"CertificationMark","sourcePath":"components/print/CertificationMark.jsx"},{"name":"ContactBlock","sourcePath":"components/print/ContactBlock.jsx"},{"name":"HeadingLockup","sourcePath":"components/print/HeadingLockup.jsx"},{"name":"NumberTile","sourcePath":"components/print/NumberTile.jsx"},{"name":"PartnerLogos","sourcePath":"components/print/PartnerLogos.jsx"},{"name":"ProductTile","sourcePath":"components/print/ProductTile.jsx"},{"name":"QuoteBlock","sourcePath":"components/print/QuoteBlock.jsx"},{"name":"SpecTable","sourcePath":"components/print/SpecTable.jsx"},{"name":"StatBlock","sourcePath":"components/print/StatBlock.jsx"},{"name":"TitleBlock","sourcePath":"components/print/TitleBlock.jsx"},{"name":"Accordion","sourcePath":"components/surfaces/Accordion.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"FeatureCard","sourcePath":"components/surfaces/FeatureCard.jsx"},{"name":"ProductCard","sourcePath":"components/surfaces/ProductCard.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"a827d82de3b8","components/buttons/IconButton.jsx":"a163570ef8bc","components/chat/ChatComposer.jsx":"0f0e61193d4d","components/chat/ChatMessage.jsx":"cee5f22c3c50","components/chat/FeedbackButtons.jsx":"16e51ff2530a","components/chat/SourceList.jsx":"312acd5e3a98","components/data-display/Badge.jsx":"783164695c9f","components/data-display/CertificateBadge.jsx":"cbaf912363c5","components/data-display/LogoWall.jsx":"f6b27c962eae","components/data-display/Stat.jsx":"f295bf332165","components/data-display/Table.jsx":"d31a09f3196c","components/data-display/Tag.jsx":"ddb97e0899cc","components/feedback/Alert.jsx":"0c81eb2c9857","components/feedback/Dialog.jsx":"0a85cf865f64","components/feedback/EmptyState.jsx":"0e54b5fb39ba","components/feedback/Spinner.jsx":"032e1b86809e","components/feedback/Toast.jsx":"e36ec4bd4c3c","components/forms/Checkbox.jsx":"b87813cf47f9","components/forms/FileDrop.jsx":"8f36601498d6","components/forms/Input.jsx":"6ba7e00b0b16","components/forms/Select.jsx":"16c834730856","components/forms/Textarea.jsx":"6fbea28e42d4","components/layout/AppShell.jsx":"74c7f91c3e5a","components/layout/NavList.jsx":"e9496397bbd3","components/media/Icon.jsx":"5c27cb30f074","components/navigation/Breadcrumb.jsx":"95349fc3fb2a","components/navigation/Pagination.jsx":"549e6bc74d8b","components/navigation/Tabs.jsx":"ae77414eac50","components/print/BrandFooter.jsx":"59dd9d300207","components/print/CallToAction.jsx":"6d061135856b","components/print/CertificationMark.jsx":"fc5f6ea21a7f","components/print/ContactBlock.jsx":"37d584d0942e","components/print/HeadingLockup.jsx":"d627113180a2","components/print/NumberTile.jsx":"fe59ff9330e2","components/print/PartnerLogos.jsx":"3837857bf328","components/print/ProductTile.jsx":"993824b472a1","components/print/QuoteBlock.jsx":"c2131c03a06a","components/print/SpecTable.jsx":"2d9d3a29e84d","components/print/StatBlock.jsx":"1492f9296271","components/print/TitleBlock.jsx":"e3711c1aabc6","components/surfaces/Accordion.jsx":"328cda8d6cce","components/surfaces/Card.jsx":"0317050177a6","components/surfaces/FeatureCard.jsx":"6263c727e50c","components/surfaces/ProductCard.jsx":"d271237f0e48"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {
const __ds_ns = (window.VichemDesignSystem_0c9bec = window.VichemDesignSystem_0c9bec || {});
(__ds_ns.__errors = __ds_ns.__errors || []);
try {
var __vds = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // react-global:react
  var require_react = __commonJS({
    "react-global:react"(exports, module) {
      module.exports = window.React;
    }
  });

  // components/index.js
  var index_exports = {};
  __export(index_exports, {
    Accordion: () => Accordion,
    Alert: () => Alert,
    AppShell: () => AppShell,
    Badge: () => Badge,
    BrandFooter: () => BrandFooter,
    Breadcrumb: () => Breadcrumb,
    Button: () => Button,
    CallToAction: () => CallToAction,
    Card: () => Card,
    CertificateBadge: () => CertificateBadge,
    CertificationMark: () => CertificationMark,
    ChatComposer: () => ChatComposer,
    ChatMessage: () => ChatMessage,
    Checkbox: () => Checkbox,
    ContactBlock: () => ContactBlock,
    Dialog: () => Dialog,
    EmptyState: () => EmptyState,
    FeatureCard: () => FeatureCard,
    FeedbackButtons: () => FeedbackButtons,
    FileDrop: () => FileDrop,
    HeadingLockup: () => HeadingLockup,
    Icon: () => Icon,
    IconButton: () => IconButton,
    Input: () => Input,
    LogoWall: () => LogoWall,
    NavList: () => NavList,
    NumberTile: () => NumberTile,
    Pagination: () => Pagination,
    PartnerLogos: () => PartnerLogos,
    ProductCard: () => ProductCard,
    ProductTile: () => ProductTile,
    QuoteBlock: () => QuoteBlock,
    Select: () => Select,
    SourceList: () => SourceList,
    SpecTable: () => SpecTable,
    Spinner: () => Spinner,
    Stat: () => Stat,
    StatBlock: () => StatBlock,
    Table: () => Table,
    Tabs: () => Tabs,
    Tag: () => Tag,
    Textarea: () => Textarea,
    TitleBlock: () => TitleBlock,
    Toast: () => Toast,
    ToastRegion: () => ToastRegion
  });

  // components/buttons/Button.jsx
  var import_react = __toESM(require_react(), 1);

  // components/_shared/cx.js
  var cx = (...names) => names.filter(Boolean).join(" ");

  // components/buttons/Button.jsx
  function Button({
    variant = "primary",
    size = "md",
    type = "button",
    leftIcon = null,
    rightIcon = null,
    fullWidth = false,
    className,
    children,
    ...rest
  }) {
    return /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        type,
        className: cx("vds-btn", `vds-btn--${variant}`, size !== "md" && `vds-btn--${size}`, fullWidth && "vds-btn--full", className),
        ...rest
      },
      leftIcon ? /* @__PURE__ */ import_react.default.createElement("span", { className: "vds-btn__icon", "aria-hidden": "true" }, leftIcon) : null,
      children,
      rightIcon ? /* @__PURE__ */ import_react.default.createElement("span", { className: "vds-btn__icon", "aria-hidden": "true" }, rightIcon) : null
    );
  }

  // components/buttons/IconButton.jsx
  var import_react2 = __toESM(require_react(), 1);
  function IconButton({
    variant = "secondary",
    size = "md",
    type = "button",
    label,
    icon = null,
    className,
    children,
    ...rest
  }) {
    return /* @__PURE__ */ import_react2.default.createElement(
      "button",
      {
        type,
        "aria-label": label,
        title: label,
        className: cx("vds-iconbtn", `vds-iconbtn--${variant}`, size !== "md" && `vds-iconbtn--${size}`, className),
        ...rest
      },
      icon != null ? icon : children
    );
  }

  // components/chat/ChatComposer.jsx
  var import_react5 = __toESM(require_react(), 1);

  // components/media/Icon.jsx
  var import_react3 = __toESM(require_react(), 1);

  // components/media/icons.js
  var ICONS = { "arrow-right": [["path", { "d": "M5 12h14" }], ["path", { "d": "m12 5 7 7-7 7" }]], "arrow-left": [["path", { "d": "m12 19-7-7 7-7" }], ["path", { "d": "M19 12H5" }]], "chevron-down": [["path", { "d": "m6 9 6 6 6-6" }]], "chevron-right": [["path", { "d": "m9 18 6-6-6-6" }]], "chevron-left": [["path", { "d": "m15 18-6-6 6-6" }]], "x": [["path", { "d": "M18 6 6 18" }], ["path", { "d": "m6 6 12 12" }]], "check": [["path", { "d": "M20 6 9 17l-5-5" }]], "info": [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M12 16v-4" }], ["path", { "d": "M12 8h.01" }]], "circle-alert": [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["line", { "x1": "12", "x2": "12", "y1": "8", "y2": "12" }], ["line", { "x1": "12", "x2": "12.01", "y1": "16", "y2": "16" }]], "triangle-alert": [["path", { "d": "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" }], ["path", { "d": "M12 9v4" }], ["path", { "d": "M12 17h.01" }]], "circle-check": [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "m9 12 2 2 4-4" }]], "menu": [["line", { "x1": "4", "x2": "20", "y1": "12", "y2": "12" }], ["line", { "x1": "4", "x2": "20", "y1": "6", "y2": "6" }], ["line", { "x1": "4", "x2": "20", "y1": "18", "y2": "18" }]], "send": [["path", { "d": "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" }], ["path", { "d": "m21.854 2.147-10.94 10.939" }]], "thumbs-up": [["path", { "d": "M7 10v12" }], ["path", { "d": "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" }]], "thumbs-down": [["path", { "d": "M17 14V2" }], ["path", { "d": "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" }]], "file-text": [["path", { "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { "d": "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { "d": "M10 9H8" }], ["path", { "d": "M16 13H8" }], ["path", { "d": "M16 17H8" }]], "file": [["path", { "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { "d": "M14 2v4a2 2 0 0 0 2 2h4" }]], "upload": [["path", { "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }], ["polyline", { "points": "17 8 12 3 7 8" }], ["line", { "x1": "12", "x2": "12", "y1": "3", "y2": "15" }]], "download": [["path", { "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }], ["polyline", { "points": "7 10 12 15 17 10" }], ["line", { "x1": "12", "x2": "12", "y1": "15", "y2": "3" }]], "trash-2": [["path", { "d": "M3 6h18" }], ["path", { "d": "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }], ["path", { "d": "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }], ["line", { "x1": "10", "x2": "10", "y1": "11", "y2": "17" }], ["line", { "x1": "14", "x2": "14", "y1": "11", "y2": "17" }]], "search": [["circle", { "cx": "11", "cy": "11", "r": "8" }], ["path", { "d": "m21 21-4.3-4.3" }]], "plus": [["path", { "d": "M5 12h14" }], ["path", { "d": "M12 5v14" }]], "message-square": [["path", { "d": "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }]], "log-out": [["path", { "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }], ["polyline", { "points": "16 17 21 12 16 7" }], ["line", { "x1": "21", "x2": "9", "y1": "12", "y2": "12" }]], "settings": [["path", { "d": "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" }], ["circle", { "cx": "12", "cy": "12", "r": "3" }]], "chart-column": [["path", { "d": "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { "d": "M18 17V9" }], ["path", { "d": "M13 17V5" }], ["path", { "d": "M8 17v-3" }]], "loader-circle": [["path", { "d": "M21 12a9 9 0 1 1-6.219-8.56" }]], "globe": [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }], ["path", { "d": "M2 12h20" }]], "external-link": [["path", { "d": "M15 3h6v6" }], ["path", { "d": "M10 14 21 3" }], ["path", { "d": "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }]], "user": [["path", { "d": "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }], ["circle", { "cx": "12", "cy": "7", "r": "4" }]], "users": [["path", { "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }], ["circle", { "cx": "9", "cy": "7", "r": "4" }], ["path", { "d": "M22 21v-2a4 4 0 0 0-3-3.87" }], ["path", { "d": "M16 3.13a4 4 0 0 1 0 7.75" }]], "copy": [["rect", { "width": "14", "height": "14", "x": "8", "y": "8", "rx": "2", "ry": "2" }], ["path", { "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]], "refresh-cw": [["path", { "d": "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }], ["path", { "d": "M21 3v5h-5" }], ["path", { "d": "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }], ["path", { "d": "M8 16H3v5" }]], "mail": [["rect", { "width": "20", "height": "16", "x": "2", "y": "4", "rx": "2" }], ["path", { "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }]], "phone": [["path", { "d": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }]], "map-pin": [["path", { "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }], ["circle", { "cx": "12", "cy": "10", "r": "3" }]], "leaf": [["path", { "d": "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" }], ["path", { "d": "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" }]], "shield-check": [["path", { "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { "d": "m9 12 2 2 4-4" }]], "warehouse": [["path", { "d": "M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" }], ["path", { "d": "M6 18h12" }], ["path", { "d": "M6 14h12" }], ["rect", { "width": "12", "height": "12", "x": "6", "y": "10" }]], "flask-conical": [["path", { "d": "M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" }], ["path", { "d": "M8.5 2h7" }], ["path", { "d": "M7 16h10" }]], "layout-grid": [["rect", { "width": "7", "height": "7", "x": "3", "y": "3", "rx": "1" }], ["rect", { "width": "7", "height": "7", "x": "14", "y": "3", "rx": "1" }], ["rect", { "width": "7", "height": "7", "x": "14", "y": "14", "rx": "1" }], ["rect", { "width": "7", "height": "7", "x": "3", "y": "14", "rx": "1" }]], "recycle": [["path", { "d": "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" }], ["path", { "d": "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" }], ["path", { "d": "m14 16-3 3 3 3" }], ["path", { "d": "M8.293 13.596 7.196 9.5 3.1 10.598" }], ["path", { "d": "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" }], ["path", { "d": "m13.378 9.633 4.096 1.098 1.097-4.096" }]], "paint-roller": [["rect", { "width": "16", "height": "6", "x": "2", "y": "2", "rx": "2" }], ["path", { "d": "M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" }], ["rect", { "width": "4", "height": "6", "x": "8", "y": "16", "rx": "1" }]], "layers": [["path", { "d": "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" }], ["path", { "d": "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" }], ["path", { "d": "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" }]], "shirt": [["path", { "d": "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" }]], "gem": [["path", { "d": "M6 3h12l4 6-10 13L2 9Z" }], ["path", { "d": "M11 3 8 9l4 13 4-13-3-6" }], ["path", { "d": "M2 9h20" }]], "quote": [["path", { "d": "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" }], ["path", { "d": "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" }]] };

  // components/media/Icon.jsx
  function Icon({ name, size = 18, strokeWidth = 1.75, label, className, ...rest }) {
    const node = ICONS[name];
    if (!node) return null;
    return /* @__PURE__ */ import_react3.default.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className,
        role: label ? "img" : void 0,
        "aria-label": label,
        "aria-hidden": label ? void 0 : "true",
        focusable: "false",
        ...rest
      },
      node.map(([tag, attrs], i) => import_react3.default.createElement(tag, { key: i, ...attrs }))
    );
  }

  // components/feedback/Spinner.jsx
  var import_react4 = __toESM(require_react(), 1);
  function Spinner({ variant = "ring", size = 20, label, className, ...rest }) {
    const isDots = variant === "dots";
    const text = label != null ? label : isDots ? "Đang trả lời" : "Đang tải";
    return /* @__PURE__ */ import_react4.default.createElement("span", { role: "status", className: cx("vds-spinner", `vds-spinner--${isDots ? "dots" : "ring"}`, className), ...rest }, isDots ? Array.from({ length: 3 }, (_, i) => /* @__PURE__ */ import_react4.default.createElement("span", { key: i, className: "vds-spinner__dot" })) : /* @__PURE__ */ import_react4.default.createElement(Icon, { name: "loader-circle", size, className: "vds-spinner__ring" }), /* @__PURE__ */ import_react4.default.createElement("span", { className: "vds-sr-only" }, text));
  }

  // components/chat/ChatComposer.jsx
  function ChatComposer({
    value,
    onChange,
    onSubmit,
    disabled = false,
    busy = false,
    placeholder = "Hỏi về sản phẩm, thông số, ứng dụng…",
    maxRows = 6,
    hint,
    className,
    ...rest
  }) {
    const controlled = value !== void 0;
    const [inner, setInner] = (0, import_react5.useState)("");
    const text = controlled ? value : inner;
    const ref = (0, import_react5.useRef)(null);
    (0, import_react5.useEffect)(() => {
      const el = ref.current;
      if (!el) return;
      el.style.height = "auto";
      const cs = getComputedStyle(el);
      const lineHeight = parseFloat(cs.lineHeight) || 24;
      const padding = (parseFloat(cs.paddingTop) || 0) + (parseFloat(cs.paddingBottom) || 0);
      const max = lineHeight * maxRows + padding;
      el.style.height = Math.min(el.scrollHeight, max) + "px";
      el.style.overflowY = el.scrollHeight > max ? "auto" : "hidden";
    }, [text, maxRows]);
    const canSend = !disabled && !busy && text.trim().length > 0;
    function setText(next) {
      if (!controlled) setInner(next);
      if (onChange) onChange(next);
    }
    function submit() {
      if (!canSend) return;
      const trimmed = text.trim();
      if (onSubmit) onSubmit(trimmed);
      if (!controlled) setInner("");
    }
    function handleKeyDown(e) {
      if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing && e.keyCode !== 229) {
        e.preventDefault();
        submit();
      }
    }
    return /* @__PURE__ */ import_react5.default.createElement("div", { className: cx("vds-composer", disabled && "vds-composer--disabled", className), ...rest }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "vds-composer__box" }, /* @__PURE__ */ import_react5.default.createElement(
      "textarea",
      {
        ref,
        className: "vds-composer__input",
        rows: 1,
        "aria-label": placeholder,
        placeholder,
        disabled,
        value: text,
        onChange: (e) => setText(e.target.value),
        onKeyDown: handleKeyDown
      }
    ), /* @__PURE__ */ import_react5.default.createElement(
      IconButton,
      {
        variant: "primary",
        label: "Gửi",
        className: "vds-composer__send",
        icon: busy ? /* @__PURE__ */ import_react5.default.createElement(Spinner, { variant: "ring", size: 18, label: "Đang gửi" }) : /* @__PURE__ */ import_react5.default.createElement(Icon, { name: "send" }),
        disabled: !canSend,
        onClick: submit
      }
    )), hint ? /* @__PURE__ */ import_react5.default.createElement("div", { className: "vds-composer__hint" }, hint) : null);
  }

  // components/chat/ChatMessage.jsx
  var import_react6 = __toESM(require_react(), 1);
  function ChatMessage({ role = "assistant", children, footer = null, pending = false, className, ...rest }) {
    const isUser = role === "user";
    return /* @__PURE__ */ import_react6.default.createElement(
      "div",
      {
        className: cx("vds-msg", isUser ? "vds-msg--user" : "vds-msg--assistant", className),
        "aria-live": pending ? "polite" : void 0,
        "aria-busy": pending || void 0,
        ...rest
      },
      /* @__PURE__ */ import_react6.default.createElement("div", { className: "vds-msg__body" }, pending ? /* @__PURE__ */ import_react6.default.createElement(Spinner, { variant: "dots" }) : children),
      footer ? /* @__PURE__ */ import_react6.default.createElement("div", { className: "vds-msg__footer" }, footer) : null
    );
  }

  // components/chat/FeedbackButtons.jsx
  var import_react7 = __toESM(require_react(), 1);
  function FeedbackButtons({
    value = null,
    onChange,
    labels = { up: "Hữu ích", down: "Không hữu ích" },
    className,
    ...rest
  }) {
    const pick = (v) => onChange && onChange(value === v ? null : v);
    return /* @__PURE__ */ import_react7.default.createElement("div", { className: cx("vds-feedback", className), role: "group", "aria-label": "Đánh giá câu trả lời", ...rest }, /* @__PURE__ */ import_react7.default.createElement(
      IconButton,
      {
        size: "sm",
        variant: "ghost",
        label: labels.up,
        icon: /* @__PURE__ */ import_react7.default.createElement(Icon, { name: "thumbs-up" }),
        "aria-pressed": value === "up",
        className: cx("vds-feedback__btn", value === "up" && "vds-feedback__btn--on"),
        onClick: () => pick("up")
      }
    ), /* @__PURE__ */ import_react7.default.createElement(
      IconButton,
      {
        size: "sm",
        variant: "ghost",
        label: labels.down,
        icon: /* @__PURE__ */ import_react7.default.createElement(Icon, { name: "thumbs-down" }),
        "aria-pressed": value === "down",
        className: cx("vds-feedback__btn", value === "down" && "vds-feedback__btn--on"),
        onClick: () => pick("down")
      }
    ));
  }

  // components/chat/SourceList.jsx
  var import_react8 = __toESM(require_react(), 1);
  function SourceList({
    sources = [],
    unverified = false,
    heading = "Nguồn",
    className,
    ...rest
  }) {
    return /* @__PURE__ */ import_react8.default.createElement("div", { className: cx("vds-sources", className), ...rest }, heading ? /* @__PURE__ */ import_react8.default.createElement("div", { className: "vds-sources__heading" }, heading) : null, /* @__PURE__ */ import_react8.default.createElement("ul", { className: "vds-sources__list" }, sources.map((s, i) => /* @__PURE__ */ import_react8.default.createElement("li", { key: i, className: "vds-sources__item" }, /* @__PURE__ */ import_react8.default.createElement(Icon, { name: "file-text", size: 16, className: "vds-sources__icon" }), /* @__PURE__ */ import_react8.default.createElement("span", { className: "vds-sources__text" }, s.href ? /* @__PURE__ */ import_react8.default.createElement("a", { href: s.href, target: "_blank", rel: "noopener noreferrer", className: "vds-sources__link" }, s.title) : s.title, s.page ? `, trang ${s.page}` : null)))), unverified ? /* @__PURE__ */ import_react8.default.createElement("div", { className: "vds-sources__warn" }, /* @__PURE__ */ import_react8.default.createElement(Icon, { name: "triangle-alert", size: 16, className: "vds-sources__warn-icon" }), /* @__PURE__ */ import_react8.default.createElement("span", null, "Một phần câu trả lời không có trong tài liệu, cần kiểm tra lại.")) : null);
  }

  // components/data-display/Badge.jsx
  var import_react9 = __toESM(require_react(), 1);
  var TONES = ["neutral", "blue", "success", "danger"];
  var TONE_MAP = { green: "success", warning: "neutral" };
  function Badge({ tone = "neutral", variant, children, className, ...rest }) {
    const mapped = TONE_MAP[tone] || tone;
    const t = TONES.includes(mapped) ? mapped : "neutral";
    return /* @__PURE__ */ import_react9.default.createElement("span", { className: cx("vds-badge", `vds-badge--${t}`, className), ...rest }, children);
  }

  // components/data-display/CertificateBadge.jsx
  var import_react10 = __toESM(require_react(), 1);
  function CertificateBadge({ supplier, scope, since, territory, className, style, ...rest }) {
    return /* @__PURE__ */ import_react10.default.createElement(
      "div",
      {
        className,
        style: {
          display: "flex",
          alignItems: "flex-start",
          gap: "var(--space-4)",
          padding: "var(--space-4) var(--space-5)",
          background: "var(--surface-card)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-xs)",
          ...style
        },
        ...rest
      },
      /* @__PURE__ */ import_react10.default.createElement(
        "span",
        {
          "aria-hidden": "true",
          style: {
            flex: "none",
            width: 40,
            height: 40,
            display: "grid",
            placeItems: "center",
            borderRadius: "var(--radius-md)",
            background: "var(--color-success-bg)",
            color: "var(--text-body)"
          }
        },
        /* @__PURE__ */ import_react10.default.createElement(Icon, { name: "shield-check", size: 20 })
      ),
      /* @__PURE__ */ import_react10.default.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ import_react10.default.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: "var(--space-3)", flexWrap: "wrap" } }, /* @__PURE__ */ import_react10.default.createElement(
        "strong",
        {
          style: {
            fontFamily: "var(--font-body)",
            fontWeight: "var(--weight-bold)",
            fontSize: "var(--text-base)",
            color: "var(--text-body)"
          }
        },
        supplier
      ), since ? /* @__PURE__ */ import_react10.default.createElement("span", { style: { fontSize: "var(--text-xs)", color: "var(--text-muted)", fontVariantNumeric: "tabular-nums" } }, "từ ", since) : null), scope ? /* @__PURE__ */ import_react10.default.createElement("p", { style: { margin: "3px 0 0", fontSize: "var(--text-sm)", lineHeight: "var(--leading-normal)", color: "var(--text-body)" } }, scope) : null, territory ? /* @__PURE__ */ import_react10.default.createElement(
        "p",
        {
          style: {
            margin: "var(--space-3) 0 0",
            padding: "7px 11px",
            fontSize: "var(--text-xs)",
            lineHeight: "var(--leading-normal)",
            color: "var(--text-body)",
            background: "var(--color-warning-bg)",
            borderRadius: "var(--radius-sm)"
          }
        },
        /* @__PURE__ */ import_react10.default.createElement("strong", { style: { color: "var(--color-warning)" } }, "Ràng buộc lãnh thổ:"),
        " ",
        territory
      ) : null)
    );
  }

  // components/data-display/LogoWall.jsx
  var import_react11 = __toESM(require_react(), 1);
  function LogoWall({ items = [], columns = 4, grayscale = true, className, style, ...rest }) {
    return /* @__PURE__ */ import_react11.default.createElement(
      "div",
      {
        className,
        style: {
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          gap: "1px",
          background: "var(--border-subtle)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
          ...style
        },
        ...rest
      },
      items.map((it, i) => /* @__PURE__ */ import_react11.default.createElement(
        "div",
        {
          key: i,
          title: it.name,
          style: {
            display: "grid",
            placeItems: "center",
            minHeight: 84,
            padding: "var(--space-4)",
            background: "var(--surface-card)"
          }
        },
        it.src ? /* @__PURE__ */ import_react11.default.createElement(
          "img",
          {
            src: it.src,
            alt: it.name,
            style: {
              maxWidth: "100%",
              maxHeight: 40,
              width: "auto",
              display: "block",
              filter: grayscale ? "grayscale(1)" : "none",
              opacity: grayscale ? 0.72 : 1
            }
          }
        ) : /* @__PURE__ */ import_react11.default.createElement(
          "span",
          {
            style: {
              fontFamily: "var(--font-body)",
              fontWeight: "var(--weight-bold)",
              fontSize: "var(--text-sm)",
              letterSpacing: "var(--tracking-wide)",
              color: "var(--text-muted)",
              textAlign: "center"
            }
          },
          it.name
        )
      ))
    );
  }

  // components/data-display/Stat.jsx
  var import_react12 = __toESM(require_react(), 1);
  function Stat({ value, label, sublabel, accent = false, align = "left", className, ...rest }) {
    return /* @__PURE__ */ import_react12.default.createElement("div", { className: cx("vds-stat", align !== "left" && `vds-stat--${align}`, className), ...rest }, /* @__PURE__ */ import_react12.default.createElement("div", { className: "vds-stat__value" }, value), /* @__PURE__ */ import_react12.default.createElement("div", { className: "vds-stat__label" }, label), sublabel ? /* @__PURE__ */ import_react12.default.createElement("div", { className: "vds-stat__sublabel" }, sublabel) : null);
  }

  // components/data-display/Table.jsx
  var import_react13 = __toESM(require_react(), 1);
  function Table({ columns = [], rows = [], caption, dense = false, zebra = true, className, ...rest }) {
    const cellClass = (c) => cx(
      (c.numeric || c.align === "right") && "vds-table__num",
      c.align === "center" && "vds-table__center",
      c.strong && "vds-table__strong"
    ) || void 0;
    return /* @__PURE__ */ import_react13.default.createElement("div", { className: cx("vds-table", dense && "vds-table--dense", zebra && "vds-table--zebra", className), ...rest }, /* @__PURE__ */ import_react13.default.createElement("div", { className: "vds-table__wrap" }, /* @__PURE__ */ import_react13.default.createElement("table", { className: cx("vds-table__table", columns.length > 3 && "vds-table__table--wide") }, caption ? /* @__PURE__ */ import_react13.default.createElement("caption", { className: "vds-table__caption" }, caption) : null, /* @__PURE__ */ import_react13.default.createElement("thead", null, /* @__PURE__ */ import_react13.default.createElement("tr", null, columns.map((c) => /* @__PURE__ */ import_react13.default.createElement("th", { key: c.key, scope: "col", className: cellClass(c), style: { width: c.width } }, c.label)))), /* @__PURE__ */ import_react13.default.createElement("tbody", null, rows.map((r, i) => /* @__PURE__ */ import_react13.default.createElement("tr", { key: i }, columns.map((c) => /* @__PURE__ */ import_react13.default.createElement("td", { key: c.key, className: cellClass(c) }, r[c.key]))))))));
  }

  // components/data-display/Tag.jsx
  var import_react14 = __toESM(require_react(), 1);
  function Tag({ children, dot = false, active = false, onRemove, onClick, className, ...rest }) {
    const classes = cx(
      "vds-tag",
      active && "vds-tag--active",
      onClick && "vds-tag--clickable",
      onRemove && "vds-tag--removable",
      className
    );
    const content = /* @__PURE__ */ import_react14.default.createElement(import_react14.default.Fragment, null, dot ? /* @__PURE__ */ import_react14.default.createElement("span", { className: "vds-tag__dot", "aria-hidden": "true" }) : null, children, onRemove ? /* @__PURE__ */ import_react14.default.createElement(
      "button",
      {
        type: "button",
        className: "vds-tag__remove",
        "aria-label": "Bỏ",
        onClick: (e) => {
          e.stopPropagation();
          onRemove();
        }
      },
      /* @__PURE__ */ import_react14.default.createElement(Icon, { name: "x", size: 14 })
    ) : null);
    if (onClick && onRemove) {
      return /* @__PURE__ */ import_react14.default.createElement("span", { className: classes, ...rest }, /* @__PURE__ */ import_react14.default.createElement("button", { type: "button", className: "vds-tag__toggle", "aria-pressed": active, onClick }, dot ? /* @__PURE__ */ import_react14.default.createElement("span", { className: "vds-tag__dot", "aria-hidden": "true" }) : null, children), content.props.children[2]);
    }
    if (onClick) {
      return /* @__PURE__ */ import_react14.default.createElement("button", { type: "button", className: classes, "aria-pressed": active, onClick, ...rest }, content);
    }
    return /* @__PURE__ */ import_react14.default.createElement("span", { className: classes, ...rest }, content);
  }

  // components/feedback/Alert.jsx
  var import_react15 = __toESM(require_react(), 1);
  var TONE_ICON = { info: "info", success: "check", warning: "triangle-alert", danger: "circle-alert" };
  function Alert({ tone = "info", title, children, className, ...rest }) {
    const t = TONE_ICON[tone] ? tone : "info";
    return /* @__PURE__ */ import_react15.default.createElement(
      "div",
      {
        role: t === "danger" ? "alert" : "status",
        className: cx("vds-alert", `vds-alert--${t}`, className),
        ...rest
      },
      /* @__PURE__ */ import_react15.default.createElement("span", { className: "vds-alert__icon", "aria-hidden": "true" }, /* @__PURE__ */ import_react15.default.createElement(Icon, { name: TONE_ICON[t], size: 14, strokeWidth: 2.25 })),
      /* @__PURE__ */ import_react15.default.createElement("div", { className: "vds-alert__body" }, title ? /* @__PURE__ */ import_react15.default.createElement("strong", { className: "vds-alert__title" }, title) : null, children ? /* @__PURE__ */ import_react15.default.createElement("div", { className: "vds-alert__text" }, children) : null)
    );
  }

  // components/feedback/Dialog.jsx
  var import_react16 = __toESM(require_react(), 1);
  function Dialog({ open = false, title, children, onClose, actions, tone, className, ...rest }) {
    const ref = import_react16.default.useRef(null);
    const titleId = import_react16.default.useId();
    import_react16.default.useEffect(() => {
      const d = ref.current;
      if (!d || typeof d.showModal !== "function") return;
      if (open && !d.open) d.showModal();
      else if (!open && d.open) d.close();
    }, [open]);
    return /* @__PURE__ */ import_react16.default.createElement(
      "dialog",
      {
        ref,
        className: cx("vds-dialog", tone === "danger" && "vds-dialog--danger", className),
        "aria-labelledby": titleId,
        onCancel: (e) => {
          e.preventDefault();
          onClose && onClose();
        },
        onClick: (e) => {
          if (e.target === ref.current) onClose && onClose();
        },
        ...rest
      },
      /* @__PURE__ */ import_react16.default.createElement("div", { className: "vds-dialog__panel" }, /* @__PURE__ */ import_react16.default.createElement("div", { className: "vds-dialog__header" }, /* @__PURE__ */ import_react16.default.createElement("h2", { id: titleId, className: "vds-dialog__title" }, title), /* @__PURE__ */ import_react16.default.createElement(
        IconButton,
        {
          variant: "ghost",
          size: "sm",
          label: "Đóng",
          icon: /* @__PURE__ */ import_react16.default.createElement(Icon, { name: "x" }),
          className: "vds-dialog__close",
          onClick: onClose
        }
      )), /* @__PURE__ */ import_react16.default.createElement("div", { className: "vds-dialog__body" }, children), actions ? /* @__PURE__ */ import_react16.default.createElement("div", { className: "vds-dialog__actions" }, actions) : null)
    );
  }

  // components/feedback/EmptyState.jsx
  var import_react17 = __toESM(require_react(), 1);
  function EmptyState({ icon = "message-square", title, children, action, className, ...rest }) {
    return /* @__PURE__ */ import_react17.default.createElement("div", { className: cx("vds-empty", className), ...rest }, /* @__PURE__ */ import_react17.default.createElement("span", { className: "vds-empty__icon", "aria-hidden": "true" }, /* @__PURE__ */ import_react17.default.createElement(Icon, { name: icon, size: 40, strokeWidth: 1.5 })), /* @__PURE__ */ import_react17.default.createElement("h2", { className: "vds-empty__title" }, title), children ? /* @__PURE__ */ import_react17.default.createElement("p", { className: "vds-empty__text" }, children) : null, action ? /* @__PURE__ */ import_react17.default.createElement("div", { className: "vds-empty__action" }, action) : null);
  }

  // components/feedback/Toast.jsx
  var import_react18 = __toESM(require_react(), 1);
  var TONE_ICON2 = { info: "info", success: "check", warning: "triangle-alert", danger: "circle-alert" };
  function Toast({ tone = "info", title, children, onClose, open = true, className, ...rest }) {
    const t = TONE_ICON2[tone] ? tone : "info";
    return /* @__PURE__ */ import_react18.default.createElement(
      "div",
      {
        className: cx("vds-toast", `vds-toast--${t}`, open && "vds-toast--open", className),
        role: t === "danger" ? "alert" : "status",
        "aria-hidden": open ? void 0 : "true",
        ...rest
      },
      /* @__PURE__ */ import_react18.default.createElement("span", { className: "vds-toast__icon", "aria-hidden": "true" }, /* @__PURE__ */ import_react18.default.createElement(Icon, { name: TONE_ICON2[t], size: 14, strokeWidth: 2.25 })),
      /* @__PURE__ */ import_react18.default.createElement("div", { className: "vds-toast__body" }, title ? /* @__PURE__ */ import_react18.default.createElement("strong", { className: "vds-toast__title" }, title) : null, children ? /* @__PURE__ */ import_react18.default.createElement("div", { className: "vds-toast__text" }, children) : null),
      onClose ? /* @__PURE__ */ import_react18.default.createElement(IconButton, { variant: "ghost", size: "sm", label: "Đóng", icon: /* @__PURE__ */ import_react18.default.createElement(Icon, { name: "x" }), onClick: onClose }) : null
    );
  }
  function ToastRegion({ children, className, ...rest }) {
    return /* @__PURE__ */ import_react18.default.createElement("div", { className: cx("vds-toast-region", className), "aria-live": "polite", ...rest }, children);
  }

  // components/forms/Checkbox.jsx
  var import_react19 = __toESM(require_react(), 1);
  function Checkbox({
    label,
    hint,
    type = "checkbox",
    checked,
    onChange,
    disabled = false,
    className,
    style,
    ...rest
  }) {
    const isRadio = type === "radio";
    return /* @__PURE__ */ import_react19.default.createElement(
      "label",
      {
        className: cx("vds-check", isRadio && "vds-check--radio", disabled && "vds-check--disabled", className),
        style
      },
      /* @__PURE__ */ import_react19.default.createElement(
        "input",
        {
          type,
          className: "vds-check__input",
          checked,
          onChange,
          disabled,
          ...rest
        }
      ),
      /* @__PURE__ */ import_react19.default.createElement("span", { className: "vds-check__box", "aria-hidden": "true" }, isRadio ? /* @__PURE__ */ import_react19.default.createElement("span", { className: "vds-check__dot" }) : /* @__PURE__ */ import_react19.default.createElement(Icon, { name: "check", size: 14 })),
      /* @__PURE__ */ import_react19.default.createElement("span", { className: "vds-check__text" }, /* @__PURE__ */ import_react19.default.createElement("span", { className: "vds-check__label" }, label), hint ? /* @__PURE__ */ import_react19.default.createElement("span", { className: "vds-check__hint" }, hint) : null)
    );
  }

  // components/forms/FileDrop.jsx
  var import_react20 = __toESM(require_react(), 1);
  function formatSize(bytes) {
    if (bytes >= 1e6) return `${(bytes / 1e6).toFixed(1).replace(".", ",")} MB`;
    return `${Math.round(bytes / 1e3)} KB`;
  }
  function FileDrop({
    accept = ".pdf,.md",
    multiple,
    onFiles,
    files = [],
    hint = "PDF hoặc Markdown, tối đa 20 MB mỗi file",
    className,
    ...rest
  }) {
    const [dragging, setDragging] = import_react20.default.useState(false);
    const inputRef = import_react20.default.useRef(null);
    return /* @__PURE__ */ import_react20.default.createElement("div", { className: cx("vds-filedrop", className), ...rest }, /* @__PURE__ */ import_react20.default.createElement(
      "div",
      {
        className: cx("vds-filedrop__zone", dragging && "vds-filedrop__zone--drag"),
        onDragEnter: (e) => {
          e.preventDefault();
          setDragging(true);
        },
        onDragOver: (e) => {
          e.preventDefault();
          setDragging(true);
        },
        onDragLeave: () => setDragging(false),
        onDrop: (e) => {
          e.preventDefault();
          setDragging(false);
          onFiles && onFiles(e.dataTransfer.files);
        }
      },
      /* @__PURE__ */ import_react20.default.createElement(Icon, { name: "upload", size: 28, className: "vds-filedrop__icon" }),
      /* @__PURE__ */ import_react20.default.createElement("p", { className: "vds-filedrop__text" }, "Kéo thả file vào đây hoặc", " ", /* @__PURE__ */ import_react20.default.createElement(
        "button",
        {
          type: "button",
          className: "vds-filedrop__browse",
          onClick: () => inputRef.current && inputRef.current.click()
        },
        "chọn file"
      )),
      /* @__PURE__ */ import_react20.default.createElement("p", { className: "vds-filedrop__hint" }, hint),
      /* @__PURE__ */ import_react20.default.createElement(
        "input",
        {
          ref: inputRef,
          type: "file",
          accept,
          multiple,
          hidden: true,
          onChange: (e) => {
            onFiles && onFiles(e.target.files);
            e.target.value = "";
          }
        }
      )
    ), files.length ? /* @__PURE__ */ import_react20.default.createElement("ul", { className: "vds-filedrop__list" }, files.map((f, i) => {
      const p = f.progress;
      return /* @__PURE__ */ import_react20.default.createElement("li", { key: `${f.name}-${i}`, className: cx("vds-filedrop__file", f.error && "vds-filedrop__file--error") }, /* @__PURE__ */ import_react20.default.createElement(Icon, { name: "file-text", size: 18 }), /* @__PURE__ */ import_react20.default.createElement("div", { className: "vds-filedrop__info" }, /* @__PURE__ */ import_react20.default.createElement("span", { className: "vds-filedrop__name", title: f.name }, f.name), p != null ? /* @__PURE__ */ import_react20.default.createElement(
        "div",
        {
          className: "vds-filedrop__bar",
          role: "progressbar",
          "aria-valuenow": p,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-label": `Đang tải ${f.name}`
        },
        /* @__PURE__ */ import_react20.default.createElement("div", { className: "vds-filedrop__fill", style: { width: `${p}%` } })
      ) : null, f.error ? /* @__PURE__ */ import_react20.default.createElement("span", { className: "vds-filedrop__error" }, /* @__PURE__ */ import_react20.default.createElement(Icon, { name: "circle-alert", size: 16 }), f.error) : null), /* @__PURE__ */ import_react20.default.createElement("span", { className: "vds-filedrop__size" }, formatSize(f.size)));
    })) : null);
  }

  // components/forms/Input.jsx
  var import_react21 = __toESM(require_react(), 1);
  function Input({
    label,
    hint,
    error,
    leftIcon = null,
    id,
    className,
    style,
    containerStyle,
    "aria-describedby": describedBy,
    ...rest
  }) {
    const reactId = import_react21.default.useId();
    const inputId = id || reactId;
    const hintId = `${inputId}-hint`;
    const errorId = `${inputId}-error`;
    const messageId = error ? errorId : hint ? hintId : void 0;
    const describedByIds = [describedBy, messageId].filter(Boolean).join(" ") || void 0;
    return /* @__PURE__ */ import_react21.default.createElement("div", { className: "vds-field", style: containerStyle }, label ? /* @__PURE__ */ import_react21.default.createElement("label", { className: "vds-field__label", htmlFor: inputId }, label) : null, /* @__PURE__ */ import_react21.default.createElement("div", { className: "vds-field__control" }, leftIcon ? /* @__PURE__ */ import_react21.default.createElement("span", { className: "vds-field__icon", "aria-hidden": "true" }, typeof leftIcon === "string" ? /* @__PURE__ */ import_react21.default.createElement(Icon, { name: leftIcon, size: 18 }) : leftIcon) : null, /* @__PURE__ */ import_react21.default.createElement(
      "input",
      {
        id: inputId,
        className: cx("vds-input", leftIcon && "vds-input--icon", className),
        style,
        "aria-invalid": error ? "true" : void 0,
        "aria-describedby": describedByIds,
        ...rest
      }
    )), error ? /* @__PURE__ */ import_react21.default.createElement("span", { id: errorId, className: "vds-field__error" }, error) : hint ? /* @__PURE__ */ import_react21.default.createElement("span", { id: hintId, className: "vds-field__hint" }, hint) : null);
  }

  // components/forms/Select.jsx
  var import_react22 = __toESM(require_react(), 1);
  function Select({
    label,
    hint,
    error,
    id,
    children,
    className,
    style,
    containerStyle,
    "aria-describedby": describedBy,
    ...rest
  }) {
    const reactId = import_react22.default.useId();
    const inputId = id || reactId;
    const hintId = `${inputId}-hint`;
    const errorId = `${inputId}-error`;
    const messageId = error ? errorId : hint ? hintId : void 0;
    const describedByIds = [describedBy, messageId].filter(Boolean).join(" ") || void 0;
    return /* @__PURE__ */ import_react22.default.createElement("div", { className: "vds-field", style: containerStyle }, label ? /* @__PURE__ */ import_react22.default.createElement("label", { className: "vds-field__label", htmlFor: inputId }, label) : null, /* @__PURE__ */ import_react22.default.createElement("div", { className: "vds-field__control" }, /* @__PURE__ */ import_react22.default.createElement(
      "select",
      {
        id: inputId,
        className: cx("vds-select", className),
        style,
        "aria-invalid": error ? "true" : void 0,
        "aria-describedby": describedByIds,
        ...rest
      },
      children
    ), /* @__PURE__ */ import_react22.default.createElement("span", { className: "vds-select__chevron", "aria-hidden": "true" }, /* @__PURE__ */ import_react22.default.createElement(Icon, { name: "chevron-down", size: 18 }))), error ? /* @__PURE__ */ import_react22.default.createElement("span", { id: errorId, className: "vds-field__error" }, error) : hint ? /* @__PURE__ */ import_react22.default.createElement("span", { id: hintId, className: "vds-field__hint" }, hint) : null);
  }

  // components/forms/Textarea.jsx
  var import_react23 = __toESM(require_react(), 1);
  function Textarea({
    label,
    hint,
    error,
    rows = 4,
    id,
    className,
    style,
    containerStyle,
    "aria-describedby": describedBy,
    ...rest
  }) {
    const reactId = import_react23.default.useId();
    const inputId = id || reactId;
    const hintId = `${inputId}-hint`;
    const errorId = `${inputId}-error`;
    const messageId = error ? errorId : hint ? hintId : void 0;
    const describedByIds = [describedBy, messageId].filter(Boolean).join(" ") || void 0;
    return /* @__PURE__ */ import_react23.default.createElement("div", { className: "vds-field", style: containerStyle }, label ? /* @__PURE__ */ import_react23.default.createElement("label", { className: "vds-field__label", htmlFor: inputId }, label) : null, /* @__PURE__ */ import_react23.default.createElement(
      "textarea",
      {
        id: inputId,
        rows,
        className: cx("vds-textarea", className),
        style,
        "aria-invalid": error ? "true" : void 0,
        "aria-describedby": describedByIds,
        ...rest
      }
    ), error ? /* @__PURE__ */ import_react23.default.createElement("span", { id: errorId, className: "vds-field__error" }, error) : hint ? /* @__PURE__ */ import_react23.default.createElement("span", { id: hintId, className: "vds-field__hint" }, hint) : null);
  }

  // components/layout/AppShell.jsx
  var import_react24 = __toESM(require_react(), 1);
  function AppShell({
    sidebar,
    header,
    children,
    sidebarOpen = false,
    onSidebarClose,
    sidebarLabel = "Điều hướng",
    className,
    ...rest
  }) {
    import_react24.default.useEffect(() => {
      if (!sidebarOpen || !onSidebarClose) return void 0;
      const onKeyDown = (event) => {
        if (event.key === "Escape") onSidebarClose();
      };
      document.addEventListener("keydown", onKeyDown);
      return () => document.removeEventListener("keydown", onKeyDown);
    }, [sidebarOpen, onSidebarClose]);
    return /* @__PURE__ */ import_react24.default.createElement("div", { className: cx("vds-shell", sidebarOpen && "vds-shell--open", className), ...rest }, /* @__PURE__ */ import_react24.default.createElement("nav", { className: "vds-shell__sidebar", "aria-label": sidebarLabel }, sidebar), /* @__PURE__ */ import_react24.default.createElement("div", { className: "vds-shell__overlay", onClick: onSidebarClose, "aria-hidden": "true" }), /* @__PURE__ */ import_react24.default.createElement("div", { className: "vds-shell__main" }, header ? /* @__PURE__ */ import_react24.default.createElement("header", { className: "vds-shell__header" }, header) : null, /* @__PURE__ */ import_react24.default.createElement("main", { className: "vds-shell__content" }, children)));
  }

  // components/layout/NavList.jsx
  var import_react25 = __toESM(require_react(), 1);
  function NavList({ items = [], activeId, onSelect, heading, className, ...rest }) {
    return /* @__PURE__ */ import_react25.default.createElement("div", { className: cx("vds-navlist", className), ...rest }, heading ? /* @__PURE__ */ import_react25.default.createElement("div", { className: "vds-navlist__heading" }, heading) : null, /* @__PURE__ */ import_react25.default.createElement("ul", { className: "vds-navlist__list" }, items.map((item) => {
      const active = item.id === activeId;
      return /* @__PURE__ */ import_react25.default.createElement("li", { key: item.id }, /* @__PURE__ */ import_react25.default.createElement(
        "button",
        {
          type: "button",
          className: cx("vds-navlist__item", active && "vds-navlist__item--active"),
          "aria-current": active ? "page" : void 0,
          onClick: () => onSelect && onSelect(item.id)
        },
        item.icon ? /* @__PURE__ */ import_react25.default.createElement(Icon, { name: item.icon, size: 18, className: "vds-navlist__icon" }) : null,
        /* @__PURE__ */ import_react25.default.createElement("span", { className: "vds-navlist__label" }, item.label),
        item.meta ? /* @__PURE__ */ import_react25.default.createElement("span", { className: "vds-navlist__meta" }, item.meta) : null
      ));
    })));
  }

  // components/navigation/Breadcrumb.jsx
  var import_react26 = __toESM(require_react(), 1);
  function Breadcrumb({ items = [], onNavigate, className, ...rest }) {
    return /* @__PURE__ */ import_react26.default.createElement("nav", { "aria-label": "Đường dẫn", className: cx("vds-breadcrumb", className), ...rest }, /* @__PURE__ */ import_react26.default.createElement("ol", { className: "vds-breadcrumb__list" }, items.map((it, i) => {
      const last = i === items.length - 1;
      return /* @__PURE__ */ import_react26.default.createElement("li", { key: i, className: "vds-breadcrumb__item" }, last ? /* @__PURE__ */ import_react26.default.createElement("span", { className: "vds-breadcrumb__current", "aria-current": "page" }, it.label) : /* @__PURE__ */ import_react26.default.createElement(import_react26.default.Fragment, null, /* @__PURE__ */ import_react26.default.createElement(
        "a",
        {
          href: it.href || "#",
          className: "vds-breadcrumb__link",
          onClick: (e) => {
            if (onNavigate) {
              e.preventDefault();
              onNavigate(it);
            }
          }
        },
        it.label
      ), /* @__PURE__ */ import_react26.default.createElement(Icon, { name: "chevron-right", size: 14, className: "vds-breadcrumb__sep" })));
    })));
  }

  // components/navigation/Pagination.jsx
  var import_react27 = __toESM(require_react(), 1);
  function Pagination({ page = 1, total = 1, onChange, window: win = 2, className, ...rest }) {
    if (total < 2) return null;
    const go = (p) => {
      if (p >= 1 && p <= total && p !== page && onChange) onChange(p);
    };
    const nums = [];
    for (let i = 1; i <= total; i++) {
      if (i === 1 || i === total || i >= page - win && i <= page + win) nums.push(i);
      else if (nums[nums.length - 1] !== "…") nums.push("…");
    }
    return /* @__PURE__ */ import_react27.default.createElement("nav", { "aria-label": "Phân trang", className: cx("vds-pagination", className), ...rest }, /* @__PURE__ */ import_react27.default.createElement(
      "button",
      {
        type: "button",
        className: "vds-pagination__page",
        "aria-label": "Trang trước",
        disabled: page === 1,
        onClick: () => go(page - 1)
      },
      /* @__PURE__ */ import_react27.default.createElement(Icon, { name: "chevron-left", size: 16 })
    ), nums.map(
      (n, i) => n === "…" ? /* @__PURE__ */ import_react27.default.createElement("span", { key: "e" + i, className: "vds-pagination__ellipsis" }, "…") : /* @__PURE__ */ import_react27.default.createElement(
        "button",
        {
          key: n,
          type: "button",
          className: "vds-pagination__page",
          "aria-current": n === page ? "page" : void 0,
          onClick: () => go(n)
        },
        n
      )
    ), /* @__PURE__ */ import_react27.default.createElement(
      "button",
      {
        type: "button",
        className: "vds-pagination__page",
        "aria-label": "Trang sau",
        disabled: page === total,
        onClick: () => go(page + 1)
      },
      /* @__PURE__ */ import_react27.default.createElement(Icon, { name: "chevron-right", size: 16 })
    ));
  }

  // components/navigation/Tabs.jsx
  var import_react28 = __toESM(require_react(), 1);
  function Tabs({ tabs = [], value, defaultTab, onChange, className, ...rest }) {
    const uid = import_react28.default.useId();
    const isControlled = value !== void 0;
    const [inner, setInner] = import_react28.default.useState(defaultTab !== void 0 ? defaultTab : tabs[0] && tabs[0].id);
    const active = isControlled ? value : inner;
    const tabRefs = import_react28.default.useRef({});
    const select = (id) => {
      if (!isControlled) setInner(id);
      if (onChange) onChange(id);
    };
    const onKeyDown = (e) => {
      const n = tabs.length;
      if (!n) return;
      const idx = tabs.findIndex((t) => t.id === active);
      let next = null;
      if (e.key === "ArrowRight") next = (idx + 1) % n;
      else if (e.key === "ArrowLeft") next = (idx - 1 + n) % n;
      else if (e.key === "Home") next = 0;
      else if (e.key === "End") next = n - 1;
      if (next === null) return;
      e.preventDefault();
      const id = tabs[next].id;
      select(id);
      const el = tabRefs.current[id];
      if (el) el.focus();
    };
    return /* @__PURE__ */ import_react28.default.createElement("div", { className: cx("vds-tabs", className), ...rest }, /* @__PURE__ */ import_react28.default.createElement("div", { role: "tablist", className: "vds-tabs__list", onKeyDown }, tabs.map((t) => {
      const on = t.id === active;
      return /* @__PURE__ */ import_react28.default.createElement(
        "button",
        {
          key: t.id,
          ref: (el) => {
            tabRefs.current[t.id] = el;
          },
          role: "tab",
          type: "button",
          id: `${uid}-tab-${t.id}`,
          "aria-selected": on,
          "aria-controls": `${uid}-panel-${t.id}`,
          tabIndex: on ? 0 : -1,
          className: cx("vds-tabs__tab", on && "vds-tabs__tab--active"),
          onClick: () => select(t.id)
        },
        t.label
      );
    })), tabs.map((t) => {
      const on = t.id === active;
      return /* @__PURE__ */ import_react28.default.createElement(
        "div",
        {
          key: t.id,
          role: "tabpanel",
          id: `${uid}-panel-${t.id}`,
          "aria-labelledby": `${uid}-tab-${t.id}`,
          hidden: !on,
          className: "vds-tabs__panel"
        },
        t.content
      );
    }));
  }

  // components/print/BrandFooter.jsx
  var import_react29 = __toESM(require_react(), 1);
  function BrandFooter({ company = "Công ty Cổ phần Vichem", url = "vichem.vn", page, size = 13, style, ...rest }) {
    const t = { fontFamily: "var(--font-body)", fontSize: size, lineHeight: 1, color: "var(--text-muted)" };
    return /* @__PURE__ */ import_react29.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: size * 1.5, paddingTop: size, borderTop: "1px solid var(--border-footer)", ...style }, ...rest }, /* @__PURE__ */ import_react29.default.createElement("span", { style: t }, company), /* @__PURE__ */ import_react29.default.createElement("span", { style: { ...t, fontWeight: 700, color: "var(--text-heading)" } }, url), page != null ? /* @__PURE__ */ import_react29.default.createElement("span", { style: { ...t, marginLeft: "auto", fontFamily: "var(--font-display)", fontSize: size * 1.6, color: "var(--text-heading)" } }, page) : null);
  }

  // components/print/CallToAction.jsx
  var import_react30 = __toESM(require_react(), 1);
  function CallToAction({ label, detail, variant = "solid", size = 20, style, ...rest }) {
    const solid = variant === "solid", outline = variant === "outline";
    const fg = solid ? "var(--text-on-brand)" : "var(--color-primary)";
    return /* @__PURE__ */ import_react30.default.createElement("div", { style: { display: "inline-flex", alignItems: "center", gap: 12, padding: variant === "link" ? 0 : size * 0.7 + "px " + size * 1.2 + "px", background: solid ? "var(--color-primary)" : "transparent", border: outline ? "1px solid var(--color-primary)" : "none", borderRadius: "var(--radius-md)", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: size, lineHeight: 1.2, color: fg, ...style }, ...rest }, /* @__PURE__ */ import_react30.default.createElement("span", null, label, detail ? /* @__PURE__ */ import_react30.default.createElement("span", { style: { fontWeight: 400, marginLeft: 8 } }, detail) : null), /* @__PURE__ */ import_react30.default.createElement(Icon, { name: "arrow-right", size: size * 1.1, style: { color: fg, flex: "none" } }));
  }

  // components/print/CertificationMark.jsx
  var import_react31 = __toESM(require_react(), 1);
  function CertificationMark({ code, label, size = "md", style, ...rest }) {
    const lg = size === "lg";
    return /* @__PURE__ */ import_react31.default.createElement("div", { style: { display: "inline-flex", alignItems: "center", gap: lg ? 16 : 12, padding: lg ? "14px 20px" : "10px 14px", border: "1px solid var(--border-default)", borderRadius: "var(--radius-md)", background: "var(--surface-card)", ...style }, ...rest }, /* @__PURE__ */ import_react31.default.createElement("span", { style: { fontFamily: "var(--font-display)", fontSize: lg ? 40 : 28, lineHeight: 1, color: "var(--text-heading)", whiteSpace: "nowrap" } }, code), label ? /* @__PURE__ */ import_react31.default.createElement("span", { style: { fontFamily: "var(--font-body)", fontSize: lg ? 15 : 13, lineHeight: 1.3, color: "var(--text-body)", maxWidth: 160 } }, label) : null);
  }

  // components/print/ContactBlock.jsx
  var import_react32 = __toESM(require_react(), 1);
  var VICHEM = { address: "186–188 Phạm Công Trứ, P. Cát Lái, TP. Hồ Chí Minh", phone: "+84 8 1790 1790", email: "contact@vichem.vn", web: "vichem.vn" };
  function ContactBlock({ address = VICHEM.address, phone = VICHEM.phone, email = VICHEM.email, web = VICHEM.web, layout = "stack", size = 16, color = "var(--text-body)", iconColor = "var(--color-primary)", style, ...rest }) {
    const items = [["map-pin", address], ["phone", phone], ["mail", email], ["globe", web]].filter((x) => x[1]);
    return /* @__PURE__ */ import_react32.default.createElement("div", { style: { display: "flex", flexDirection: layout === "row" ? "row" : "column", flexWrap: "wrap", gap: layout === "row" ? size * 2 : size * 0.8, ...style }, ...rest }, items.map(([n, v]) => /* @__PURE__ */ import_react32.default.createElement("div", { key: n, style: { display: "flex", alignItems: "flex-start", gap: size * 0.7, fontFamily: "var(--font-body)", fontSize: size, lineHeight: 1.4, color } }, /* @__PURE__ */ import_react32.default.createElement(Icon, { name: n, size: size * 1.25, style: { color: iconColor, flex: "none" } }), /* @__PURE__ */ import_react32.default.createElement("span", null, v))));
  }

  // components/print/HeadingLockup.jsx
  var import_react33 = __toESM(require_react(), 1);
  function HeadingLockup({ line1, line2, number, size = 72, style, ...rest }) {
    const t = { margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, fontSize: size, lineHeight: "var(--leading-display)", textTransform: "uppercase" };
    return /* @__PURE__ */ import_react33.default.createElement("div", { style: { display: "flex", alignItems: "flex-start", gap: size * 0.33, ...style }, ...rest }, number ? /* @__PURE__ */ import_react33.default.createElement("span", { style: { fontFamily: "var(--font-display)", fontSize: size * 0.42, lineHeight: 1, color: "var(--text-heading)", borderTop: "1px solid var(--border-brand)", paddingTop: 8 } }, number) : null, /* @__PURE__ */ import_react33.default.createElement("div", null, /* @__PURE__ */ import_react33.default.createElement("p", { style: { ...t, color: "var(--text-heading)" } }, line1), line2 ? /* @__PURE__ */ import_react33.default.createElement("p", { style: { ...t, color: "var(--text-heading)" } }, line2) : null));
  }

  // components/print/NumberTile.jsx
  var import_react34 = __toESM(require_react(), 1);
  function NumberTile({ n, size = 56, style, ...rest }) {
    return /* @__PURE__ */ import_react34.default.createElement("span", { style: { flex: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", width: size, height: size, borderRadius: Math.round(size / 9), background: "var(--color-primary)", color: "var(--text-on-brand)", fontFamily: "var(--font-data)", fontWeight: 700, fontSize: size * 0.5, lineHeight: 1, ...style }, ...rest }, n);
  }

  // components/print/PartnerLogos.jsx
  var import_react35 = __toESM(require_react(), 1);
  function PartnerLogos({ logos = [], columns = 4, cellHeight = 96, style, ...rest }) {
    return /* @__PURE__ */ import_react35.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(" + columns + ", minmax(0,1fr))", gap: 16, ...style }, ...rest }, logos.map((l, i) => /* @__PURE__ */ import_react35.default.createElement("div", { key: i, style: { height: cellHeight, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px 24px", background: "var(--surface-card)", border: "1px solid var(--border-default)", borderRadius: "var(--radius-md)" } }, l.src ? /* @__PURE__ */ import_react35.default.createElement("img", { src: l.src, alt: l.name, style: { maxWidth: "100%", maxHeight: cellHeight * 0.5, objectFit: "contain" } }) : /* @__PURE__ */ import_react35.default.createElement("span", { style: { fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14, color: "var(--text-muted)", textAlign: "center" } }, l.name || "Logo đối tác"))));
  }

  // components/print/ProductTile.jsx
  var import_react36 = __toESM(require_react(), 1);
  function ProductTile({ image, category, name, description, specs = [], style, ...rest }) {
    return /* @__PURE__ */ import_react36.default.createElement("div", { style: { display: "flex", flexDirection: "column", background: "var(--surface-card)", border: "1px solid var(--border-default)", borderRadius: "var(--radius-md)", overflow: "hidden", ...style }, ...rest }, image ? /* @__PURE__ */ import_react36.default.createElement("img", { src: image, alt: "", style: { width: "100%", aspectRatio: "4 / 3", objectFit: "cover", display: "block" } }) : /* @__PURE__ */ import_react36.default.createElement("div", { style: { aspectRatio: "4 / 3", background: "var(--surface-subtle)" } }), /* @__PURE__ */ import_react36.default.createElement("div", { style: { padding: 20, display: "flex", flexDirection: "column", gap: 8, flex: 1 } }, category ? /* @__PURE__ */ import_react36.default.createElement("p", { style: { margin: 0, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-body)" } }, category) : null, /* @__PURE__ */ import_react36.default.createElement("p", { style: { margin: 0, fontFamily: "var(--font-display)", fontSize: 30, lineHeight: "var(--leading-display)", color: "var(--text-heading)", textTransform: "uppercase" } }, name), description ? /* @__PURE__ */ import_react36.default.createElement("p", { style: { margin: 0, fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55, color: "var(--text-body)" } }, description) : null, specs.length ? /* @__PURE__ */ import_react36.default.createElement("div", { style: { marginTop: "auto", paddingTop: 12, borderTop: "1px solid var(--border-subtle)", display: "grid", gap: 4 } }, specs.map(([k, v], i) => /* @__PURE__ */ import_react36.default.createElement("div", { key: i, style: { display: "flex", justifyContent: "space-between", gap: 12, fontFamily: "var(--font-body)", fontSize: 13 } }, /* @__PURE__ */ import_react36.default.createElement("span", { style: { color: "var(--text-body)" } }, k), /* @__PURE__ */ import_react36.default.createElement("span", { style: { fontWeight: 600, color: "var(--text-body)", fontVariantNumeric: "tabular-nums" } }, v)))) : null));
  }

  // components/print/QuoteBlock.jsx
  var import_react37 = __toESM(require_react(), 1);
  function QuoteBlock({ quote, name, role, size = 24, style, ...rest }) {
    return /* @__PURE__ */ import_react37.default.createElement("figure", { style: { margin: 0, display: "flex", flexDirection: "column", gap: size * 0.8, ...style }, ...rest }, /* @__PURE__ */ import_react37.default.createElement(Icon, { name: "quote", size: Math.round(size * 1.5), strokeWidth: 1.5, style: { color: "var(--color-primary)" } }), /* @__PURE__ */ import_react37.default.createElement("blockquote", { style: { margin: 0, fontFamily: "var(--font-body)", fontWeight: 500, fontSize: size, lineHeight: 1.5, color: "var(--text-body)", textWrap: "pretty" } }, quote), name ? /* @__PURE__ */ import_react37.default.createElement("figcaption", { style: { borderTop: "1px solid var(--border-subtle)", paddingTop: size * 0.6, fontFamily: "var(--font-body)", fontSize: size * 0.65, lineHeight: 1.4 } }, /* @__PURE__ */ import_react37.default.createElement("span", { style: { display: "block", fontWeight: 700, color: "var(--text-heading)" } }, name), role ? /* @__PURE__ */ import_react37.default.createElement("span", { style: { color: "var(--text-body)" } }, role) : null) : null);
  }

  // components/print/SpecTable.jsx
  var import_react38 = __toESM(require_react(), 1);
  function SpecTable({ columns = ["Chỉ tiêu", "Phương pháp", "Giá trị", "Đơn vị"], rows = [], numericColumns = [2], fontSize = 14, style, ...rest }) {
    const cell = { padding: "10px 12px", fontFamily: "var(--font-body)", fontSize, lineHeight: 1.4, textAlign: "left", verticalAlign: "top" };
    return /* @__PURE__ */ import_react38.default.createElement("table", { style: { width: "100%", borderCollapse: "collapse", ...style }, ...rest }, /* @__PURE__ */ import_react38.default.createElement("thead", null, /* @__PURE__ */ import_react38.default.createElement("tr", { style: { background: "var(--surface-subtle)" } }, columns.map((c, i) => /* @__PURE__ */ import_react38.default.createElement("th", { key: i, style: { ...cell, fontWeight: 700, color: "var(--text-heading)", textAlign: numericColumns.includes(i) ? "right" : "left" } }, c)))), /* @__PURE__ */ import_react38.default.createElement("tbody", null, rows.map((r, ri) => /* @__PURE__ */ import_react38.default.createElement("tr", { key: ri, style: { borderBottom: "1px solid var(--border-subtle)" } }, r.map((v, i) => /* @__PURE__ */ import_react38.default.createElement("td", { key: i, style: { ...cell, fontWeight: i === 0 ? 600 : 400, color: "var(--text-body)", textAlign: numericColumns.includes(i) ? "right" : "left", fontVariantNumeric: "tabular-nums" } }, v))))));
  }

  // components/print/StatBlock.jsx
  var import_react39 = __toESM(require_react(), 1);
  function StatBlock({ value, unit, label, size = 72, divider = true, style, ...rest }) {
    return /* @__PURE__ */ import_react39.default.createElement("div", { style: { borderTop: divider ? "1px solid var(--border-subtle)" : "none", paddingTop: divider ? size * 0.25 : 0, ...style }, ...rest }, /* @__PURE__ */ import_react39.default.createElement("p", { style: { margin: 0, fontFamily: "var(--font-data)", fontWeight: 700, fontSize: size, lineHeight: 1, color: "var(--text-heading)", fontVariantNumeric: "tabular-nums" } }, value, unit ? /* @__PURE__ */ import_react39.default.createElement("span", { style: { fontFamily: "var(--font-body)", fontWeight: 600, fontSize: size * 0.4, marginLeft: 6 } }, unit) : null), /* @__PURE__ */ import_react39.default.createElement("p", { style: { margin: size * 0.14 + "px 0 0", fontFamily: "var(--font-body)", fontSize: Math.max(13, size * 0.22), lineHeight: 1.4, color: "var(--text-body)" } }, label));
  }

  // components/print/TitleBlock.jsx
  var import_react40 = __toESM(require_react(), 1);
  var SIZES = {
    share: { title: 80, lead: 24, gap: 24 },
    slide: { title: 120, lead: 28, gap: 32 },
    a4: { title: 64, lead: 15, gap: 16 }
  };
  function TitleBlock({ title, lead, size = "share", align = "left", maxWidth, style, ...rest }) {
    const s = SIZES[size] || SIZES.share;
    return /* @__PURE__ */ import_react40.default.createElement("div", { style: { textAlign: align, maxWidth, ...style }, ...rest }, /* @__PURE__ */ import_react40.default.createElement("h2", { style: { margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, fontSize: s.title, lineHeight: "var(--leading-display)", color: "var(--text-heading)", textTransform: "uppercase", textWrap: "balance" } }, title), lead ? /* @__PURE__ */ import_react40.default.createElement("p", { style: { margin: s.gap + "px 0 0", fontFamily: "var(--font-body)", fontSize: s.lead, lineHeight: 1.5, color: "var(--text-body)", textWrap: "pretty" } }, lead) : null);
  }

  // components/surfaces/Accordion.jsx
  var import_react41 = __toESM(require_react(), 1);
  function Accordion({ items = [], allowMultiple = false, defaultOpen = [], className, ...rest }) {
    const uid = import_react41.default.useId();
    const [open, setOpen] = import_react41.default.useState(() => new Set(defaultOpen));
    const toggle = (id) => {
      setOpen((prev) => {
        const next = new Set(allowMultiple ? prev : []);
        if (prev.has(id)) next.delete(id);
        else next.add(id);
        return next;
      });
    };
    return /* @__PURE__ */ import_react41.default.createElement("div", { className: cx("vds-accordion", className), ...rest }, items.map((it) => {
      const isOpen = open.has(it.id);
      const triggerId = `${uid}-trigger-${it.id}`;
      const panelId = `${uid}-panel-${it.id}`;
      return /* @__PURE__ */ import_react41.default.createElement("div", { key: it.id, className: "vds-accordion__item" }, /* @__PURE__ */ import_react41.default.createElement(
        "button",
        {
          type: "button",
          id: triggerId,
          className: "vds-accordion__trigger",
          "aria-expanded": isOpen,
          "aria-controls": panelId,
          onClick: () => toggle(it.id)
        },
        /* @__PURE__ */ import_react41.default.createElement("span", { className: "vds-accordion__title" }, it.title),
        /* @__PURE__ */ import_react41.default.createElement(Icon, { name: "chevron-down", className: "vds-accordion__chevron" })
      ), /* @__PURE__ */ import_react41.default.createElement("div", { id: panelId, role: "region", "aria-labelledby": triggerId, hidden: !isOpen, className: "vds-accordion__panel" }, it.content));
    }));
  }

  // components/surfaces/Card.jsx
  var import_react42 = __toESM(require_react(), 1);
  function Card({ interactive = false, padding, accentTop = false, className, style, children, ...rest }) {
    return /* @__PURE__ */ import_react42.default.createElement("div", { className: cx("vds-card", interactive && "vds-card--interactive", className), style: { padding, ...style }, ...rest }, children);
  }

  // components/surfaces/FeatureCard.jsx
  var import_react43 = __toESM(require_react(), 1);
  function FeatureCard({ icon, title, children, tone = "blue", interactive = true, className, style, ...rest }) {
    const tones = {
      blue: { bg: "var(--color-primary-50)", fg: "var(--color-primary)" },
      green: { bg: "var(--color-accent)", fg: "var(--color-accent-contrast)" },
      neutral: { bg: "var(--surface-subtle)", fg: "var(--text-body)" }
    };
    const t = tones[tone] || tones.blue;
    return /* @__PURE__ */ import_react43.default.createElement(Card, { interactive, className, style, ...rest }, /* @__PURE__ */ import_react43.default.createElement("div", { style: { display: "inline-flex", alignItems: "center", justifyContent: "center", width: 56, height: 56, borderRadius: "var(--radius-md)", background: t.bg, color: t.fg, marginBottom: "var(--space-4)" } }, icon), /* @__PURE__ */ import_react43.default.createElement("h3", { style: { fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "var(--text-md)", color: "var(--text-body)", textTransform: "none", letterSpacing: 0, margin: "0 0 var(--space-2)" } }, title), /* @__PURE__ */ import_react43.default.createElement("p", { style: { margin: 0, color: "var(--text-body)", fontSize: "var(--text-base)", lineHeight: "var(--leading-relaxed)" } }, children));
  }

  // components/surfaces/ProductCard.jsx
  var import_react44 = __toESM(require_react(), 1);
  function ProductCard({
    name,
    supplier,
    category,
    specs = [],
    note,
    onRequest,
    className,
    style,
    ...rest
  }) {
    const [hover, setHover] = import_react44.default.useState(false);
    return /* @__PURE__ */ import_react44.default.createElement(
      "div",
      {
        className,
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        style: {
          position: "relative",
          display: "flex",
          flexDirection: "column",
          background: "var(--surface-card)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-lg)",
          boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
          transform: hover ? "translateY(-3px)" : "none",
          transition: "box-shadow var(--duration-base) var(--ease-out), transform var(--duration-base) var(--ease-out)",
          overflow: "hidden",
          ...style
        },
        ...rest
      },
      /* @__PURE__ */ import_react44.default.createElement("div", { style: { padding: "var(--space-5)", display: "flex", flexDirection: "column", gap: "var(--space-3)", flex: 1 } }, category ? /* @__PURE__ */ import_react44.default.createElement(
        "span",
        {
          style: {
            fontSize: "var(--text-xs)",
            fontWeight: "var(--weight-bold)",
            textTransform: "uppercase",
            letterSpacing: "var(--tracking-caps)",
            color: "var(--color-primary)"
          }
        },
        category
      ) : null, /* @__PURE__ */ import_react44.default.createElement("div", null, /* @__PURE__ */ import_react44.default.createElement(
        "h4",
        {
          style: {
            fontFamily: "var(--font-body)",
            fontWeight: "var(--weight-bold)",
            fontSize: "var(--text-md)",
            lineHeight: "var(--leading-snug)",
            color: "var(--text-body)",
            margin: 0
          }
        },
        name
      ), supplier ? /* @__PURE__ */ import_react44.default.createElement("p", { style: { margin: "3px 0 0", fontSize: "var(--text-sm)", color: "var(--text-muted)" } }, supplier) : null), specs.length ? /* @__PURE__ */ import_react44.default.createElement("dl", { style: { margin: 0, display: "flex", flexDirection: "column", gap: 5 } }, specs.map((s) => /* @__PURE__ */ import_react44.default.createElement("div", { key: s.label, style: { display: "flex", gap: "var(--space-3)", fontSize: "var(--text-sm)" } }, /* @__PURE__ */ import_react44.default.createElement("dt", { style: { color: "var(--text-muted)", flex: "none", minWidth: "42%" } }, s.label), /* @__PURE__ */ import_react44.default.createElement("dd", { style: { margin: 0, color: "var(--text-body)", fontWeight: "var(--weight-bold)", fontVariantNumeric: "tabular-nums" } }, s.value)))) : null, note ? /* @__PURE__ */ import_react44.default.createElement(
        "p",
        {
          style: {
            margin: "auto 0 0",
            paddingTop: "var(--space-3)",
            fontSize: "var(--text-xs)",
            lineHeight: "var(--leading-normal)",
            color: "var(--color-warning)",
            borderTop: "1px solid var(--border-subtle)"
          }
        },
        note
      ) : null),
      onRequest ? /* @__PURE__ */ import_react44.default.createElement(
        "button",
        {
          type: "button",
          className: "vds-productcard__cta",
          onClick: onRequest,
          style: {
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--space-2)",
            padding: "var(--space-4) var(--space-5)",
            background: hover ? "var(--surface-subtle)" : "transparent",
            border: "none",
            borderTop: "1px solid var(--border-subtle)",
            cursor: "pointer",
            fontFamily: "var(--font-body)",
            fontWeight: "var(--weight-bold)",
            fontSize: "var(--text-sm)",
            color: "var(--color-primary)",
            textAlign: "left",
            transition: "background var(--duration-fast) var(--ease-out)"
          }
        },
        "Yêu cầu báo giá",
        /* @__PURE__ */ import_react44.default.createElement(Icon, { name: "arrow-right", size: 16 })
      ) : null
    );
  }
  return __toCommonJS(index_exports);
})();

__ds_ns.Button = __vds.Button;
__ds_ns.IconButton = __vds.IconButton;
__ds_ns.ChatComposer = __vds.ChatComposer;
__ds_ns.ChatMessage = __vds.ChatMessage;
__ds_ns.FeedbackButtons = __vds.FeedbackButtons;
__ds_ns.SourceList = __vds.SourceList;
__ds_ns.Badge = __vds.Badge;
__ds_ns.CertificateBadge = __vds.CertificateBadge;
__ds_ns.LogoWall = __vds.LogoWall;
__ds_ns.Stat = __vds.Stat;
__ds_ns.Table = __vds.Table;
__ds_ns.Tag = __vds.Tag;
__ds_ns.Alert = __vds.Alert;
__ds_ns.Dialog = __vds.Dialog;
__ds_ns.EmptyState = __vds.EmptyState;
__ds_ns.Spinner = __vds.Spinner;
__ds_ns.Toast = __vds.Toast;
__ds_ns.ToastRegion = __vds.ToastRegion;
__ds_ns.Checkbox = __vds.Checkbox;
__ds_ns.FileDrop = __vds.FileDrop;
__ds_ns.Input = __vds.Input;
__ds_ns.Select = __vds.Select;
__ds_ns.Textarea = __vds.Textarea;
__ds_ns.AppShell = __vds.AppShell;
__ds_ns.NavList = __vds.NavList;
__ds_ns.Icon = __vds.Icon;
__ds_ns.Breadcrumb = __vds.Breadcrumb;
__ds_ns.Pagination = __vds.Pagination;
__ds_ns.Tabs = __vds.Tabs;
__ds_ns.BrandFooter = __vds.BrandFooter;
__ds_ns.CallToAction = __vds.CallToAction;
__ds_ns.CertificationMark = __vds.CertificationMark;
__ds_ns.ContactBlock = __vds.ContactBlock;
__ds_ns.HeadingLockup = __vds.HeadingLockup;
__ds_ns.NumberTile = __vds.NumberTile;
__ds_ns.PartnerLogos = __vds.PartnerLogos;
__ds_ns.ProductTile = __vds.ProductTile;
__ds_ns.QuoteBlock = __vds.QuoteBlock;
__ds_ns.SpecTable = __vds.SpecTable;
__ds_ns.StatBlock = __vds.StatBlock;
__ds_ns.TitleBlock = __vds.TitleBlock;
__ds_ns.Accordion = __vds.Accordion;
__ds_ns.Card = __vds.Card;
__ds_ns.FeatureCard = __vds.FeatureCard;
__ds_ns.ProductCard = __vds.ProductCard;
} catch (e) { __ds_ns.__errors.push({ path: "_ds_bundle.js", error: String((e && e.message) || e) }); }
})();
