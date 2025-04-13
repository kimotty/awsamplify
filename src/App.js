import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './Modal'; // モーダルコンポーネントをインポート

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null); // モーダルに渡すデータ

  const openModal = () => {
    setModalData({ title: 'モーダルタイトル', content: 'これはモーダルの内容です。' });
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <Modal data={modalData} onClose={closeModal} />
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

export default App;
