import Header from './components/Header';
import React, { useState } from 'react';
import InvestForm from './components/InvestForm';
import InvestTable from './components/InvestTable';
import Card from './UI/Card';
function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = userInput => {
    setUserInput(userInput);
  };

  const resetHandler = userInput => {
    setUserInput(userInput);
  };
  const yearlyData = [];
  if (userInput) {
    let currentSavings = +userInput['savings']; //
    const yearlyContribution = +userInput['contribution'];
    const expectedReturn = +userInput['interest'] / 100;
    const duration = +userInput['duration'];
    let totalInterest = 0;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterest,
      });
    }
  }

  return (
    <Card>
      <Header />
      <InvestForm
        onSaveInvestData={calculateHandler}
        onResetData={resetHandler}
      />
      {!userInput && <p style={{ textAlign: 'center' }}>No Investment Found</p>}
      {userInput && (
        <InvestTable data={yearlyData} initialInvestment={userInput.savings} />
      )}
    </Card>
  );
}

export default App;
