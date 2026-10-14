import React from 'react';
import BlogPostPage from '@theme-original/BlogPostPage';
import ReadingProgress from '@site/src/components/ReadingProgress';

export default function BlogPostPageWrapper(props) {
  return (
    <>
      <ReadingProgress />
      <BlogPostPage {...props} />
    </>
  );
}
