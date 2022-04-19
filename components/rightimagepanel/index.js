import TypeIt from "typeit-react";
import { GITHUB, WEBSITE } from "common/urls";

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
            left: "0",
            top: "0",
            display: "block",
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
        }
        .right-image-panel-image {
          width: 100%;
          height: 100%;

          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        // .right-image-panel-image img {
        //   width: 100%;
        //   height: 100%;
        // }
      `}</style>
    </div>
  );
};

export default RightImagePanel;
