import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "TutoriaLLM",
      customCss: [
        // カスタムCSSファイルへの相対パス
        "./src/customColour.css",
        "./src/styles.css",
        "./src/fonts/IBMPlexMono-ExtraLightItalic.css",
      ],
      components: {
        SiteTitle: "./src/components/SiteTitle.astro",
      },
      // このサイトのデフォルト言語として英語を設定します。
      defaultLocale: "ja",
      locales: {
        // 日本語のドキュメントは`src/content/docs/ja`に置きます。
        ja: {
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
          label: "開発者ガイド",
          translations: {
            en: "Developer Guide",
          },
          autogenerate: {
            directory: "developer",
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
