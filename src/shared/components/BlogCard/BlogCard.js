import React from 'react';
import PropTypes from 'prop-types';

const BlogCard = ({
  className,
  src,
  date,
  title,
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
      <div className="description">Promotion World has once placed PageTraffic among the top.</div>
      <div className="more">Read more  &#10132;</div>
    </div>
  </div>
);

BlogCard.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
};

BlogCard.defaultProps = {
  className: '',
  src: '',
  date: '',
  title: '',
};

export default BlogCard;
