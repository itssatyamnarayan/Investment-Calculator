export default function UserInput({ userInput }) {
  return (
    <div id="user-input" className="input-group">
      <div>
        <label>
          INITIAL INVESTMENT
          <input type="number" name="initialInvestment" onChange={userInput} />
        </label>

        <label>
          EXPECTED RETURN
          <input type="number" name="expectedReturn" onChange={userInput} />
        </label>
      </div>

      <div>
        <label>
          ANNUAL INVESTMENT
          <input type="number" name="annualInvestment" onChange={userInput} />
        </label>

        <label>
          DURATION
          <input type="number" name="duration" onChange={userInput} />
        </label>
      </div>
    </div>
  );
}
