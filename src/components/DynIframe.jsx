import React from 'react'

export const DynIframe = ({ src, width = "100%", height = "500px", border = "none" }) => {
  return (
    <iframe
      src={src}
      style={{
        width: width,
        height: height,
        border: border,
      }}
      loading="lazy"
    />
  );
};

