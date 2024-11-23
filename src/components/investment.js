export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;
  let totalInterest = 0;
  let annualInvest = annualInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    annualInvest = annualInvest + initialInvestment;
    totalInterest = totalInterest + interestEarnedInYear;

    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1, // year identifier
      valueEndOfYear: investmentValue.toFixed(2), // investment value at end of year
      interest: interestEarnedInYear.toFixed(2), // the amount of interest earned in this year
      totalInterest: totalInterest.toFixed(2),
      investedCapital: annualInvest.toFixed(2), // investment added in this year
    });
  }

  return annualData;
}
