import react,{Component} from 'react';

class Question extends react.Component {
	constructor(props){
		super(props);
		this.state={
			answersStatus:false
		}
	}

	changeStatusAnswers=()=>{
		this.setState({
			answersStatus:!this.state.answersStatus
		});
	}
	render(){
		const {data}=this.props;
		const {answersStatus}=this.state;
		return (
			<>
				<div className="NameQuestion">
					<div className="Name_button">
						<div className="titleName">
							<p>{data.title}</p>
							
						</div>
						<div className="buttonShow">
							<button onClick={()=>this.changeStatusAnswers()}>{answersStatus?"-":"+"}</button>
						</div>
					</div>
					{(answersStatus)?(
						<div className="contentdetail">
							<p>{data.info}</p>
						</div>
									):("")
					}
				</div>
			</>
			);
	}
}

export default Question;