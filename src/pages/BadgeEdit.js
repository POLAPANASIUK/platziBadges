import React from 'react';

import './styles/Badge.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import header from '../images/platziconf-logo.svg';
import api from '../api';
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'


class BadgeEdit extends React.Component {
  state = {
    loading: true,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async e => {
    this.setState({
      loading: true,
      error: null
    })
    try {
      const data = await api.badges.read(
        this.props.match.params.id
      )
      this.setState({
        loading: false,
        form: data      
      })
    } catch (error) {
      this.setState({
        loading: false,
        error: error      
      })
    }
  }
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.update(this.props.match.params.id, this.state.form);
      this.setState({ loading: false });
      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading===true) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    return (
      <div>
        <div className="Badge__hero">
          <img className="img-fluid Badge__hero-image" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                twitter={this.state.form.twitter || 'TWITTER'}
                jobTitle={this.state.form.jobTitle || 'JOBTITLE'}
                email={this.state.form.email || 'EMAIL'}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>

            <div className="col-6">
            <h1>Edit Attendant</h1>
              <BadgeForm
                onChange = {this.handleChange}
                onSubmit = {this.handleSubmit}
                formValues = {this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeEdit;