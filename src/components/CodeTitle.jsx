const CodeTitle = ({ id, title, children,counter=0 }) => {
    return (
      <div style={{margin: '0px', padding:'0px'}}>
          <div id={id} style={{ margin: '0px'}}>
              {children}
          </div>
      {counter !== 0 && (
        <center style={{ margin: '0px', fontWeight: 'bold' }}>
            {`Code ${counter}: ${title}`}
        </center>
      )}
      {counter === 0 && (
        <center style={{ margin: '0px', fontWeight: 'bold' }}>
            {`${title}`}
        </center>
      )}
    </div>
  );
};

export default CodeTitle;
// カウンターを自動生成仕様としたがうまくいかない

// {counter !== 0 && ( の部分について
//{}: JSX 内で JavaScript を評価するために使用。
//&&: 短絡評価を利用して条件を満たす場合にのみ右側の JSX をレンダリング。
//(): JSX の複数行を一つの要素として扱うために使用。

//counterを指定しないと
