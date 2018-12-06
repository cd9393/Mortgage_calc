import React from "react";

const MortgageResult = (props) => {
  if(props.mortgage < 1){
    return null
  }

  const monthlyPayment = ((props.interest / 100 / 12) * props.mortgage) / (1 - ((1 + (props.interest / 100 / 12)) ^ (props.years * 12)))

  return(
    <div>
    <h3> With your salary annual salary you can afford a property up to a maximum value of £{props.mortgage}</h3>
  </div>
  )
}


export default MortgageResult;
