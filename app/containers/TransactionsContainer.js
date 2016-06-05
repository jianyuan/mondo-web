import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Transactions from '../components/Transactions';
import { authRequired } from '../actions/auth';
import { fetchTransactions } from '../actions/transactions';

class TransactionsContainer extends Component {
  componentWillMount() {
    const {
      accounts: { active },
      auth: { accessToken },
      dispatch
    } = this.props;

    if (accessToken && active) {
      dispatch(fetchTransactions(accessToken, active.id));
    } else {
      dispatch(authRequired());
    }
  }

  render() {
    return <Transactions {...this.props} />;
  }
}

TransactionsContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  accounts: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  transactions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const { accounts, auth, transactions } = state;
  return {
    accounts,
    auth,
    transactions
  };
}

export default connect(mapStateToProps)(TransactionsContainer);
