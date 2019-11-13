import React from 'react';

import './styles/Badge.css';

class CharacterCard extends React.Component {

  
  render() {
    return (
      <div className="Badge">
        <img
          className="BadgesListItem__avatar"
          src={this.props.character.image}
          alt={`${this.props.character.name} ${this.props.character.species}`}
        />

     </div>
     

    );
  }
}

export default CharacterCard;