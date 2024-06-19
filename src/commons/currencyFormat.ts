const currencyFormat = (price: number): string => {
  return Intl.NumberFormat("id-ID", {
    currency: "IDR",
    style: "currency",
    minimumFractionDigits: 0,
  }).format(price);
};

export default currencyFormat;
