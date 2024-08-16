import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "TutoriaLLM Docs",
      customCss: [
        // カスタムCSSファイルへの相対パス
        "./src/customColour.css",
      ],
      // このサイトのデフォルト言語として英語を設定します。
      defaultLocale: "root",
      locales: {
        // 日本語のドキュメントは`src/content/docs/ja/`に置きます。
        root: {
          label: "日本語",
          lang: "ja",
        },
        //英語のドキュメントは`src/content/docs/en/`に置きます。
        en: {
          label: "English",
          lang: "en",
        },
      },
      social: {
        github: "https://github.com/tutoriallm/",
      },
      sidebar: [
        {
          label: "はじめに",
          translations: {
            en: "Introduction",
          },
          autogenerate: {
            directory: "introduction",
          },
        },
        {
          label: "ユーザーガイド",
          translations: {
            en: "User Guide",
          },
          autogenerate: {
            directory: "userguides",
          },
          badge: "ページ作成中",
        },
        {
          label: "エディターガイド",
          translations: {
            en: "Editor Guide",
          },
          autogenerate: {
            directory: "editorguides",
            collapsed: true,
          },
        },
        {
          label: "ユーザーテスト",
          translations: {
            en: "User Testing",
          },
          autogenerate: {
            directory: "user-test",
          },
        },
      ],
    }),
  ],
});
