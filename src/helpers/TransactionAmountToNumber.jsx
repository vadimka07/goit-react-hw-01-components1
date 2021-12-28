export default function TransactionAmountToNumber( transactions ) {
    return transactions.reduce( ( acc, transaction ) => {
        const amount = Number( transaction["amount"] );
        acc.push( { ...transaction, amount } );
        return acc;
    }, [] );
}