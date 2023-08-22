import React from 'react';

export const useDocTitle = (title) => {
  const [docTitle, setDocTitle] = React.useState(title);
  React.useEffect(() => {
    document.title = docTitle;
  }, [docTitle]);

  return [docTitle, setDocTitle];
};
