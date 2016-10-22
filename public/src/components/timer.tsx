import * as React from 'react';

interface Props {  
}
interface State {  
    secondsElapsed: number
}

export default class Timer extends React.Component<Props, State> {
    private interval: any;
        
    constructor() {
        super();
        this.state = {
            secondsElapsed: 0
        };
    }

    tick() {
        this.state.secondsElapsed++;
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
        <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
        );
    }
}