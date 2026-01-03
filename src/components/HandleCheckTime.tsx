export const HandleCheckTime = (inputTime:string) => {
  console.log('inputTime :', inputTime);

    const currentTime = new Date();
    const [inputHours, inputMinutes] = inputTime.split(':').map(Number);
    const inputDate = new Date();
    inputDate.setHours(inputHours, inputMinutes, 0, 0);

    if (inputDate < currentTime && inputHours >= 18) {
      return ('18時を超過しています。');
    } else {
      return ('18時を超過していません。');
    }
};