import React from 'react';
import './contact.css';
import PropTypes from 'prop-types';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: this.props.isConnected,
    };
  }

  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.image} alt="avatar" />
        <div>
          <h4 className="name">{this.props.name}</h4>
          <div className="status">
            <span className={this.state.online ? "status-online" : "status-offline"}
              onClick={event => {
                const newStatus = !this.state.online;
                this.setState({ online: newStatus });
              }}></span>
            <p className="status-text"
              onClick={event => {
                const newStatus = !this.state.online;
                this.setState({ online: newStatus });
              }}>{this.state.online ? "online" : "offline"}</p>
          </div>
        </div>
      </div>
    );
  };
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isConnected: PropTypes.bool.isRequired,
};

export default Contact;