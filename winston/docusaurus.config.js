// @ts-check
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '添哥的AI场景实战',
  tagline: 'AI × 供应链 × 电商 × 教育 —— 把 AI 用进真实工作流',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://wstever.github.io',
  baseUrl: '/winston/',

  organizationName: 'wstever',
  projectName: 'winston',

  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'topics',
          editUrl: 'https://github.com/wstever/wstever.github.io/edit/master/winston/',
        },
        blog: {
          showReadingTime: true,
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            frontMatter.readingTime ?? defaultReadingTime({content}),
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/wstever/wstever.github.io/edit/master/winston/',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: '全部文章',
          postsPerPage: 10,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.png',
      metadata: [
        {name: 'keywords', content: 'AI, Agent, Skill, 供应链数字化, 电商, 教育, 工作流, 添哥'},
        {name: 'author', content: '本本本添哥'},
      ],
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
        disableSwitch: false,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: '添哥的AI场景实战',
        logo: {
          alt: '添哥的AI场景实战',
          src: 'img/logo.svg',
          srcDark: 'img/logo.svg',
        },
        items: [
          {to: '/', label: '首页', position: 'left'},
          {to: '/blog', label: '博客', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'topicsSidebar',
            label: '专题',
            position: 'left',
          },
          {to: '/about', label: '关于', position: 'left'},
          {to: '/projects', label: '项目', position: 'left'},
          {
            href: 'https://wstever.github.io/personal-toolbox/personal-workbench.html',
            label: '🧰 个人工作台',
            position: 'right',
            target: '_blank',
          },
          {
            href: 'https://github.com/wstever',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '内容',
            items: [
              {label: '博客', to: '/blog'},
              {label: '专题', to: '/topics/intro'},
              {label: '关于我', to: '/about'},
              {label: '项目', to: '/projects'},
            ],
          },
          {
            title: '工具',
            items: [
              {
                label: '个人工作台',
                href: 'https://wstever.github.io/personal-toolbox/personal-workbench.html',
              },
              {
                label: '公众号排版工具',
                href: 'https://wstever.github.io/winston/tools/md2wechat/',
              },
              {
                label: '个人提效工具箱',
                href: 'https://github.com/wstever/wstever.github.io/tree/master/personal-toolbox',
              },
            ],
          },
          {
            title: '找到我',
            items: [
              {label: 'GitHub', href: 'https://github.com/wstever'},
              {
                label: '公众号：添哥的AI场景实战',
                href: '/about',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 本本本添哥 · Built with Docusaurus`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'python', 'json', 'yaml', 'diff'],
      },
    }),
};

export default config;
