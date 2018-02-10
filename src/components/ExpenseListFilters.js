import 'react-dates/initialize';
import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortBy, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component {
  state = {
    datePickerFocused: null
  }

  onDateChange = ({ startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }

  onFocusChange = (datePickerFocused) => {
    this.setState(() => ({ datePickerFocused }));
  }

  render() {
    return (
      <div>
        <h3>Filters</h3>
        <div className="form-group">
          <label>Filter by text:</label>
          <input
            type="text"
            value={this.props.filters.text}
            className="form-control"
            onChange={(e) => {
              this.props.dispatch(setTextFilter(e.target.value))
            }}/>
        </div>
        <div className="form-group">
          <label>Filter by date:</label>
          <select
            className="custom-select"
            value={this.props.filters.sortBy}
            onChange={(e) => {  
              this.props.dispatch(sortBy(e.target.value))
            }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date range:</label>
          <div>
            <DateRangePicker
              startDateId={'start-date'}
              endDateId={'end-date'}
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDateChange}
              focusedInput={this.state.datePickerFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
              showClearDates={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters);