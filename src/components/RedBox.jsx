const RedBox = ({ children }) => {
    return(
        <div style={{
                 display: "flex",
                 justifyContent: "center"
             }}>
            <div style={{
                     border: "3px solid #aa5522",
                     borderRadius: "18px", // 角を丸くする
                     color: "#aa2200",
                     fontWeight: "bold",
                     padding: "8px",
                     display: "inline-block"
                 }}>
                {children}
            </div>
        </div>
    );
};

export default RedBox;
