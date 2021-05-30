import './App.css';
import react,{Component} from "react";
import Question from "./components/Question";
import data from "./data/index";
class App extends react.Component {
  constructor(props){
    super(props);
    this.state={
      data:[]
    };
  }

  componentDidMount(){
    this.setState({
      data
    });
  }
  renderQuestion(){
    return this.state.data.map(e=>{
      return  <Question key={e.id} data={e} />
    })

  }
  render(){
    const {data}=this.state;
    if(data.length==0){
      return (
        <div className="App">
          <div className="Loading"><p>Loaing....</p></div>
        </div>
        );
    }else{
      return (
        <div className="App">
          <div className="container">
            <div className="titleLeft">
                <p>Question And Answers About Login</p>
            </div>
            <div className="listQuestion">
              {this.renderQuestion()}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
