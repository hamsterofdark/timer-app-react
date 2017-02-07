import React from 'react';
import TimerForm from './TimerForm';

const ToggleableTimerForm = React.createClass({
  render: function () {
    if (this.props.isOpen) {
      return (
        <TimerForm />
        );
    } else {
      return (
        <div className='ui basic content center aligned segment'>
        <button className='ui basic button icon'>
        <i className='plus icon'></i>
        </button>
        </div>
        );
    }
  },
});

export default ToggleableTimerForm;