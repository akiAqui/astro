const Indent = ({ 
    left = 0, 
    unit = 'px', 
    display = 'block',
    bottom = 0,
    children 
}) => {
    return (
        <div style={{
                 marginLeft: `${left}${unit}`,
                 marginBottom: `${bottom}${unit}`,
                 display: `${display}`,
             }}>
            {children}
        </div>
    );
}

export default Indent;
