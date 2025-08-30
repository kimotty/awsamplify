import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/Modal.css'; // モーダル用のCSSをインポート

// モーダルコンポーネントのpropsの型定義
type ModalProps = {
  title: string;
  content: string;
  options: string[]; // プルダウンに表示する文字列配列
  selectedOption: string; // 選択されたオプション
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
};

// カウントアップ
const [count, setCount] = useState(0); // カウントアップのための状態


const Modal: React.FC<ModalProps> = ({
  title,
  content,
  options,
  selectedOption,
  setSelectedOption,
  state,
  setState,
  onClose,
   }) => {
  const handleStateChange = () => {
    setState((prev) => !prev); // 状態をトグル
    content.split(',').forEach((word) => {
      word.trim(); // 各単語をトリム
      if (word.trim() === 'ON') {
        setState(true); // ONの場合はtrueに設定
      }
      if (word.trim() === 'OFF') {
        setState(false); // OFFの場合はfalseに設定
      }
      if (word.trim() === 'TOGGLE') {
        setState((prev) => !prev); // TOGGLEの場合は状態をトグル
      }
      if (word.trim() === 'CLOSE') {
        onClose(); // CLOSEの場合はモーダルを閉じる
      }
    });
    setCount(count + 1);
    console.log("CountUp");
  };
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value); // 選択された値を更新
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <p>現在の状態: {state ? 'ON' : 'OFF'}</p>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="" disabled>
            選択してください
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <p>選択されたオプション: {selectedOption}</p>
        <p>カウント：{count}</p>

        <button onClick={handleStateChange}>状態を変更up</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;