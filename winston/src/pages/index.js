import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const focuses = [
  {
    title: 'AI 与 Agent 构建',
    tag: '主业',
    description:
      '在联想 GSC LME 做 AI 应用开发与 Agent 平台（iChain），对接十九个核心系统和十条业务流程，也带员工 AI 培训。',
    icon: '🤖',
  },
  {
    title: '电商数字化',
    tag: '项目',
    description:
      '电商项目负责人，服务公牛、德力西、小米等电器品牌，正在推进公牛排插电商网站从 0 到 1。',
    icon: '🛒',
  },
  {
    title: 'AI + 教育',
    tag: '副业',
    description:
      '中小学语文教师，八年级数学学情分析师。用 AI 做批阅、学情分析和个性化反馈，也做整本书阅读指导。',
    icon: '📚',
  },
  {
    title: '内容创作',
    tag: '公众号',
    description:
      '「添哥的AI场景实战」主理人。写口语化的实战记录，不写正确的废话，只写自己踩过的坑。',
    icon: '✍️',
  },
  {
    title: '效率工具',
    tag: '折腾',
    description:
      '喜欢自己搓工具：Streamlit 短视频生成工具、个人办公工作台、公众号一键排版，能用脚本解决的绝不手动。',
    icon: '🛠️',
  },
  {
    title: '知识管理',
    tag: '体系',
    description:
      '把散乱的教案、会议逐字稿、课程资料结构化，沉淀成 Skill 和知识库，让 AI 真正记得我做过什么。',
    icon: '🧠',
  },
];

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={styles.heroEyebrow}>
          <span className={styles.heroDot} />
          HELLO，我是本本本添哥
        </p>
        <Heading as="h1" className={styles.heroTitle}>
          把 AI 用进
          <span className={styles.heroTitleAccent}>真实工作流</span>
        </Heading>
        <p className={styles.heroSubtitle}>
          深圳 · 联想 GSC 供应链数字化 / 电商项目负责人 / 语文教师 &amp; 数学学情分析师 /
          公众号主理人。白天跑业务流程，晚上写代码搓工具，半夜改学生试卷——
          AI 是我串起这一切的那根线。
        </p>
        <div className={styles.heroCta}>
          <Link className={clsx('button button--primary button--lg', styles.ctaPrimary)} to="/blog">
            读博客
          </Link>
          <Link className={clsx('button button--secondary button--lg', styles.ctaGhost)} to="/about">
            了解我
          </Link>
          <a
            className={clsx('button button--lg', styles.ctaWorkbench)}
            href="https://wstever.github.io/personal-toolbox/personal-workbench.html"
            target="_blank"
            rel="noopener noreferrer">
            🧰 个人工作台
          </a>
        </div>
      </div>
      <div className={styles.heroGlow} aria-hidden="true" />
    </header>
  );
}

function Focuses() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <Heading as="h2" className={styles.sectionTitle}>
          我在忙什么
        </Heading>
        <p className={styles.sectionDesc}>
          身份有点多，但主线只有一条：找到真实场景，用 AI 把它重做一遍。
        </p>
      </div>
      <div className={styles.grid}>
        {focuses.map((item) => (
          <div key={item.title} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.cardIcon}>{item.icon}</span>
              <span className={styles.cardTag}>{item.tag}</span>
            </div>
            <Heading as="h3" className={styles.cardTitle}>
              {item.title}
            </Heading>
            <p className={styles.cardDesc}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className={styles.band}>
      <div className={styles.bandInner}>
        <div>
          <Heading as="h2" className={styles.bandTitle}>
            文章首发在公众号「添哥的AI场景实战」
          </Heading>
          <p className={styles.bandDesc}>
            博客是同步的归档版本。想看第一时间的更新和碎碎念，来公众号找我。
          </p>
        </div>
        <div className={styles.bandActions}>
          <Link className="button button--primary button--lg" to="/blog">
            浏览全部文章
          </Link>
          <Link className={clsx('button button--lg', styles.ctaGhost)} to="/projects">
            看看我搓的东西
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="添哥的AI场景实战"
      description="AI × 供应链 × 电商 × 教育 —— 把 AI 用进真实工作流。本本本添哥的个人博客。">
      <Hero />
      <main className={styles.main}>
        <Focuses />
        <CtaBand />
      </main>
    </Layout>
  );
}
