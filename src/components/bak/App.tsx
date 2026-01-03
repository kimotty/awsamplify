import React, { useState } from 'react';
import '../styles/App.css';
import Modal from './Modal'; // モーダルコンポーネントをインポート

// モーダルの内容の型定義
type ModalContent = {
  title: string;
  content: string;
};

export function handleStateChange() {
  const [count, setCount] = useState<number>(0); // カウントアップのための状態  

  const onClickCountUp = () => {
    setCount(count + 1); // カウントアップ
  }
}

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalState, setModalState] = useState<boolean>(false); // モーダル内で使用する状態
  const [selectedOption, setSelectedOption] = useState<string>(''); // 選択されたオプション

  const options = ['Option 1', 'Option 2', 'Option 3']; // モーダルに渡す文字列配列

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const modalContent: ModalContent = {
    title: 'モーダルタイトル',
    content: '以下のプルダウンから選択してください。',
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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


      <button onClick={handleStateChange}>Count Up</button>
      
      {isModalOpen && (
        <Modal
          title={modalContent.title}
          content={modalContent.content}
          options={options} // 配列を渡す
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          state={modalState}
          setState={setModalState}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default App;