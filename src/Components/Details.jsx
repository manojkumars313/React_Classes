import { Component} from 'react'

class Details extends Component {

    render() {
        console.log("states of the Detail components",this.props);
    
    return(
        <div>
            <h1>This is the detail page : {this.props.nameprop}</h1>
            <h1>This is age : {this.props.ageprop}</h1>
        </div>
    )
    }
}

export default Details