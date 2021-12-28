import { ListItems, ListItem } from "./ListStatistics.styled";
import PropTypes from "prop-types";

function ListStatistics( { stats } ) {
    return (
        <ListItems>
            { stats.map( ( { id, label, percentage } ) => (
                <ListItem key={ id }>
                    <span className="label">{ label }</span>
                    <span className="percentage">{ percentage }%</span>
                </ListItem>
            ) ) }
        </ListItems>
    )
}

ListStatistics.propType = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}


export default ListStatistics;