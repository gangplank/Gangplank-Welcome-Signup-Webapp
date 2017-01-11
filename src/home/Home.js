import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	Button
} from 'react-toolbox';

const style = {
	button: {
		width: '100%',
		margin: '10px auto'
	}
};

class Home extends Component {
	componentWillMount() {

	}

	render() {


		return (
      <div>
      	<h1>What Brings You Here?</h1>
				<Button icon='add' label='Meeting/Event' style={style.button} raised primary />
				<Button icon='add' label='Coworking' style={style.button} raised primary />
				<Button icon='add' label='Do Not Know... yet' style={style.button} raised primary />


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
