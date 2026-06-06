# 古民家茶寮 結庵 — LP（ポートフォリオ案件）

架空ブランド「結庵」のランディングページ。デザインシステム設計 → Pencilモック → 静的サイト実装までを一貫して制作したポートフォリオ作品です。

## 公開URL

> デプロイ後にここを更新してください。

## ローカルプレビュー

```bash
# Python
python3 -m http.server 8080

# または npx
npx serve .
```

ブラウザで `http://localhost:8080` を開く。

---

## 70点公開プラン（今回やること）

**方針**: 完璧より「見せられる完成」を優先。公開後に100点へ。

| # | タスク | 状態 | 70点での割り切り |
|---|--------|------|------------------|
| 1 | 静的サイト実装（8セクション） | ✅ | PencilデザインをHTML/CSSで再現 |
| 2 | レスポンシブ対応 | ✅ | 640/768/1024px ブレイクポイント |
| 3 | ナビ・スムーススクロール | ✅ | モバイルはハンバーガーメニュー |
| 4 | 写真 | ✅ | Unsplashプレースホルダー（後で差し替え） |
| 5 | 基本SEO（title/description/OG） | ✅ | 最低限のメタタグ |
| 6 | デプロイ設定 | ✅ | Vercel / Netlify / GitHub Pages 対応 |
| 7 | アクセスマップ | ✅ | CSS簡易図（本物の地図は後回し） |
| 8 | 予約導線 | ✅ | ボタンは `#` / `tel:` リンク（Table連携は後回し） |

### 70点で意図的に省略したもの

- タイムラインの線画アイコン
- スクロールアニメーション
- 実写真・ロゴの制作
- Google Maps 埋め込み
- 予約システム（TableCheck等）連携
- Lighthouse 100点チューニング
- アクセシビリティ監査

---

## 100点化ロードマップ（公開後）

公開してから順に着手する改善リスト。

### Phase A — ビジュアル品質（+15点）

- [ ] 実写またはAI生成画像を吉野・茶寮テーマに統一して差し替え
- [ ] 手書き風ロゴ・ファビコンの制作
- [ ] タイムラインに Lucide 線画アイコン追加
- [ ] スクロールフェードイン（800ms、ease-out）を控えめに追加
- [ ] 写真ホバー scale 1.03 効果

### Phase B — 機能・信頼性（+10点）

- [ ] Google Maps または静的ルートマップ画像に差し替え
- [ ] 予約ボタン → TableCheck / Hot Pepper 等へのリンク
- [ ] Instagram リンク設定
- [ ] 404 / リダイレクト設定
- [ ] フォーム or 問い合わせ導線（必要なら）

### Phase C — 技術・SEO（+5点）

- [ ] Lighthouse 90+（画像WebP化、lazy loading）
- [ ] OGP画像の制作
- [ ] 構造化データ（LocalBusiness）
- [ ] アクセシビリティ（コントラスト、キーボード操作、aria）
- [ ] カスタムドメイン設定

---

## ファイル構成

```
musubian-lp/
├── index.html          # LP本体
├── css/style.css       # スタイル
├── js/main.js          # ナビ・スクロール
├── images/             # 生成画像（将来差し替え用）
├── musubian-lp.pen     # Pencilデザインファイル
├── DESIGN_SYSTEM.md    # デザインルール
├── LP_STRUCTURE.md     # 構成・コピー原稿
└── README.md           # このファイル
```

## デプロイ（Vercel 推奨）

1. GitHub にリポジトリを push
2. [vercel.com](https://vercel.com) で Import
3. Framework Preset: **Other**（静的サイト）
4. Deploy

Netlify / GitHub Pages でも可（設定ファイル同梱）。

---

## クレジット

- 写真: [Unsplash](https://unsplash.com)（各画像のクレジットは HTML コメント参照）
- フォント: Google Fonts（Noto Serif JP, Noto Sans JP, Cormorant Garamond, Inter）
