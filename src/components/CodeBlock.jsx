const CodeTitle = ({ id, title, children }) => (
  <div id={id}>
    <h3>{title}</h3>
    <pre>
      <code>
        {children}
      </code>
    </pre>
  </div>
);


export default CodeTitle;
