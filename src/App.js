import "./App.css";

function findMatchNumbers(arr, number) {
  const arrLen = arr.length;
  let result = [];
  for (let i = 0; i < arrLen; i++) {
    const nextIdx = i + 1;
    let numFlag = {};
    for (let j = nextIdx; j < arrLen; j++) {
      if (arr[i] + arr[j] <= number) {
        if (!numFlag[`${i}-${j}`]) {
          numFlag[`${i}-${j}`] = {};
          numFlag[`${i}-${j}`].count = arr[i];
          numFlag[`${i}-${j}`].row = [arr[i]];
        }
        Object.keys(numFlag).forEach((item) => {
          if (numFlag[item].count + arr[j] <= number) {
            numFlag[item].count += arr[j];
            numFlag[item].row.push(arr[j]);
          }
        });
      }
    }
    Object.keys(numFlag).forEach((item) => {
      if (numFlag[item].count === number) {
        result.push(numFlag[item].row);
      }
    });
  }
  return result;
}

function App() {
  return (
    <div className="App">
      {findMatchNumbers([1, 8, 9, 3, 10, 1], 12).map((item, id) => (
        <div key={id}>
          [{item && item.map((num, idx) => `${idx ? "," : ""}${num}`)}]
        </div>
      ))}
    </div>
  );
}

export default App;
