import "./currencyOptions.css";

const CurrencyOptions = ({ showCurOpts, buyToken, alignment }) => {
  const align = alignment === "bottomToTop" ? " dropdown-rev" : " dropdown";

  return (
    <div className={"currency-opt-container" + (showCurOpts ? align : "")}>
      <h3
        onClick={() =>
          window.open(
            `https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=${buyToken}`,
            "_blank"
          )
        }
      >
        I have BNB
      </h3>
      <h3
        onClick={() =>
          window.open(
            `https://pancakeswap.finance/swap?inputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&outputCurrency=${buyToken}`,
            "_blank"
          )
        }
      >
        I have BUSD
      </h3>
      <h3
        onClick={() =>
          window.open(
            `https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=${buyToken}`,
            "_blank"
          )
        }
      >
        I have USDT
      </h3>
    </div>
  );
};

export default CurrencyOptions;
