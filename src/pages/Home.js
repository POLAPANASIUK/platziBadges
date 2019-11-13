import React from 'react';
import './styles/Home.css';
import astronauts from '../images/astronauts.svg';
import confLogo from '../images/platziconf-logo.svg';
import { Link } from 'react-router-dom';


class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="Home row">
                    <div className="col-6">
                        <img
                            className="Home__logo"
                            src={confLogo}
                            alt="confLogo"
                        />

                        <h1 className="text-uppercase">Print your Badges</h1>
                        <h4 className="text-cursive">The easiest way to manage your conference</h4>
                        <div className="Badges__buttons">
                            <Link to="/badges" className="btn btn-primary">
                            New Badge
                            </Link>
                        </div>                    
                    </div>
                    
                    <div className="col-6">
                        <img
                        className="Home__astronauts"
                        src={astronauts}
                        alt="astronauts"
                        />
                    </div>
                </div>
            </React.Fragment>
            );
    }

}
export default Home;