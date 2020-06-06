import React, { useEffect } from 'react'

export const withTitle = (title) => (WrappedComponent) => {
  const WithTitle = (props) => {
    useEffect(() => { document.title = title }, []);

    return <WrappedComponent {...props} />;
  };

  return WithTitle;
};
