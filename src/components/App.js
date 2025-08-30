import React, { useState } from 'react';
// import logo from 'logo.svg';
import '../styles/App.css';
import {ChildArea} from './ChildArea';
import {HandleCheckTime} from './HandleCheckTime.tsx';

export default function App() {
//  const [count, setCount] = useState(0); // カウントアップのための状態 
  const [text, setText] = useState(''); // テキスト入力のための状態
  const [open, setOpen] = useState(false); // テキストエリアの表示状態

  const onChangeText = (event) => {
    setText(event.target.value); // テキスト入力の値を状態にセット
  }

  const [inputTime, setInputTime] = useState('');
  const handleInputChange = (event) => {
    setInputTime(event.target.value);
  };

//  const onClickOpen = () => {setOpen(!open)}; // テキストエリアの表示状態をトグル 

  return (
    <div className="App">
      {/* <input value={text} onChange={onChangeText} /> */}
      <input
        type="time"
        value={inputTime}
        onChange={handleInputChange}
      />
      <br/>
      <br/>
      <button >
          DisplayTime={HandleCheckTime(inputTime)}</button>
      <ChildArea open={open} />
    </div>
  );
}
