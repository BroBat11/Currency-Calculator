const currencySelect = document.getElementById('currency-select');
const amountInput = document.getElementById('amount-input');
const convertBtn = document.getElementById('convert-btn');
const kztResult = document.getElementById('kzt-result');
const usdResult = document.getElementById('usd-result');
const eurResult = document.getElementById('eur-result');

const usdBuyRate = 429;
const usdSellRate = 431;
const eurBuyRate = 507;
const eurSellRate = 509;

convertBtn.addEventListener('click', () => {
  const selectedCurrency = currencySelect.value;
  const amount = amountInput.value;
  let kztAmount = 0;
  let usdAmount = 0;
  let eurAmount = 0;

  if (selectedCurrency === 'KZT') {
    kztAmount = amount;
    usdAmount = (amount / usdSellRate).toFixed(2);
    eurAmount = (amount / eurSellRate).toFixed(2);
  } else if (selectedCurrency === 'USD') {
    kztAmount = (amount * usdBuyRate).toFixed(2);
    usdAmount = amount;
    eurAmount = (amount * (usdBuyRate / eurSellRate)).toFixed(2);
} else if (selectedCurrency === 'EUR') {
kztAmount = (amount * eurBuyRate).toFixed(2);
usdAmount = (amount * (eurBuyRate / usdSellRate)).toFixed(2);
eurAmount = amount;
}

kztResult.innerText = kztAmount;
usdResult.innerText = usdAmount;
eurResult.innerText = eurAmount;
});