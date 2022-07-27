import React from 'react';
import PropTypes from 'prop-types';

import BlogCard from './BlogCard';

const BlogCardContainer = ({
  className,
  src,
  date,
  title,
}) => (
  <BlogCard className={className} src={src} date={date} title={title} />
);

BlogCardContainer.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
};

BlogCardContainer.defaultProps = {
  className: '',
  src: '',
  date: '',
  title: '',
};

export default BlogCardContainer;
