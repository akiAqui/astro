const MemoBox = ({ children}) => {
    const bgColor = "#555555";
    const textColor = "#ffffff";
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            marginTop: "2em",
            marginBottom: "2em",
        }}>
            <div style={{
                background: bgColor,
                border: `2px solid ${textColor}`,
                paddingTop: "20px",
                borderRadius: "20px",
                width: "80%",
                boxSizing: "border-box",
                color: textColor,
                fontWeight: "bold",
                position: "relative",
            }}>
                {children}
                <div style={{
                         position: "absolute",
                         border: `2px solid ${textColor}`,
                         top: "-12px",
                         left: "20px",
                         background: bgColor,  // 外側背景色と一致
                         color: textColor,     // 線と同じ色
                         padding: "0 4px",
                         fontSize: "15px",
                }}>
                    メモ
                </div>
            </div>
        </div>
    );
};

export default MemoBox;

