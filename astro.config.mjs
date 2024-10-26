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
      // このサイトのデフォルト言語として日本語を設定します。
      defaultLocale: "root",
      locales: {
        // 日本語のドキュメントは`src/content/docs/`に置きます。
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
          label: "開発者向け",
          translations: {
            en: "Developer Guide",
          },
          autogenerate: {
            directory: "developer",
            collapsed: true,
          },
        },
        {
          label: "リファレンス",
          translations: {
            en: "Reference",
          },
          autogenerate: {
            directory: "reference",
          },
        },
      ],
    }),
  ],
});
