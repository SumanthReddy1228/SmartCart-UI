import React from "react";

export default function ({ currency, price }) {
  return (
    <>
      {currency}
      <span>{price}</span>
    </>
  );
}
