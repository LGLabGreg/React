import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = ({ startLogin }) => {
 return (
   <div>
      <button
        className="btn btn-primary"
        type="button"
        onClick={startLogin}
      >Login</button>
  </div>
 )
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(null, mapDispatchToProps)(LoginPage);