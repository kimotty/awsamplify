const childStyle = {
    backgroundColor: "lightblue",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
}

export const ChildArea = (props) => {
    const {open} = props;
    return (
      <>
        {open ? (
        <div style={childStyle}>
          <h2>子コンポーネント</h2>
          <p>ここは子コンポーネントです。</p>
        </div>
        ) : null
        }
      </>
    );
};