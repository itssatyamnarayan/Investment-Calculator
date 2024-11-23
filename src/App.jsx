import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultTable from "./components/ResultTable";
import { useEffect, useState } from "react";
import { calculateInvestmentResults } from "./components/investment.js";

function App() {
  const [formData, setFormData] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });
  const [resultData, setResultData] = useState([]);

  function userInput(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: parseFloat(value),
    }));
  }

  function handleCalculate() {
    const result = calculateInvestmentResults(formData);
    setResultData(result);
  }

  useEffect(() => {
    handleCalculate();
  }, [formData]);

  return (
    <>
      <Header />
      <UserInput userInput={userInput} />
      <ResultTable result={resultData} />
    </>
  );
}

export default App;
