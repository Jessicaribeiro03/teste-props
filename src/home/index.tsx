import TextComponent from "./component/text-component";
import { Component} from "react";

interface Props{
    rosa: string;
    alert: any;
}

export default class HomeView extends Component <Props>{

    render(){
        return(
            <div style={{backgroundColor: '#e03131' }}>
                <h1> Magazine.com </h1>
                <TextComponent alert={this.props.alert} rosa = {this.props.rosa} />
            </div>
        )
    }

}