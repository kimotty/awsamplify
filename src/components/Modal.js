import React from 'react';
import '../styles/Modal.css'; // モーダル用のCSSをインポート

function ModalJs({ title, content, onClose, state, setState }) {
  if (!content) return null; // データがない場合は何も表示しない
  const handleStateChange = () => {
    if (setState) {
      setState((prev) => !prev); // 状態をトグル
    }
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{content.title}</h2>
        <p>{content.content}</p>
        <p>現在の状態: {state ? 'ON' : 'OFF'}</p>
        <button onClick={handleStateChange}>状態を変更</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ModalJs;