export const Blue = ({ message, children, className }) => {
  return (
    <div className={className}>
      <span style={{ color: 'blue' }}>{message}</span>
      <span>{children}</span>
    </div>
  );
};
