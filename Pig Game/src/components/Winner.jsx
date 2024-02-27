import React from "react";
import cup from "../assets/winner.png";

function WinnerModal({ winnerName }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <img src={cup} alt="Cup" className="cup-image" />
        <h2 className="winner-text">Congratulations </h2>
        <p className="winner-name">{winnerName}</p>
      </div>
    </div>
  );
}

export default WinnerModal;
