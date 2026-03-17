import { SUPPORTED_LOCALES, useI18n } from './useI18n'

interface ArticleMeta {
  title?: string
  description?: string
  date?: string
  updated?: string
  tags?: string
  socialImage?: string
}

function getBaseUrl(): string {
  const envBaseUrl = import.meta.env.VITE_BASE_URL || 'labex.io/pythoncheatsheet'
  const isDev = import.meta.env.DEV || import.meta.env.MODE === 'development'

  const isLocalhost = typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1' ||
      window.location.hostname.startsWith('192.168.') ||
      window.location.hostname.includes('.local'))

  const isPreviewDomain = envBaseUrl.includes('next.') ||
    envBaseUrl.includes('staging.') ||
    envBaseUrl.includes('preview.')

  if (isDev || isLocalhost || isPreviewDomain) {
    return 'labex.io/pythoncheatsheet'
  }

  return envBaseUrl.startsWith('http')
    ? envBaseUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : envBaseUrl.replace(/\/$/, '')
}

export function useMeta(articleMeta?: ArticleMeta) {
  const route = useRoute()
  const { t, currentLocale } = useI18n()
  const base_url = getBaseUrl()

  const buildLocalizedPath = (basePath: string, locale: string): string => {
    if (basePath === '/') {
      return locale === 'en' ? '/' : `/${locale}`
    }

    return locale === 'en' ? basePath : `/${locale}${basePath}`
  }

  const defaultDescription = computed(() => t('meta.description'))
  const defaultCardImage =
    'https://raw.githubusercontent.com/labex-labs/python-cheatsheet/master/public/screenshots/dark.png'
  const themeColor = computed(() => (isDark.value ? '#1f2937' : '#ffffff'))
  const url = computed(() => `https://${base_url}${route.path}`)

  const isArticle = computed(() => {
    return !!(
      articleMeta?.title ||
      route.path.includes('/blog/') ||
      route.meta?.layout === 'article'
    )
  })

  const isHomePage = computed(() => {
    return route.path === '/' || route.path === `/${currentLocale.value}`
  })

  const pageTitle = computed(() => {
    return articleMeta?.title || t('meta.title')
  })

  const pageDescription = computed(() => {
    return articleMeta?.description || defaultDescription.value
  })

  const pageImage = computed(() => {
    if (articleMeta?.socialImage) {
      return articleMeta.socialImage.startsWith('http')
        ? articleMeta.socialImage
        : `https://${base_url}${articleMeta.socialImage}`
    }
    return defaultCardImage
  })

  const ogType = computed(() => {
    if (isArticle.value) {
      return 'article'
    }
    if (isHomePage.value) {
      return 'website'
    }
    return 'website'
  })

  const twitterCardType = computed(() => {
    return pageImage.value && pageImage.value !== defaultCardImage
      ? 'summary_large_image'
      : 'summary'
  })

  const localeCode = computed(() => {
    const localeMap: Record<string, string> = {
      en: 'en_US',
      zh: 'zh_CN',
      es: 'es_ES',
      fr: 'fr_FR',
      de: 'de_DE',
      ja: 'ja_JP',
      ru: 'ru_RU',
      ko: 'ko_KR',
      pt: 'pt_BR',
    }
    return localeMap[currentLocale.value] || 'en_US'
  })

  // Get base path (remove locale prefix)
  const getBasePath = (path: string): string => {
    const segments = path.split('/').filter(Boolean)
    if (segments.length > 0 && SUPPORTED_LOCALES.includes(segments[0] as typeof SUPPORTED_LOCALES[number])) {
      segments.shift()
      return segments.length > 0 ? '/' + segments.join('/') : '/'
    }
    return path
  }

  // Generate hreflang links
  const generateHreflangLinks = computed(() => {
    const basePath = getBasePath(route.path)
    const links = []

    // Generate hreflang link for each supported locale
    for (const locale of SUPPORTED_LOCALES) {
      const localePath = buildLocalizedPath(basePath, locale)
      const localeUrl = `https://${base_url}${localePath}`
      links.push({
        rel: 'alternate',
        hreflang: locale,
        href: localeUrl,
      })
    }

    // Add x-default (points to default language version)
    const defaultPath = basePath
    const defaultUrl = `https://${base_url}${defaultPath}`
    links.push({
      rel: 'alternate',
      hreflang: 'x-default',
      href: defaultUrl,
    })

    return links
  })

  const keywords = computed(() => {
    if (articleMeta?.tags) {
      if (typeof articleMeta.tags === 'string') {
        return articleMeta.tags
      }
      if (Array.isArray(articleMeta.tags)) {
        return (articleMeta.tags as string[]).join(', ')
      }
      return String(articleMeta.tags)
    }
    return t('meta.keywords')
  })

  const parseDate = (dateStr: string | undefined): string | undefined => {
    if (!dateStr) return undefined
    try {
      const date = new Date(dateStr)
      if (isNaN(date.getTime())) return undefined
      return date.toISOString()
    } catch {
      return undefined
    }
  }

  const metaTags = computed(() => {
    const tags: any[] = [
      { name: 'theme-color', content: themeColor.value },
      { name: 'description', content: pageDescription.value },
      { name: 'language', content: currentLocale.value },
      { 'http-equiv': 'content-language', content: currentLocale.value },
      { name: 'author', content: 'Python Cheatsheet' },
      { name: 'keywords', content: keywords.value },
      { property: 'og:title', content: pageTitle.value },
      { property: 'og:description', content: pageDescription.value },
      { property: 'og:url', content: url.value },
      { property: 'og:type', content: ogType.value },
      { property: 'og:image', content: pageImage.value },
      { property: 'og:site_name', content: 'Python Cheatsheet' },
      { property: 'og:locale', content: localeCode.value },
      { name: 'twitter:title', content: pageTitle.value },
      { name: 'twitter:description', content: pageDescription.value },
      { name: 'twitter:image', content: pageImage.value },
      { name: 'twitter:card', content: twitterCardType.value },
      { name: 'twitter:site', content: '@labex_io' },
    ]

    if (isArticle.value && articleMeta) {
      const publishedDate = parseDate(articleMeta.date)
      if (publishedDate) {
        tags.push({ property: 'article:published_time', content: publishedDate })
      }
      const modifiedDate = parseDate(articleMeta.updated)
      if (modifiedDate) {
        tags.push({ property: 'article:modified_time', content: modifiedDate })
      }
      if (articleMeta.tags) {
        const tagsValue = typeof articleMeta.tags === 'string'
          ? articleMeta.tags
          : Array.isArray(articleMeta.tags)
            ? (articleMeta.tags as string[]).join(',')
            : String(articleMeta.tags)
        const tagList = tagsValue.split(',').map((tag: string) => tag.trim()).filter(Boolean)
        tagList.forEach((tag: string) => {
          tags.push({ property: 'article:tag', content: tag })
        })
      }
      tags.push({ property: 'article:author', content: 'Python Cheatsheet' })
    }

    return tags
  })

  const meta = computed(() => ({
    title: pageTitle.value,
    description: pageDescription.value,
    htmlAttrs: {
      lang: currentLocale.value,
    },
    meta: metaTags.value,
    link: [
      { rel: 'canonical', href: url.value },
      ...generateHreflangLinks.value,
    ],
  }))

  return { meta, description: pageDescription }
}
