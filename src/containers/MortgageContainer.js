import React from "react";
import MortgageIncomeForm from "../components/MortgageIncomeForm";
import MortgageResult from "../components/MortgageResult";

class MortgageContainer extends React.Component{
constructor(){
  super();
  this.state = {
    maxPropValue:0,
    interest:0,
    noOfYears:0
  }
  this.handleFormSubmit = this.handleFormSubmit.bind(this);
}

handleFormSubmit(submittedIncome){
  const maxMortgage = submittedIncome.deposit + ((submittedIncome.income - (submittedIncome.monthlyExpense * 12)) * 3)
  this.setState({maxPropValue:maxMortgage})
}

  render(){
    return(
      <div className="container">
    <h1> Mortgage Container Component</h1>
    <MortgageIncomeForm onIncomeSubmit = {this.handleFormSubmit}/>
    <MortgageResult mortgage = {this.state.maxPropValue} interest = {this.state.interest} noOfYears = {this.state.noOfYears}/>
    </div>
  )
  }
}

export default MortgageContainer;
