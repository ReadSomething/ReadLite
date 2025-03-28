/**
 * Translations and Font Configurations for ReadLite
 * Following ISO 639-1 language codes for standardization
 * 
 * This file is the single source of truth for:
 * 1. UI translations in multiple languages
 * 2. Font configurations and options
 * 3. Layout and display options
 */

// Define the structure of translations for type safety
export interface Translations {
  [key: string]: string;
}

// Define all available translations by language code
export const translations: Record<string, Translations> = {
  // English (en) - Default language
  en: {
    // General UI
    displaySettings: "Display Settings",
    readingTheme: "Theme",
    light: "Light",
    sepia: "Sepia",
    dark: "Dark",
    paper: "Paper",
    fontSize: "Font Size",
    font: "Font",
    pageWidth: "Page Width",
    narrow: "Narrow",
    standard: "Standard",
    wide: "Wide",
    lineSpacing: "Line Spacing",
    tight: "Tight",
    normal: "Normal",
    relaxed: "Relaxed",
    system: "System",
    currentSize: "Current Size",
    currentFont: "Current Font",
    
    // Text alignment
    textAlignment: "Text Alignment",
    left: "Left",
    right: "Right",
    center: "Center",
    justify: "Justify",
    
    // Download options
    download: "Download",
    downloadMarkdown: "Markdown",
    
    // Font categories
    recommendedForChinese: "For Chinese",
    recommendedForEnglish: "For English",
    allFonts: "All Fonts",
    chineseFonts: "Chinese Fonts",
    englishFonts: "English Fonts",
    
    // Detection and status
    detected: "Detected",
    chinese: "Chinese",
    english: "English",
    theme: "Theme",
    
    // Messages
    extractingArticle: "Extracting article...",
    couldNotExtract: "Could not extract article content",
    closeReaderMode: "Close Reader Mode",
    close: "Close",

    // Font descriptions - English
    fontGeorgia: "Classic web serif font",
    fontPalatino: "Classic elegant serif",
    fontBookerly: "Kindle default reading font",
    fontTimesNewRoman: "Traditional classic serif",
    fontArial: "Common sans-serif font",

    // Font descriptions - Chinese fonts in English
    fontSourceHanSans: "Clean modern sans-serif",
    fontSourceHanSerif: "Professional Chinese serif",
    fontPingFang: "Apple default Chinese font",
    fontHiraginoSansGB: "Clear modern sans-serif",
    fontMicrosoftYaHei: "Windows default Chinese font",

    // UI translations
    // Header
    refreshLanguage: "Sync browser language"
  },

  // Chinese (zh)
  zh: {
    // General UI
    displaySettings: "显示设置",
    readingTheme: "阅读主题",
    light: "明亮",
    sepia: "护眼",
    dark: "暗黑",
    paper: "纸张",
    fontSize: "字号",
    font: "字体",
    pageWidth: "页面宽度",
    narrow: "窄",
    standard: "标准",
    wide: "宽",
    lineSpacing: "行间距",
    tight: "紧凑",
    normal: "标准",
    relaxed: "宽松",
    system: "系统",
    currentSize: "当前字号",
    currentFont: "当前字体",
    
    // Text alignment
    textAlignment: "文本对齐",
    left: "左对齐",
    right: "右对齐",
    center: "居中",
    justify: "两端对齐",
    
    // Download options
    download: "下载",
    downloadMarkdown: "Markdown",
    
    // Font categories
    recommendedForChinese: "推荐中文",
    recommendedForEnglish: "推荐英文",
    allFonts: "所有字体",
    chineseFonts: "中文字体",
    englishFonts: "英文字体",
    
    // Detection and status
    detected: "已检测",
    chinese: "中文",
    english: "英文",
    theme: "主题",
    
    // Messages
    extractingArticle: "提取文章中...",
    couldNotExtract: "无法提取文章内容",
    closeReaderMode: "关闭阅读模式",
    close: "关闭",

    // Font descriptions - English fonts in Chinese
    fontGeorgia: "经典网页衬线字体",
    fontPalatino: "经典优雅的衬线字体",
    fontBookerly: "Kindle默认阅读字体",
    fontTimesNewRoman: "传统经典衬线字体",
    fontArial: "通用无衬线字体",

    // Font descriptions - Chinese fonts in Chinese
    fontSourceHanSans: "现代清晰的无衬线字体",
    fontSourceHanSerif: "专业中文衬线字体",
    fontPingFang: "苹果设备默认中文字体",
    fontHiraginoSansGB: "清晰的现代无衬线字体",
    fontMicrosoftYaHei: "Windows系统默认中文字体",

    // UI translations
    // Header
    refreshLanguage: "同步浏览器语言"
  },

  // Japanese (ja) - Sample, add more translations as needed
  ja: {
    displaySettings: "表示設定",
    readingTheme: "テーマ",
    light: "ライト",
    dark: "ダーク",
    sepia: "セピア",
    paper: "ペーパー",
    fontSize: "フォントサイズ",
    font: "フォント",
    // Add more Japanese translations as needed
  },

  // Korean (ko) - Sample, add more translations as needed
  ko: {
    displaySettings: "디스플레이 설정",
    readingTheme: "테마",
    light: "라이트",
    dark: "다크",
    // Add more Korean translations as needed
  }
};

