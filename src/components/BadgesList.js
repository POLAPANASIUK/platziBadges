import React from 'react';

import './styles/BadgesList.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"
          src={this.props.badge.image}
          alt={`${this.props.badge.name} ${this.props.badge.species}`}
        />

        <div>
          <strong>
            {this.props.badge.name} {this.props.badge.gender}
          </strong>
          <br /><span style={{ color: "#00acee" }}> <FontAwesomeIcon icon={faTwitter} /> @{this.props.badge.name}</span>
          <br />
          {this.props.badge.species}
        </div>
      </div>
    );
  }
}

class BadgesList extends React.Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <BadgesListItem badge={badge} />
              </li>
            );
          })}
        </ul>
        { this.props.loading &&(
          <div>Cargando..</div>
        )}

      </div>
    );
  }
}

export default BadgesList;