import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { Image, Table } from 'react-bootstrap';

class TransactionTableRow extends Component {
  render() {
    const { amount, currency, category, description, merchant } = this.props;
    const displayDescription = merchant ? merchant.name : description;
    return (
      <tr>
        <td className="col-md-1">{merchant ? <Image src={merchant.logo} width="25" height="25" /> : null}</td>
        <td>{displayDescription}</td>
        <td>{category}</td>
        <td>{currency} {amount / 100}</td>
      </tr>
    );
  }
}

TransactionTableRow.propTypes = {
  amount: PropTypes.number,
  currency: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  merchant: PropTypes.object
};

class Transactions extends Component {
  render() {
    const { transactions: { items }} = this.props;
    const transactions = _.chain(items).sortBy('created').reverse().value();
    return (
      <div>
        <h1>Transactions</h1>
        <Table responsive>
          <tbody>
            {transactions.map(function(transaction) {
              return <TransactionTableRow key={transaction.id} {...transaction} />;
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

Transactions.propTypes = {
  dispatch: PropTypes.func.isRequired,
  transactions: PropTypes.object.isRequired
};

export default Transactions;
