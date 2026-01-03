export const HandleCheckTime = (inputTime: string): string => {
  console.log('inputTime:', inputTime);

  const currentTime = new Date();
  const currentTimeStr = currentTime.toLocaleString();

  const [inputHours, inputMinutes] = inputTime.split(':').map(Number);
  const inputDate = new Date();
  inputDate.setHours(inputHours, inputMinutes, 0, 0);
  const inputDateStr = inputDate.toLocaleString();

  console.log('Now      :', inputDateStr);
  console.log('Current   :', currentTimeStr);

    if (inputDate < currentTime && inputHours >= 18) {
      return ('18時を超過しています。');
    } else {
      return ('18時を超過していません。');
    }
};