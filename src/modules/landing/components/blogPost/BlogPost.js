import React from 'react';

import { previousButton, nextButton } from '../../../../assets/icons';
import BlogCardContainer from '../../../../shared/components/BlogCard/BlogCardContainer';
import blogItems from './blog-items';

const BlogPost = () => (
  <div className="blog-post-main-wrapper">
    <div className="blog-post-header">See Our Blog Post</div>
    <div className="swipe-button-container">
      <img className="previous-button" src={previousButton} alt="previou-button" />
      <img className="next-button" src={nextButton} alt="next-button" />
    </div>
    <div className="blog-post-cards-container">
      { blogItems.map((blogItem) => (
        <BlogCardContainer
          key={blogItem.key}
          className={blogItem.className}
          src={blogItem.src}
          date={blogItem.date}
          title={blogItem.title}
        />
      ))}
    </div>
  </div>
);

export default BlogPost;
