const RightImagePanel = () => {
  // image has a blur effect on it
  // and should not alter width, extra can be cropped out
  return (
    <div className="right-image-panel">
      <div className="right-image-panel-image">
        {/* crop excess */}
        <img
          src="/profile_dark.jpg"
          alt="mik.sh"
          style={{
            filter: "blur(5px)",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <style jsx>{`
        .right-image-panel {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          z-index: -1;
        }
        .right-image-panel-image {
          width: 100%;
          height: 100%;

          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
      `}</style>
    </div>
  );
};

export default RightImagePanel;
