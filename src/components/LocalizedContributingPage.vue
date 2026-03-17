<script setup lang="ts">
import type { Locale } from '~/composables/useI18n'

interface LocalizedPageContent {
  title: string
  metaTitle: string
  description: string
  intro: string
  points: string[]
  setupTitle: string
  setupBody: string
  cta: string
}

const { currentLocale } = useI18n()

const contentMap: Record<Locale, LocalizedPageContent> = {
  en: {
    title: 'Contributing',
    metaTitle: 'Contributing - Python Cheatsheet',
    description: 'Learn how to contribute new content, fixes, and improvements to the Python Cheatsheet project.',
    intro: 'The Python Cheatsheet is open source. Contributions are welcome for content updates, bug fixes, translations, and site improvements.',
    points: [
      'Open an issue if you want to report a bug or suggest an improvement.',
      'Submit pull requests for cheatsheet pages, modules, blog posts, or site fixes.',
      'Follow the repository guidelines and keep changes focused and easy to review.',
    ],
    setupTitle: 'Getting Started',
    setupBody: 'Fork the repository, clone your copy locally, install dependencies with pnpm, and run the development server before opening a pull request.',
    cta: 'Read the full contributing guide on GitHub.',
  },
  zh: {
    title: '参与贡献',
    metaTitle: '参与贡献 - Python 速查表',
    description: '了解如何为 Python 速查表贡献内容、修复问题和改进网站。',
    intro: 'Python 速查表是一个开源项目，欢迎提交内容更新、问题修复、翻译改进和站点优化。',
    points: [
      '如果您发现问题或有改进建议，请先提交 Issue。',
      '您可以通过 Pull Request 贡献速查表页面、模块文档、博客文章或站点修复。',
      '请尽量让改动范围清晰、便于评审，并遵循仓库中的贡献规范。',
    ],
    setupTitle: '开始之前',
    setupBody: '请先 fork 仓库，在本地克隆副本，使用 pnpm 安装依赖，并启动开发服务器后再提交 Pull Request。',
    cta: '在 GitHub 上查看完整贡献指南。',
  },
  es: {
    title: 'Contribuir',
    metaTitle: 'Contribuir - Python Cheatsheet',
    description: 'Aprende cómo contribuir con contenido, correcciones y mejoras al proyecto Python Cheatsheet.',
    intro: 'Python Cheatsheet es un proyecto de código abierto. Se aceptan contribuciones de contenido, correcciones de errores, traducciones y mejoras del sitio.',
    points: [
      'Abre un issue si quieres informar un error o proponer una mejora.',
      'Envía pull requests para páginas del cheatsheet, módulos, artículos del blog o correcciones del sitio.',
      'Mantén los cambios enfocados y fáciles de revisar siguiendo las guías del repositorio.',
    ],
    setupTitle: 'Primeros pasos',
    setupBody: 'Haz un fork del repositorio, clona tu copia en local, instala las dependencias con pnpm y ejecuta el servidor de desarrollo antes de abrir un pull request.',
    cta: 'Lee la guía completa de contribución en GitHub.',
  },
  fr: {
    title: 'Contribuer',
    metaTitle: 'Contribuer - Python Cheatsheet',
    description: 'Découvrez comment contribuer avec du contenu, des corrections et des améliorations au projet Python Cheatsheet.',
    intro: 'Python Cheatsheet est un projet open source. Les contributions de contenu, correctifs, traductions et améliorations du site sont les bienvenues.',
    points: [
      'Ouvrez une issue pour signaler un bug ou proposer une amélioration.',
      'Envoyez des pull requests pour les pages du cheatsheet, les modules, les articles de blog ou les corrections du site.',
      'Gardez des changements ciblés et faciles à relire en suivant les règles du dépôt.',
    ],
    setupTitle: 'Pour commencer',
    setupBody: 'Forkez le dépôt, clonez votre copie en local, installez les dépendances avec pnpm, puis lancez le serveur de développement avant d’ouvrir une pull request.',
    cta: 'Consultez le guide de contribution complet sur GitHub.',
  },
  de: {
    title: 'Mitwirken',
    metaTitle: 'Mitwirken - Python Cheatsheet',
    description: 'Erfahre, wie du Inhalte, Korrekturen und Verbesserungen zum Python-Cheatsheet-Projekt beitragen kannst.',
    intro: 'Das Python Cheatsheet ist ein Open-Source-Projekt. Beiträge zu Inhalten, Fehlerbehebungen, Übersetzungen und Verbesserungen der Website sind willkommen.',
    points: [
      'Erstelle ein Issue, wenn du einen Fehler melden oder eine Verbesserung vorschlagen möchtest.',
      'Sende Pull Requests für Cheatsheet-Seiten, Module, Blogartikel oder Website-Korrekturen.',
      'Halte Änderungen möglichst fokussiert und gut prüfbar und befolge die Richtlinien des Repositories.',
    ],
    setupTitle: 'Erste Schritte',
    setupBody: 'Forke das Repository, klone deine Kopie lokal, installiere die Abhängigkeiten mit pnpm und starte den Entwicklungsserver, bevor du einen Pull Request öffnest.',
    cta: 'Lies die vollständige Mitwirkungsanleitung auf GitHub.',
  },
  ja: {
    title: 'コントリビューション',
    metaTitle: 'コントリビューション - Python チートシート',
    description: 'Python チートシートへのコンテンツ追加、修正、改善への参加方法を紹介します。',
    intro: 'Python チートシートはオープンソースです。内容の更新、バグ修正、翻訳、サイト改善への貢献を歓迎します。',
    points: [
      '不具合報告や改善提案がある場合は、まず Issue を作成してください。',
      'チートシート、モジュール、ブログ記事、サイト修正は Pull Request で提出できます。',
      '変更内容はレビューしやすいように絞り込み、リポジトリのガイドラインに従ってください。',
    ],
    setupTitle: 'はじめに',
    setupBody: 'リポジトリを fork し、ローカルに clone して、pnpm で依存関係をインストールし、開発サーバーを起動してから Pull Request を作成してください。',
    cta: 'GitHub で完全なコントリビューションガイドを読む。',
  },
  ru: {
    title: 'Участие в проекте',
    metaTitle: 'Участие в проекте - Python Cheatsheet',
    description: 'Узнайте, как вносить контент, исправления и улучшения в проект Python Cheatsheet.',
    intro: 'Python Cheatsheet — это проект с открытым исходным кодом. Мы приветствуем обновления контента, исправления ошибок, переводы и улучшения сайта.',
    points: [
      'Создайте issue, если хотите сообщить об ошибке или предложить улучшение.',
      'Отправляйте pull request для страниц шпаргалки, модулей, статей блога или исправлений сайта.',
      'Старайтесь делать изменения точечными и удобными для ревью, соблюдая правила репозитория.',
    ],
    setupTitle: 'С чего начать',
    setupBody: 'Сделайте fork репозитория, клонируйте свою копию локально, установите зависимости через pnpm и запустите сервер разработки перед открытием pull request.',
    cta: 'Откройте полное руководство по участию на GitHub.',
  },
  ko: {
    title: '기여하기',
    metaTitle: '기여하기 - Python Cheatsheet',
    description: 'Python Cheatsheet 프로젝트에 콘텐츠, 수정 사항, 개선 사항을 기여하는 방법을 안내합니다.',
    intro: 'Python Cheatsheet는 오픈 소스 프로젝트입니다. 콘텐츠 업데이트, 버그 수정, 번역, 사이트 개선 기여를 환영합니다.',
    points: [
      '버그를 제보하거나 개선안을 제안하려면 먼저 이슈를 열어 주세요.',
      '치트시트 페이지, 모듈 문서, 블로그 글, 사이트 수정은 Pull Request로 제출할 수 있습니다.',
      '변경 범위는 리뷰하기 쉽게 유지하고 저장소 가이드를 따라 주세요.',
    ],
    setupTitle: '시작하기',
    setupBody: '저장소를 포크하고 로컬에 클론한 뒤 pnpm으로 의존성을 설치하고 개발 서버를 실행한 후 Pull Request를 열어 주세요.',
    cta: 'GitHub에서 전체 기여 가이드를 확인하세요.',
  },
  pt: {
    title: 'Contribuir',
    metaTitle: 'Contribuir - Python Cheatsheet',
    description: 'Saiba como contribuir com conteúdo, correções e melhorias para o projeto Python Cheatsheet.',
    intro: 'Python Cheatsheet é um projeto de código aberto. Contribuições com conteúdo, correções de bugs, traduções e melhorias do site são bem-vindas.',
    points: [
      'Abra uma issue se quiser relatar um bug ou sugerir uma melhoria.',
      'Envie pull requests para páginas do cheatsheet, módulos, posts do blog ou correções no site.',
      'Mantenha as mudanças objetivas e fáceis de revisar, seguindo as diretrizes do repositório.',
    ],
    setupTitle: 'Primeiros passos',
    setupBody: 'Faça um fork do repositório, clone sua cópia localmente, instale as dependências com pnpm e execute o servidor de desenvolvimento antes de abrir um pull request.',
    cta: 'Leia o guia completo de contribuição no GitHub.',
  },
}

const page = computed(() => contentMap[currentLocale.value])

useHead(() => ({
  title: page.value.metaTitle,
  meta: [
    { name: 'description', content: page.value.description, key: 'description' },
    { property: 'og:title', content: page.value.metaTitle, key: 'og:title' },
    { property: 'og:description', content: page.value.description, key: 'og:description' },
    { name: 'twitter:title', content: page.value.metaTitle, key: 'twitter:title' },
    { name: 'twitter:description', content: page.value.description, key: 'twitter:description' },
  ],
}))
</script>

<template>
  <div>
    <base-title :title="page.metaTitle" :description="page.description">
      {{ page.title }}
    </base-title>

    <p>{{ page.intro }}</p>

    <ul>
      <li v-for="point in page.points" :key="point">
        {{ point }}
      </li>
    </ul>

    <h2>{{ page.setupTitle }}</h2>
    <p>{{ page.setupBody }}</p>
    <p>
      <a
        href="https://github.com/labex-labs/python-cheatsheet/blob/master/src/pages/contributing.md"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ page.cta }}
      </a>
    </p>
  </div>
</template>
