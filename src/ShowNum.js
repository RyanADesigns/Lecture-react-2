import React, {Component} from 'react';

class ShowNumber extends Component {
    constructor(props){
        super()

        this.state = {
            myNumber: props.number
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            myNumber: nextProps.numbetr,
        }
        )
        console.log('hi');
    }
    render(){
        
        const { number, add } = this.props;
        const {myNumber} = this.state;
        return (
            <div>I am in SHownunnmebbe{number}  <button onClick={add}>add value</button> <br/>
            this will minus number <button onClick={this.props.minus}>minus here</button>
           myvalue is {myNumber}
            </div>
        )
    }

} 
export default ShowNumber