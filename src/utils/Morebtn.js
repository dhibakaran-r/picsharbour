import React from "react";
import "../css/Style.css";
import { GiArmoredBoomerang } from "react-icons/gi";

export default function Morebtn() {
  return (
    <>
      <div className="see-more">
        <a href="#" className="more-btn">
          see more <GiArmoredBoomerang />{" "}
        </a>
      </div>
    </>
  );
}
