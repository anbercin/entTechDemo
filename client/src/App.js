import React, {Component} from 'react';
import Table from './Table'

class App extends Component {
    render() {
        return (
          <div className="App">
            <Table data={this.state.trades}/>
          </div>
        )
    }

    intervalID;

    state = {
        trades: [{}]
    };

    componentDidMount() {  
        this.getData();
    }
    getData = () => {
        fetch('http://localhost:5000/trades')
          .then(res => res.json())
          .then(data => {
            this.setState({ trades: [...data] });
            // call getData() again in 5 seconds
            this.intervalID = setTimeout(this.getData.bind(this), 5000);
          });
      }
      componentWillUnmount() {
        /*
          stop getData() from continuing to run even
          after unmounting this component. Notice we are calling
          'clearTimeout()` here rather than `clearInterval()` as
          in the previous example.
        */
        clearTimeout(this.intervalID);
      }
}

export default App;
