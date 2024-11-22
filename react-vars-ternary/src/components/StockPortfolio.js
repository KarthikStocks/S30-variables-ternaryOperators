// import React from "react";

// function MarksSheet(props) {
//   const engMarks = Number(props.engMarks);
//   let telMarks = Number(props.telMarks);
//   let hindiMarks = Number(props.hindiMarks);
//   let HTMLMarks = Number(props.HTMLMarks);
//   let CSSMarks = Number(props.CSSMarks);
//   let reactMarks = 100;
//   let totalMraks = engMarks + telMarks + hindiMarks + CSSMarks + reactMarks;
//   let perc = (totalMraks / 600) * 100;

//   return (
//     <div>
//       <table>
//         <caption>{props.studentName} Marks Sheet</caption>
//         <thead>
//           <tr>
//             <th>Subject</th>
//             <th>Max. Marks</th>
//             <th>Marks Obtained</th>
//             <th>Result</th>
//             <th>Remarks</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>English</td>
//             <td>100</td>
//             <td>{engMarks}</td>
//             <td>{engMarks >= 40 ? "Pass" : "Fail"}</td>
//             <td>Excellent</td>
//           </tr>

//           <tr>
//             <td>Telugu</td>
//             <td>100</td>
//             <td>{telMarks}</td>
//             <td>{telMarks >= 40 ? "Pass" : "Fail"}</td>
//             <td>Excellent</td>
//           </tr>

//           <tr>
//             <td>Hindi</td>
//             <td>100</td>
//             <td>{hindiMarks}</td>
//             <td>{hindiMarks >= 40 ? "Pass" : "Fail"}</td>
//             <td>Excellent</td>
//           </tr>

//           <tr>
//             <td>HTML</td>
//             <td>100</td>
//             <td>{HTMLMarks}</td>
//             <td>{HTMLMarks >= 40 ? "Pass" : "Fail"}</td>
//             <td>Excellent</td>
//           </tr>

//           <tr>
//             <td>React</td>
//             <td>100</td>
//             <td>{reactMarks}</td>
//             <td>{reactMarks >= 40 ? "Pass" : "Fail"}</td>
//             <td>Excellent</td>
//           </tr>

//           <tr>
//             <td>CSS</td>
//             <td>100</td>
//             <td>{CSSMarks}</td>
//             <td>{CSSMarks >= 40 ? "Pass" : "Fail"}</td>
//             <td>Excellent</td>
//           </tr>
//         </tbody>
//         <tfoot>
//           <tr>
//             <th>Total</th>
//             <th>600</th>
//             <th>{totalMraks}({perc.toFixed(2)}%)</th>
//             <th></th>
//             <th></th>
//           </tr>
//         </tfoot>
//       </table>
//     </div>
//   );
// }

// export default MarksSheet;

import React from "react";

function StockPortfolio(props) {
  const totalInvestment = props.stocks.reduce(
    (acc, stock) => acc + stock.quantity * stock.purchasePrice,
    0
  );
  const currentValue = props.stocks.reduce(
    (acc, stock) => acc + stock.quantity * stock.currentPrice,
    0
  );
  const profitOrLoss = currentValue - totalInvestment;
  const profitOrLossPercent = ((profitOrLoss / totalInvestment) * 100).toFixed(
    2
  );

  return (
    <div>
      <table className="table">
        <caption className="caption">
          {props.investorName}'s Stock Portfolio
        </caption>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Quantity</th>
            <th>Purchase Price</th>
            <th>Current Price</th>
            <th>Investment</th>
            <th>Current Value</th>
            <th>Profit/Loss</th>
          </tr>
        </thead>
        <tbody>
          {props.stocks.map((stock, index) => {
            const investment = stock.quantity * stock.purchasePrice;
            const currentValue = stock.quantity * stock.currentPrice;
            const profitOrLoss = currentValue - investment;
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.quantity}</td>
                <td>{stock.purchasePrice}</td>
                <td>{stock.currentPrice}</td>
                <td>{investment}</td>
                <td>{currentValue}</td>
                <td style={{ color: profitOrLoss >= 0 ? "#4caf50" : "red" }}>
                  {profitOrLoss} (
                  {((profitOrLoss / investment) * 100).toFixed(2)}%)
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="4">Total</th>
            <th>{totalInvestment}</th>
            <th>{currentValue}</th>
            <th
              style={{
                color: profitOrLoss >= 0 ? "#4caf50" : "red",
              }}
            >
              {profitOrLoss} ({profitOrLossPercent}%)
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default StockPortfolio;
