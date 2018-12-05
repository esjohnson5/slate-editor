import React from 'react';
import classnames from 'classnames';

const cloneElement = (children, props) => {
  if (children && !children.length) {
    children = [children];
  }

  return (
    children &&
    children.reduce((result, child, index) => {
      if (child) {
        result.push(
          React.cloneElement(child, {
            ...props,
            key: index,
          })
        );
      }

      return result;
    }, [])
  );
};

export default ({ children, style, className, ...rest }) => (
  <div className={classnames('editor--toolbar', className)} style={style}>
    {cloneElement(children, rest)}
  </div>
);
