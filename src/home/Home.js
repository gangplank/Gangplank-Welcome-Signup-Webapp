import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	Button,
	Input, RadioGroup,
	RadioButton
} from 'react-toolbox';

const style = {
	button: {
		width: '100%',
		margin: '10px auto',
		fontSize: '1.3em'
	},
	form: {

	},
	page: {
		width: '700px',
		margin: '0px auto',
		background: 'rgba(250,250,250,0.8)',
		padding: '40px'
	}
};

class Home extends Component {
	componentWillMount() {

	}

	handleChange(name, value) {

	}

	render() {


		return (
      <div style={style.page}>
      	<h1>What Brings You Here?</h1>
				<form style={style.form}>
					<RadioGroup name='reason' value='2' onChange={this.handleChange}>
		        <RadioButton label='Meeting/Event' value='thewalkingdead'/>
		        <RadioButton label='Coworking' value='fromhell' />
		        <RadioButton label='Do Not Know...yet' value='vvendetta'/>
		      </RadioGroup>

					<Input type='email' label='Email address' icon='email' value='' onChange={this.handleChange.bind(this, 'email')} />

					<Button icon='add' label='Submit' style={style.button} raised primary />
				</form>

      </div>
		);
	}
}

Home.propTypes = {

};

function mapStateToProps(state) {
	return {
		i18n: state.i18n.copy[state.i18n.ui.current],

	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({

	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
