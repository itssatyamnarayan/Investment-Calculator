export default function ResultTable({ result }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Interest (Year)</th>
          <th>Total interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((data, index) => (
          <tr key={index}>
            <td>{data.year}</td>
            <td>{data.valueEndOfYear}</td>
            <td>{data.interest}</td>
            <td>{data.totalInterest}</td>
            <td>{data.investedCapital}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
