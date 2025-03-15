const Box = ({ children }) => {
    return (
        <div style={{
                 display: "flex",
                 justifyContent: "center",
             }}>
            <div style={{
                     marginTop:"2em",
                     marginBottom:"2em",
                     border: "2px solid white",
                     padding: "8px",
                     borderRadius: "20px",
                     width: "80%",  // 横幅いっぱいにする
                     boxSizing: "border-box" // パディングを含めたサイズ調整
                 }}>
                {children}
            </div>
        </div>
    );
};

export default Box;

