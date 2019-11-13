import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';

class Badges extends React.Component {
  state = {
    nextPage: 1,
    loading: true,
    error: null,
    data: {
      results:[]
    },
  };
  constructor(props) {
    super(props);
    console.log('1. constructor()');
  }
  componentDidMount() {
    console.log('3. componentDidMount()');
    this.fetchCharacters();
  }
  fetchCharacters = async() => {
    console.log('x. fetchingCharacters...');
    this.setState({
      loading: true,
      error:null
    });
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`)
      const data = await response.json();
      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results),
        },
        nextPage: this.state.nextPage+1,
      });
    }
    catch (error) {
      this.setState({
        loading: false,
        data: error,
      });
    }   
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('5. componentDidUpdate()');
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });

    console.log({
      props: this.props,
      state: this.state,
    });
  }

  componentWillUnmount() {
    console.log('6. componentWillUnmount');
    clearTimeout(this.timeoutId);
  }
  render() {
    return (
      <React.Fragment>

        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <BadgesList badges={this.state.data.results} />
          { !this.props.loading &&(
          <button className="btn btn-success" onClick={()=>this.fetchCharacters()}>Cargar más personajes</button>
        )}
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;