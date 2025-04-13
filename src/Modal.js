import React from 'react';
import './Modal.css'; // モーダル用のCSSをインポート

function Modal({ data, onClose }) {
  if (!data) return null; // データがない場合は何も表示しない

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{data.title}</h2>
        <p>{data.content}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;