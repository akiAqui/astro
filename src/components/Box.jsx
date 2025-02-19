const RedBox = ({ children }) => {
    return(
        <div style={{
                 display: "flex",
                 justifyContent: "center",
             }}>
            <div style={{
                     border: "2px solid black",
                     padding: "8px",
                     borderRadius: "4px",
                     display: "inline-block"
                 }}>
                {children}
            </div>
        </div>
    );
};

export default RedBox;
