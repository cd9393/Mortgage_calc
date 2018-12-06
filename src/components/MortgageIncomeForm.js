import React from "react";

class MortgageIncomeForm extends React.Component{
 constructor(props){
   super(props)
   this.state = {
     income:null,
     deposit:null,
     monthlyExpense:null
   }
   this.handleIncomeChange = this.handleIncomeChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleDeposit = this.handleDeposit.bind(this);
   this.handleExpense = this.handleExpense.bind(this);
 }

 handleIncomeChange(event){
   this.setState({income:parseInt(event.target.value)});
 }

 handleDeposit(event){
   this.setState({deposit:parseInt(event.target.value)});
 }

 handleExpense(event){
   this.setState({monthlyExpense:parseInt(event.target.value)});
 }

 handleSubmit(event){
   event.preventDefault();
   const income =this.state.income;
   const deposit = this.state.deposit;
   const monthlyExpense = this.state.monthlyExpense;
  //  if(!income) return;

   this.props.onIncomeSubmit({income:income, deposit:deposit, monthlyExpense:monthlyExpense});

   this.setState({income:"", deposit:"", monthlyExpense:""});

 }

render(){
  return(
    <form className = "income-form" onSubmit = {this.handleSubmit}>
      <input type='number' placeholder = "Your Income" value = {this.state.income} onChange = {this.handleIncomeChange}/>
      <input type = 'number' placeholder = "Your Deposit" value = {this.state.deposit} onChange = {this.handleDeposit}/>
      <input type = 'number' placeholder = "Your Monthly Expenditure" value = {this.state.monthlyExpense} onChange = {this.handleExpense}/>
      <input type="submit" value = "Calculate Mortgage Allowance"/>
    </form>
  )
}
}

export default MortgageIncomeForm;
