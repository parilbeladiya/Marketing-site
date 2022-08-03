import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

const BlogCard = ({
  className,
  src,
  date,
  title,
  description,
}) => (
  <div className={`blog-post-card-container ${className}`}>
    <div className="left-side-block">
      <img className="logo" src={`${src}`} alt="card-logo" />
    </div>
    <div className="right-side-block">
      <div className="date">
        {`${date}`}
      </div>
      <div className="title">
        {`${title}`}
      </div>
      <div className="description">{`${description}`}</div>
      <Button className="read-more">Read more  &#10132;</Button>
    </div>
  </div>
);

BlogCard.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

BlogCard.defaultProps = {
  className: '',
  src: '',
  date: '',
  title: '',
  description: '',
};

export default BlogCard;
