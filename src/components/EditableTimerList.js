import React from 'react';
import EditableTimer from './EditableTimer';

const EditableTimerList = React.createClass({
  render: function () {
    const timers = this.props.timers.map((timer) => (
      <EditableTimer
      key={timer.id}
      id={timer.id}
      title={timer.title}
      project={timer.project}
      elapsed={timer.elapsed}
      runningSince={timer.runningSince}
      />
      ));
    return (
      <div id='timers'>
      {timers}
      </div>
      );
  },
});
export default EditableTimerList;