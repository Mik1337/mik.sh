// display top to bottom
const MobileContainer = (props) => {
  return (
    <div className="container">
      {props.children}
      <style jsx>{`
        .container {
          /* window size */
          width: 100%;
          height: 100vh;
        }
      `}</style>
    </div>
  );
};

export default MobileContainer;
