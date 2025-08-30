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

  return (
    <div className="App">
          Learn React

      <button onClick={handleStateChange}>Count Up</button>
      
    </div>
  );
};

export default App;