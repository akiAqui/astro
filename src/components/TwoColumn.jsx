import React from 'react';

const containerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    gap: "0.2em",
    width: "100%",
    height: "100%"
};

const boxStyle = {
    marginTop: "0em",
    marginLeft: "0em",
    padding: "0.2rem",
    backgroundColor: "black",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    alignSelf: "stretch"  // この行を追加
};

export const TwoColumn = ({ children }) => {
  return (
    <div style={containerStyle}>
      {children}
    </div>
  );
};

export const Left = ({ children }) => {
  return (
    <div style={boxStyle}>
      {children}
    </div>
  );
};

export const Right = ({ children }) => {
  return (
    <div style={boxStyle}>
      {children}
    </div>
  );
};
