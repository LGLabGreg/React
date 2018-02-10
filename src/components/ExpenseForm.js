import 'react-dates/initialize';
import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

import 'react-dates/lib/css/_datepicker.css';


export default class ExpenseForm extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      note: props.expense ? props.expense.note : '',
      datePickerFocused: false,
      errorState: false
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ datePickerFocused: focused }));
  }

  onInfoChange = (e) => {
    const info = e.target.value;
    this.setState(() => ({ info }));
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please add a description and an amount!' }));
    }
    else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <div className="alert alert-danger">{this.state.error}</div>}
        <form
          onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Description"
              autoFocus
              className="form-control"
              value={this.state.description}
              onChange={this.onDescriptionChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Amount"
              className="form-control"
              value={this.state.amount}
              onChange={this.onAmountChange}
            />
          </div>
          <div className="form-group">
            <SingleDatePicker
              date={this.state.createdAt}
              onDateChange={this.onDateChange}
              focused={this.state.datePickerFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Add a note for your expense (optional)"
              className="form-control"
              value={this.state.info}
              onChange={this.onInfoChange}>
            </textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}