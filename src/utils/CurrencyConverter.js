import React from "react";

const converter = new Intl.NumberFormat('en-US', {style: "currency", currency: "USD", minimumFractionDigits: 2})
export default converter;