import React, { Component } from 'react';
import moment from 'moment';

class TimeAgo extends Component {

  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);

    this.state = {
      time: this.getTime()
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getTime() {
    const now = moment(new Date());
    const duration = moment.duration(now.diff(moment(this.props.time)));
    return duration.humanize();
  }

  tick() {
    this.setState({ time: this.getTime() });
  }

  render() {
    return (
      <span className="time-ago">
        {this.state.time}
      </span>
    );
  }
}

export default TimeAgo;
