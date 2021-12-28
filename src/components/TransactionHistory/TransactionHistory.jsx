import PropTypes from 'prop-types';
import { Table } from "./TransactionHistory.styled";

function TransactionHistory( { items } ) {
    return (
        <Table>
            <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
            </thead>
            <tbody>
            { items.map( ( { id, type, amount, currency } ) => (
                <tr key={ id }>
                    <td>{ type }</td>
                    <td>{ amount }</td>
                    <td>{ currency }</td>
                </tr>
            ) ) }
            </tbody>
        </Table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape( {
            id: PropTypes.string.isRequired,
            type: PropTypes.string,
            amount: PropTypes.number,
            currency: PropTypes.string
        } )
    ),
}

export default TransactionHistory;
