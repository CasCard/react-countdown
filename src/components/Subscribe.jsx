import React,{Component} from "react"
import "../styles/Subscribe.css"
class Subscribe extends Component{
    state={
        email:""

    }

    handleSubmit= e => {
        e.preventDefault()
    }
    handleChange=e=>{
        this.setState({email:e.target.value.trim()});
    }

    render(){
        const {placeholder,buttonText}=this.props;
        return(
            <form className="subscribe" onSubmit={this.handleSubmit}>
                <input className="subscribe-email"
                    name="email"
                    type="email"
                    placeholder={placeholder}
                    onChange={this.handleChange}
                    value={this.state.email}
                />
                <button className="subscribe-button" type="submit">{buttonText}</button>
            </form>
        );
    }
}
export default Subscribe