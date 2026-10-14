import React, {useEffect, useRef} from 'react';
import styles from './ReadingProgress.module.css';

/**
 * 阅读进度条 —— 参考 yuluo-yx.github.io 文章页的阅读体验
 * 固定在视口顶部，随页面滚动生长，压在导航栏上沿
 */
export default function ReadingProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) {
      return undefined;
    }
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const ratio = max > 0 ? Math.min(1, Math.max(0, doc.scrollTop / max)) : 0;
      bar.style.transform = `scaleX(${ratio})`;
    };
    update();
    window.addEventListener('scroll', update, {passive: true});
    window.addEventListener('resize', update);
    // 图片等内容延迟加载导致文档高度变化时同步进度
    const observer = new ResizeObserver(update);
    observer.observe(document.body);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={barRef}
      className={styles.bar}
      style={{transform: 'scaleX(0)'}}
      role="presentation"
    />
  );
}