// Font naming that includes both language options
export interface FontLabel {
  zh: string;
  en: string;
}

/**
 * Font option structure
 * Core interface for all font configurations in the application
 * This replaces the older FontDisplayConfig interface and centralizes all font management
 */
export interface FontOption {
  value: string;           // CSS font-family value
  label: FontLabel;        // Localized display names in different languages
  compatibleLanguages: string[]; // Languages this font supports, first one is primary
  available?: boolean;     // Whether this font is available (default: true)
}

/**
 * Font options with multilingual labels
 * This is the primary source of font configurations used throughout the application
 * All font-related UI elements should reference this array
 */
export const fontOptions: FontOption[] = [
  // Chinese fonts - 优化和扩展中文字体选项
  { 
    value: '"Source Han Sans SC", "Noto Sans SC", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif',
    label: { zh: '思源黑体', en: 'Source Han Sans' },
    compatibleLanguages: ['zh', 'ja', 'ko', 'cmn', 'wuu', 'yue'],
    available: true
  },
  { 
    value: '"Source Han Serif SC", "Noto Serif SC", serif',
    label: { zh: '思源宋体', en: 'Source Han Serif' },
    compatibleLanguages: ['zh', 'ja', 'ko', 'cmn', 'wuu', 'yue'],
    available: true
  },
  { 
    value: '"PingFang SC", "苹方", "-apple-system", sans-serif',
    label: { zh: '苹方', en: 'PingFang' },
    compatibleLanguages: ['zh', 'cmn', 'wuu', 'yue'],
    available: true
  },
  { 
    value: '"Hiragino Sans GB", "冬青黑体", sans-serif',
    label: { zh: '冬青黑体', en: 'Hiragino Sans GB' },
    compatibleLanguages: ['zh', 'ja', 'cmn', 'wuu', 'yue'],
    available: true
  },
  { 
    value: '"Microsoft YaHei", "微软雅黑", sans-serif',
    label: { zh: '微软雅黑', en: 'Microsoft YaHei' },
    compatibleLanguages: ['zh', 'cmn', 'wuu', 'yue'],
    available: true
  },
  // 添加新的中文字体选项
  { 
    value: '"Songti SC", "STSong", serif',
    label: { zh: '宋体', en: 'Songti' },
    compatibleLanguages: ['zh', 'cmn', 'wuu', 'yue'],
    available: true
  },
  
  // English fonts - optimized and expanded
  { 
    value: '"Georgia", serif',
    label: { zh: 'Georgia', en: 'Georgia' },
    compatibleLanguages: ['en', 'fr', 'de', 'es', 'it', 'ru'],
    available: true
  },
  { 
    value: '"Palatino", "Palatino Linotype", serif',
    label: { zh: 'Palatino', en: 'Palatino' },
    compatibleLanguages: ['en', 'fr', 'de', 'es', 'it', 'ru'],
    available: true
  },
  { 
    value: '"Bookerly", Georgia, serif',
    label: { zh: 'Bookerly', en: 'Bookerly' },
    compatibleLanguages: ['en', 'fr', 'de', 'es', 'it', 'ru'],
    available: true
  },
  { 
    value: '"Times New Roman", "Times", serif',
    label: { zh: 'Times New Roman', en: 'Times New Roman' },
    compatibleLanguages: ['en', 'fr', 'de', 'es', 'it', 'ru'],
    available: true
  },
  { 
    value: '"Arial", "Helvetica", sans-serif',
    label: { zh: 'Arial', en: 'Arial' },
    compatibleLanguages: ['en', 'fr', 'de', 'es', 'it', 'ru'],
    available: true
  },
  { 
    value: '"Literata", Georgia, serif',
    label: { zh: 'Literata', en: 'Literata' },
    compatibleLanguages: ['en', 'fr', 'de', 'es', 'it', 'ru'],
    available: true
  },
  { 
    value: '"Merriweather", Georgia, serif',
    label: { zh: 'Merriweather', en: 'Merriweather' },
    compatibleLanguages: ['en', 'fr', 'de', 'es', 'it', 'ru'],
    available: true
  }
];

// Width options with visual representation
export const widthOptions = [
  { value: 580, label: { zh: '窄', en: 'Narrow' }, widthClass: "narrow" },
  { value: 700, label: { zh: '标准', en: 'Standard' }, widthClass: "standard" },
  { value: 820, label: { zh: '宽', en: 'Wide' }, widthClass: "wide" },
];

// Spacing options with visual representation
export const spacingOptions = [
  { value: 'tight' as const, label: { zh: '紧凑', en: 'Tight' }, lineHeight: 1.4, spacingClass: "tight" },
  { value: 'normal' as const, label: { zh: '标准', en: 'Normal' }, lineHeight: 1.6, spacingClass: "normal" },
  { value: 'relaxed' as const, label: { zh: '宽松', en: 'Relaxed' }, lineHeight: 1.8, spacingClass: "relaxed" },
]; 

// Define text alignment options
export const alignmentOptions = [
  { label: { en: "Left", zh: "左对齐" }, value: "left" },
  { label: { en: "Justify", zh: "两端对齐" }, value: "justify" },
  { label: { en: "Center", zh: "居中" }, value: "center" },
  { label: { en: "Right", zh: "右对齐" }, value: "right" }
];