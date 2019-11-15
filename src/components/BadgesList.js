import React from 'react';

import './styles/BadgesList.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {Link} from 'react-router-dom';
import Gravatar from './Gravatar' ;


class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        {/* por si no se usa avatar, podemos agregar la imagen asi 
        <img
          className="BadgesListItem__avatar"
          src={this.props.badge.avatarUrl}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        /> */}
        <Gravatar className="BadgesListItem__avatar" email={this.props.badge.email} />
        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br /><span style={{ color: "#00acee" }}> <FontAwesomeIcon icon={faTwitter} /> @{this.props.badge.twitter}</span>
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
    );
    }
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <Link
                  className="text-reset text-decoration-none"
                  to={`/badges/${badge.id}`}
                >
                  <BadgesListItem badge={badge} />
                </Link>              </li>
            );
          })}
        </ul>
      </div>
      
    );
  }
}

export default BadgesList;