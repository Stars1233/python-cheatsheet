<script setup lang="ts">
import type { Locale } from '~/composables/useI18n'

interface LocalizedPageContent {
  title: string
  metaTitle: string
  description: string
  intro: string
  summaryTitle: string
  entries: string[]
  cta: string
}

const { currentLocale } = useI18n()

const contentMap: Record<Locale, LocalizedPageContent> = {
  en: {
    title: 'Changelog',
    metaTitle: 'Changelog - Python Cheatsheet',
    description: 'See the latest product, content, and documentation updates for Python Cheatsheet.',
    intro: 'This page summarizes recent updates to the Python Cheatsheet project. The full historical changelog remains available in the main English document.',
    summaryTitle: 'Recent Highlights',
    entries: [
      'Interactive LabEx integration, PDF downloads, and multilingual support are now part of the site.',
      'New blog posts, module references, and built-in function coverage continue to be added.',
      'Navigation, quiz tracking, and content quality updates are released regularly.',
    ],
    cta: 'Open the complete changelog on GitHub.',
  },
  zh: {
    title: '更新日志',
    metaTitle: '更新日志 - Python 速查表',
    description: '查看 Python 速查表最近的产品、内容和文档更新。',
    intro: '此页面概述 Python 速查表近期的重要更新，完整的历史更新记录仍保留在主英文更新日志中。',
    summaryTitle: '近期亮点',
    entries: [
      '站点已整合 LabEx 交互实验、PDF 下载和多语言支持。',
      '博客文章、模块参考和内置函数内容仍在持续扩充。',
      '导航、测验追踪和内容质量会持续进行改进和发布。',
    ],
    cta: '在 GitHub 上查看完整更新日志。',
  },
  es: {
    title: 'Registro de cambios',
    metaTitle: 'Registro de cambios - Python Cheatsheet',
    description: 'Consulta las actualizaciones recientes del producto, contenido y documentación de Python Cheatsheet.',
    intro: 'Esta página resume las actualizaciones recientes de Python Cheatsheet. El historial completo sigue disponible en el changelog principal en inglés.',
    summaryTitle: 'Novedades recientes',
    entries: [
      'El sitio ahora incluye integración con LabEx, descargas en PDF y soporte multilingüe.',
      'Se siguen publicando nuevos artículos del blog, referencias de módulos y funciones integradas.',
      'La navegación, el seguimiento de cuestionarios y la calidad del contenido se actualizan con regularidad.',
    ],
    cta: 'Abrir el changelog completo en GitHub.',
  },
  fr: {
    title: 'Journal des modifications',
    metaTitle: 'Journal des modifications - Python Cheatsheet',
    description: 'Consultez les dernières mises à jour produit, contenu et documentation de Python Cheatsheet.',
    intro: 'Cette page résume les mises à jour récentes de Python Cheatsheet. L’historique complet reste disponible dans le changelog principal en anglais.',
    summaryTitle: 'Points récents',
    entries: [
      'Le site propose désormais l’intégration LabEx, les téléchargements PDF et le support multilingue.',
      'De nouveaux articles de blog, références de modules et contenus sur les fonctions intégrées sont ajoutés régulièrement.',
      'La navigation, le suivi des quiz et la qualité du contenu continuent d’être améliorés.',
    ],
    cta: 'Ouvrir le changelog complet sur GitHub.',
  },
  de: {
    title: 'Änderungsprotokoll',
    metaTitle: 'Änderungsprotokoll - Python Cheatsheet',
    description: 'Sieh dir die neuesten Produkt-, Inhalts- und Dokumentationsupdates für das Python Cheatsheet an.',
    intro: 'Diese Seite fasst die jüngsten Updates des Python Cheatsheets zusammen. Das vollständige Änderungsprotokoll bleibt im englischen Hauptdokument verfügbar.',
    summaryTitle: 'Aktuelle Highlights',
    entries: [
      'Die Website bietet jetzt LabEx-Integration, PDF-Downloads und mehrsprachige Unterstützung.',
      'Neue Blogbeiträge, Modulreferenzen und Inhalte zu eingebauten Funktionen werden laufend ergänzt.',
      'Navigation, Quiz-Tracking und Inhaltsqualität werden regelmäßig verbessert.',
    ],
    cta: 'Vollständiges Änderungsprotokoll auf GitHub öffnen.',
  },
  ja: {
    title: '更新履歴',
    metaTitle: '更新履歴 - Python チートシート',
    description: 'Python チートシートの最新の製品、コンテンツ、ドキュメント更新を確認できます。',
    intro: 'このページでは Python チートシートの最近の更新を要約しています。完全な履歴は英語版のメインチェンジログで引き続き公開しています。',
    summaryTitle: '最近のハイライト',
    entries: [
      'サイトに LabEx のインタラクティブラボ、PDF ダウンロード、多言語対応が追加されました。',
      'ブログ記事、モジュール参照、組み込み関数コンテンツが継続的に追加されています。',
      'ナビゲーション、クイズ追跡、コンテンツ品質の改善を継続的にリリースしています。',
    ],
    cta: 'GitHub で完全な更新履歴を開く。',
  },
  ru: {
    title: 'Журнал изменений',
    metaTitle: 'Журнал изменений - Python Cheatsheet',
    description: 'Смотрите последние обновления продукта, контента и документации Python Cheatsheet.',
    intro: 'На этой странице собраны недавние обновления Python Cheatsheet. Полная история изменений по-прежнему доступна в основном английском changelog.',
    summaryTitle: 'Недавние обновления',
    entries: [
      'На сайте появились интеграция с LabEx, загрузка PDF и многоязычная поддержка.',
      'Продолжают добавляться новые статьи блога, справочники по модулям и материалы по встроенным функциям.',
      'Навигация, отслеживание квизов и качество контента регулярно улучшаются.',
    ],
    cta: 'Открыть полный журнал изменений на GitHub.',
  },
  ko: {
    title: '변경 로그',
    metaTitle: '변경 로그 - Python Cheatsheet',
    description: 'Python Cheatsheet의 최신 제품, 콘텐츠, 문서 업데이트를 확인하세요.',
    intro: '이 페이지는 Python Cheatsheet의 최근 업데이트를 요약합니다. 전체 변경 이력은 영어 메인 변경 로그에서 계속 확인할 수 있습니다.',
    summaryTitle: '최근 주요 변경 사항',
    entries: [
      '사이트에 LabEx 인터랙티브 랩, PDF 다운로드, 다국어 지원이 추가되었습니다.',
      '새 블로그 글, 모듈 레퍼런스, 내장 함수 콘텐츠가 계속 추가되고 있습니다.',
      '내비게이션, 퀴즈 추적, 콘텐츠 품질 개선이 정기적으로 배포되고 있습니다.',
    ],
    cta: 'GitHub에서 전체 변경 로그 보기.',
  },
  pt: {
    title: 'Registro de alterações',
    metaTitle: 'Registro de alterações - Python Cheatsheet',
    description: 'Veja as atualizações mais recentes de produto, conteúdo e documentação do Python Cheatsheet.',
    intro: 'Esta página resume as atualizações recentes do Python Cheatsheet. O histórico completo continua disponível no changelog principal em inglês.',
    summaryTitle: 'Destaques recentes',
    entries: [
      'O site agora inclui integração com LabEx, downloads em PDF e suporte multilíngue.',
      'Novos posts de blog, referências de módulos e conteúdos sobre funções embutidas continuam sendo adicionados.',
      'Navegação, rastreamento de quizzes e qualidade do conteúdo recebem melhorias frequentes.',
    ],
    cta: 'Abrir o changelog completo no GitHub.',
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

    <h2>{{ page.summaryTitle }}</h2>
    <ul>
      <li v-for="entry in page.entries" :key="entry">
        {{ entry }}
      </li>
    </ul>

    <p>
      <a
        href="https://github.com/labex-labs/python-cheatsheet/blob/master/src/pages/changelog.md"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ page.cta }}
      </a>
    </p>
  </div>
</template>
