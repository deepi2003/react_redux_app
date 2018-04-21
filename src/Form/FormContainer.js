import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {saveUser} from './actions';

import Form from './Form';

class FormContainer extends React.Component {

    saveButtonClick(name) {
        this.props.saveUser(name);
    }

    render() {
        return (<Form users={this.props.users} saveButtonClick={this.props.saveUser}/> );
    }

}

function mapStatetoProps(state, ownProps) {
    return {
        users: state.users
    }
}

function mapDispatchtoProps(dispatch) {
    return bindActionCreators({saveUser: saveUser}, dispatch);

}

export default connect(mapStatetoProps, mapDispatchtoProps)(FormContainer);