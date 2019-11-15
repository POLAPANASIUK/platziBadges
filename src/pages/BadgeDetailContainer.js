import React from 'react';
import BadgeDetail from './BadgeDetail';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';

class BadgeDetailContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen:false,
  };

  componentDidMount() {
    this.fetchData();
  }
  handleOpenModal = e => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false });
  };

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(
        this.props.match.params.id
      )
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  handleDeleteBadge = async e => {
    this.setState({ loading: true, error: null });

    try {
      await api.badges.remove(this.props.match.params.id);
      this.setState({ loading: false });

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (<BadgeDetail
      onCloseModal={this.handleCloseModal}
      onOpenModal={this.handleOpenModal}
      modalIsOpen={this.state.modalIsOpen}
      onDeleteBadge={this.handleDeleteBadge}
      badge={this.state.data}
    />);
  }
}

export default BadgeDetailContainer;