// a continer that spans the entire page and has a fixed height,
// the children are rendered to left and right of the container
// split the page into 70% left and 30% right

const BottonContainer = (props) => {
  return (
    <div className="container" style={{ height: "100vh" }}>
      {/* 30% to the left only if children have property left */}
      {props.children
        .filter((child) => child.props.left)
        .map((child) => (
          <div className="left" key={child.key}>
            {child}
          </div>
        ))}
      {/* 70% to the right only if children has property right */}
      {props.children
        .filter((child) => child.props.right)
        .map((child) => (
          <div className="right" key={child.key}>
            {child}
          </div>
        ))}

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: relative;

          height: 100%;
          width: 60vw;

          /* background image */
          background-image: url(${props.backgroundImage});
          /* Create the parallax scrolling effect */
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .left {
          padding-left: 4em; // padding on the left
          padding-top: 4em; // padding on the top
          flex: 0.6;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          max-width: 70vw;
        }
        .right {
          // right container spans 30% of the screen and is positioned to the right
          // and spans the whole height of the container
          flex: 0.4;
          display: flex;
          right: 0;
          position: relative;
          max-width: 40%;
          position: absolute;
          max-width: 40vw;
          width: 100%;

          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default BottonContainer;
