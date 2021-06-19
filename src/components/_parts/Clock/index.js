import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    const months = [ "січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];

    this.normalizeNumber = (number) => (number).toString().padStart(2, '0');

    this.state = {
      time: {
        year: new Date().getFullYear(),
        month: months[new Date().getMonth()],
        day: this.normalizeNumber(new Date().getDate()),
        hours: this.normalizeNumber(new Date().getHours()),
        minutes: this.normalizeNumber(new Date().getMinutes()),
        seconds: this.normalizeNumber(new Date().getSeconds()),
      }
    };



    this.updateTime = () => {
      const newDate = new Date();

      this.setState({
        time: {
          year: newDate.getFullYear(),
          month: months[newDate.getMonth()],
          day: this.normalizeNumber(newDate.getDate()),
          hours: this.normalizeNumber(newDate.getHours()),
          minutes: this.normalizeNumber(newDate.getMinutes()),
          seconds: this.normalizeNumber(newDate.getSeconds()),
        }
      });
    };
  }

  componentDidMount() {
    setInterval(this.updateTime, 1000);
  }

  render() {
    return (
      <>
        <div className="App-clock">
          <span>{this.state.time.hours}</span>:<span>{this.state.time.minutes}</span>:<span>{this.state.time.seconds}</span> <span>{this.state.time.day}</span> <span>{this.state.time.month}</span> <span>{this.state.time.year}</span>
        </div>
      </>
    );
  }
}

export default Clock;