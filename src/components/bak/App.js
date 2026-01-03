import React, { useState } from 'react';
// import logo from 'logo.svg';
import '../styles/App.css';
import ModalJs from './Modal'; // モーダルコンポーネントをインポート

function AppJs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalState, setModalState] = useState(false); // モーダル内で使用する状態

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={openModal}>Open Modal</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {isModalOpen && (
        <ModalJs title="動的なモーダル"
          content="propsでデータを渡す"
          state={modalState}
          setState={setModalState}
          onClose={closeModal} />
      )}

{/*      {isModalOpen && (
//        <div className="modal">
//          <div className="modal-content">
//            <h2>モーダルタイトル</h2>
//            <p>これはモーダルの内容です。</p>
//            <button onClick={closeModal}>Close</button>
//          </div>
//        </div>
//      )}
*/}
    </div>
  );
}

export default AppJs;
