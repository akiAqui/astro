const RedBox = ({ children }) => {
    return (
        <div style={{
                 display: "flex",
                 justifyContent: "center",
             }}>
            <div style={{
                     marginTop:"2em",
                     marginBottom:"2em",
                     border: "2px solid red",
                     padding: "8px",
                     borderRadius: "20px",
                     width: "80%",  // 横幅いっぱいにする
                     boxSizing: "border-box", // パディングを含めたサイズ調整
                     color: "#aa2200",
                     fontWeight: "bold",
                     display: "inline-block"
                 }}>
                {children}
            </div>
        </div>
    );
};

export default RedBox;
