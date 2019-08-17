import React from 'react';
import { connect } from 'react-redux';
import { NotificationManager } from 'react-notifications';

import { setUser } from '../../redux/actions/user';

class Login extends React.Component {
  state = {
    userName: '',
    password: ''
  }

  handleChange = (field, value) => {
    this.setState({
      [field]: value,
    })
  }

  login = () => {
    const { userName, password } = this.state;
    const { setUser, history } = this.props;
    if (userName, password) {
      setUser(userName);
      NotificationManager.success('Ingreso exitoso.', 'EXITO', 5000, () => {
      });
      history.push('/dashboard');
    } else {
      NotificationManager.error('Por favor verificar credenciales.', 'ERROR', 5000, () => {
      });
    }
  }

  render() {
    const { userName, password } = this.state;
    return (
      <div className="pt-5 mt-5 d-flex flex-column align-items-center justify-content-center">
        <div className="d-flex flex-column">
          <label>Usuario: </label>
          <input className="rounded border-1 bg-light " value={userName} onChange={event => this.handleChange('userName', event.target.value)} />
        </div>

        <div className="d-flex flex-column">
          <label>Password: </label>
          <input className="rounded border-1 bg-light " value={password} onChange={event => this.handleChange('password', event.target.value)} />
        </div>
        <button className="mt-4 px-4 btn btn-info" onClick={this.login}>Login</button>
      </div>
    )
  }
}

export default connect(null, { setUser })(Login);

