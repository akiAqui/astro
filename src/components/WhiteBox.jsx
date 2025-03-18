const WhiteBox = ({ children }) => {
    return (
        <div style={{
                 display: "flex",
                 justifyContent: "center",
                 
        }}>
            <div style={{
                     background: "white",
                     marginTop:"2em",
                     marginBottom:"2em",
                     border: "2px solid black",
                     padding: "8px",
                     borderRadius: "20px",
                     width: "80%",  // 横幅いっぱいにする
                     boxSizing: "border-box", // パディングを含めたサイズ調整
                     color: "#000000",
                     fontWeight: "bold",
                     padding: "8px",
                     display: "inline-block"
                 }}>
                {children}
            </div>
        </div>
    );
};

export default WhiteBox;
