import { Component} from 'react'
import Details from './Details';

class Introduction extends Component {

    constructor(){
        super();
        this.state = {
            name:'MANOJ S',
            age: 23,
            hobby:["Coding","Cricket"],
            details:{education:"BE"}

        }
    }

    handleClick=()=>{
        this.setState({name:'MS DHONI'})
        this.setState({age:41})
    }

    render() {
        console.log("States of the Component",this.state)
        return(
            <div>
                <h1>This is the Introduction</h1>
                <h3>This is name:{this.state.name}</h3>
                <h3>This is age:{this.state.age}</h3>
                <button onClick={this.handleClick}>Click To Change</button>
                <Details nameprop={this.state.name} ageprop={this.state.age}/>

            </div>
        )
    }
}

export default Introduction