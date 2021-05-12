import React from 'react';
const Message = () => {
  return (
      <span className="text-danger">
      We cannot calculate the nutrition for some ingredients. Please check the ingredient spelling or if you have entered a quantities for the ingredients. 
      <strong className=""> Make sure you have specified a Quantity</strong>
      </span>
  )
}
export default Message;