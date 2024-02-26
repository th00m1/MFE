import LineChart from "./components/LineChart";

function App() {
  const labels = ["jan", "feb", "march", "april", "may", "june", "july"];
  const data = [65, 59, 80, 81, 56, 55, 40];

  return <LineChart labels={labels} data={data} />;
}

export default App;
