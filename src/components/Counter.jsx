import { Component } from 'react'

class Counter extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleClickBtn = ({target}) => {
        // console.log(target);
        this.setState((prev) => ({
			[target.name]: prev[target.name] + 1,
		}))}

    countTotalFeedback = () => {
        return this.state.good+this.state.neutral+this.state.bad
    }

    countPositiveFeedbackPercentage =() => {
        if((this.state.good+this.state.neutral+this.state.bad)!==0) {
            return Math.round(this.state.good / (this.state.good+this.state.neutral+this.state.bad) * 100)
        }
        else {
            return 0;
        }
    }

    render() {
        return(
           <div className='Container'>
                <div className='counterContainer'>
                    <h1>Please leave feedback</h1>
                    <div className='counterBtn'>
                    <button name='good' onClick={this.handleClickBtn}>Good</button>
                    <button name='neutral' onClick={this.handleClickBtn}>Neutral</button>
                    <button name='bad' onClick={this.handleClickBtn}>Bad</button>
                    </div>
                </div>
                <div className='statisticsContainer'>
                    <h2>Statistics</h2>
                    <p>Good {this.state.good}</p>
                    <p>Neutral {this.state.neutral}</p>
                    <p>Bad {this.state.bad}</p>
                    <p>Total {this.countTotalFeedback()}</p>
                    <p>Positive feedback {this.countPositiveFeedbackPercentage()} %</p>
                </div>   
           </div> 
        )
    }
}

export default Counter