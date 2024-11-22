// import "./App.css";
// import MarksSheet from "./components/MarksSheet";

// function App() {
//   return (
//     <div className="App">
//       <MarksSheet
//         studentName="Karthik"
//         engMarks="99"
//         telMarks={32}
//         hindiMarks="99"
//         HTMLMarks="95"
//         CSSMarks="94"
//         reactMarks="96"
//       ></MarksSheet>
//       <MarksSheet
//         studentName="Warren Buffett"
//         engMarks="35"
//         telMarks="100"
//         hindiMarks="100"
//         HTMLMarks="39"
//         CSSMarks="32"
//         reactMarks="86"
//       ></MarksSheet>
//       <MarksSheet
//         studentName="Peter Lynch"
//         engMarks="38"
//         telMarks="98"
//         hindiMarks="80"
//         HTMLMarks="31"
//         CSSMarks="82"
//         reactMarks="84"
//       ></MarksSheet>
//       <MarksSheet
//         studentName="Rakesh Jhunjhunwala"
//         engMarks="99"
//         telMarks="83"
//         hindiMarks="100"
//         HTMLMarks="68"
//         CSSMarks="77"
//         reactMarks="76"
//       ></MarksSheet>
//       <MarksSheet
//         studentName="Radhakishan Damani"
//         engMarks="65"
//         telMarks="79"
//         hindiMarks="94"
//         HTMLMarks="87"
//         CSSMarks="88"
//         reactMarks="67"
//       ></MarksSheet>
//     </div>
//   );
// }

// export default App;

import React from "react";
import StockPortfolio from "./components/StockPortfolio";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header id="header">Monthly Profit Summary</header>
      <StockPortfolio
        investorName="Karthik"
        stocks={[
          {
            name: "TCS",
            quantity: 100,
            purchasePrice: 3000,
            currentPrice: 3400,
          },
          {
            name: "Reliance",
            quantity: 150,
            purchasePrice: 2500,
            currentPrice: 2600,
          },
          {
            name: "Infosys",
            quantity: 200,
            purchasePrice: 1400,
            currentPrice: 1500,
          },
        ]}
      />
      <StockPortfolio
        investorName="Warren Buffett"
        stocks={[
          {
            name: "Apple",
            quantity: 30,
            purchasePrice: 150,
            currentPrice: 145,
          },
          {
            name: "Coca-Cola",
            quantity: 50,
            purchasePrice: 60,
            currentPrice: 65,
          },
          {
            name: "Berkshire",
            quantity: 2,
            purchasePrice: 430000,
            currentPrice: 420000,
          },
        ]}
      />

      <StockPortfolio
        investorName="Peter Lynch"
        stocks={[
          {
            name: "Amazon",
            quantity: 5,
            purchasePrice: 3100,
            currentPrice: 3500,
          },
          {
            name: "Netflix",
            quantity: 10,
            purchasePrice: 500,
            currentPrice: 520,
          },
          { name: "Tesla", quantity: 8, purchasePrice: 800, currentPrice: 850 },
        ]}
      />
      <StockPortfolio
        investorName="Rakesh Jhunjhunwala"
        stocks={[
          {
            name: "HDFC",
            quantity: 15,
            purchasePrice: 2000,
            currentPrice: 2200,
          },
          {
            name: "ICICI",
            quantity: 20,
            purchasePrice: 900,
            currentPrice: 950,
          },
          {
            name: "Axis Bank",
            quantity: 10,
            purchasePrice: 700,
            currentPrice: 720,
          },
        ]}
      />
      <StockPortfolio
        investorName="Radhakishan Damani"
        stocks={[
          {
            name: "DMart",
            quantity: 25,
            purchasePrice: 3000,
            currentPrice: 3200,
          },
          { name: "ITC", quantity: 40, purchasePrice: 200, currentPrice: 220 },
          { name: "SBI", quantity: 30, purchasePrice: 500, currentPrice: 520 },
        ]}
      />
      <StockPortfolio
        investorName="Elon Musk"
        stocks={[
          {
            name: "Tesla",
            quantity: 50,
            purchasePrice: 800,
            currentPrice: 780,
          },
          {
            name: "SpaceX",
            quantity: 100,
            purchasePrice: 5000,
            currentPrice: 4900,
          },
          {
            name: "Twitter",
            quantity: 200,
            purchasePrice: 45,
            currentPrice: 44,
          },
        ]}
      />
      <StockPortfolio
        investorName="Jeff Bezos"
        stocks={[
          {
            name: "Amazon",
            quantity: 300,
            purchasePrice: 3000,
            currentPrice: 3050,
          },
          {
            name: "Blue Origin",
            quantity: 10,
            purchasePrice: 70000,
            currentPrice: 71000,
          },
          {
            name: "Washington Post",
            quantity: 50,
            purchasePrice: 500,
            currentPrice: 510,
          },
        ]}
      />
      <StockPortfolio
        investorName="Mukesh Ambani"
        stocks={[
          {
            name: "Reliance",
            quantity: 200,
            purchasePrice: 2500,
            currentPrice: 2600,
          },
          {
            name: "Jio",
            quantity: 1000,
            purchasePrice: 150,
            currentPrice: 155,
          },
          {
            name: "Reliance Retail",
            quantity: 300,
            purchasePrice: 1200,
            currentPrice: 1250,
          },
        ]}
      />
      <StockPortfolio
        investorName="Gautam Adani"
        stocks={[
          {
            name: "Adani Ports",
            quantity: 50,
            purchasePrice: 700,
            currentPrice: 690,
          },
          {
            name: "Adani Power",
            quantity: 150,
            purchasePrice: 300,
            currentPrice: 290,
          },
          {
            name: "Adani Green",
            quantity: 100,
            purchasePrice: 800,
            currentPrice: 780,
          },
        ]}
      />
      <StockPortfolio
        investorName="Charlie Munger"
        stocks={[
          {
            name: "Berkshire",
            quantity: 5,
            purchasePrice: 430000,
            currentPrice: 440000,
          },
          {
            name: "Coca-Cola",
            quantity: 100,
            purchasePrice: 60,
            currentPrice: 65,
          },
          {
            name: "Procter & Gamble",
            quantity: 30,
            purchasePrice: 150,
            currentPrice: 160,
          },
        ]}
      />
      <footer id="footer">
        © 2024 Stock Market Investor. All rights reserved. Empowering investors
        with reliable insights worldwide.
      </footer>
    </div>
  );
}

export default App;
