import "./styles.css";

export default function App() {
  function sumTwoNumbers(a, b) {
    if (a === b) return a;
    else {
      if (a > b) {
        const t = a;
        a = b;
        b = t;
      }
      let sum = 0;
      for (let i = a; i <= b; i++) {
        sum += i;
      }
      return sum;
    }
  }

  const GetSum = (a, b) => {
    let min = Math.min(a, b),
      max = Math.max(a, b);
    return ((max - min + 1) * (min + max)) / 2;
  };

  function GetSum2(a, b) {
    return ((Math.abs(a - b) + 1) * (a + b)) / 2;
  }

  const s = GetSum2(-14, 5);
  console.log(s);

  return (
    <div className="App">
      <input />
    </div>
  );
}
