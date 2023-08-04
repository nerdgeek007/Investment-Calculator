import './InvestForm.css';
import React, { useState } from 'react';
const initialUserInput = {
  savings: 10000,
  contribution: 1200,
  interest: 7,
  duration: 10,
};
function InvestForm(props) {
  const [savings, setSavings] = useState(initialUserInput.savings);
  const [contribution, setContribution] = useState(
    initialUserInput.contribution
  );
  const [interest, setInterest] = useState(initialUserInput.interest);
  const [duration, setDuration] = useState(initialUserInput.duration);

  function handleSavingsChange(e) {
    setSavings(e.target.value);
  }
  function handleInterestChange(e) {
    setInterest(e.target.value);
  }
  function handleContributionChange(e) {
    setContribution(e.target.value);
  }
  function handleDurationChange(e) {
    setDuration(e.target.value);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    const investData = {
      savings,
      contribution,
      interest,
      duration,
    };
    props.onSaveInvestData(investData);
  }
  function handleReset(e) {
    e.preventDefault();
    setSavings(initialUserInput.savings);
    setContribution(initialUserInput.contribution);
    setInterest(initialUserInput.interest);
    setDuration(initialUserInput.duration);
    props.onResetData(null);
  }
  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            value={savings}
            type="number"
            id="current-savings"
            onChange={handleSavingsChange}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            value={contribution}
            type="number"
            id="yearly-contribution"
            onChange={handleContributionChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            value={interest}
            type="number"
            id="expected-return"
            onChange={handleInterestChange}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            value={duration}
            id="duration"
            onChange={handleDurationChange}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={handleReset}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}
export default InvestForm;
