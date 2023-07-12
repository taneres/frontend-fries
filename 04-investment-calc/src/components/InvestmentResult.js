function InvestmentResult() {
  /* Todo: Show below table conditionally (only once result data is available) */
  /* Show fallback text if no data is available */
  let toShowResult = false;

  const resultTable = (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>YEAR NUMBER</td>
          <td>TOTAL SAVINGS END OF YEAR</td>
          <td>INTEREST GAINED IN YEAR</td>
          <td>TOTAL INTEREST GAINED</td>
          <td>TOTAL INVESTED CAPITAL</td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <>{toShowResult ? (resultTable) : (<div>Fallback text</div>)}</>
  );
}

export default InvestmentResult;