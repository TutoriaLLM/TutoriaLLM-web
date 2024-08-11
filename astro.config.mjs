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
      defaultLocale: "en",
      locales: {
        // 英語のドキュメントは`src/content/docs/en/`に置きます。
        en: {
          label: "English",
        },
        // 日本語のドキュメントは`src/content/docs/ja/`に置きます。
        ja: {
          label: "日本語",
          lang: "ja",
        },
      },
      social: {
        github: "https://github.com/tutoriallm/",
      },
      sidebar: [
        {
          label: "Introduction",
          translations: {
            ja: "はじめに",
          },
          autogenerate: {
            directory: "introduction",
          },
        },
        {
          label: "User Guide",
          translations: {
            ja: "ユーザーガイド",
          },
          autogenerate: {
            directory: "userguides",
          },
        },
        {
          label: "Editor Guide",
          translations: {
            ja: "エディターガイド",
          },
          autogenerate: {
            directory: "editorguides",
          },
        },
      ],
    }),
  ],
});
