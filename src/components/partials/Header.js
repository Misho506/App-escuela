import React from 'react';
import { connect } from 'react-redux';
import "../../assets/styles/partials/header.scss";

import { setUser } from '../../redux/actions/user';

class Header extends React.Component {

  logOut = () => {
    const { history, setUser } = this.props;
    setUser(null);
    history.push('/');
  }

  render() {
    const { userName } = this.props;
    return (
      <div className={`header d-flex align-items-center ${userName ? 'justify-content-between' : 'justify-content-center'} text-white`}>
        {userName && <i className="far fa-user px-3" onClick={() => this.props.history.push("/dashboard")}/>}
        <span className="d-flex ">
          Applicación para escuelas
        </span>
        {userName && <i className="fas fa-sign-out-alt px-3" onClick={this.logOut}/>}
      </div>
    )
  }
}

export default connect(state => ({ userName: state.userReducer.userName }), { setUser })(Header);
