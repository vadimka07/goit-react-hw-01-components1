import PropTypes from "prop-types";
import { StatisticsSection } from "./Statistics.styled";
import ListStatistics from "../ListStatistics/ListStatistics";

function Statistics( { title, stats } ) {
    return (
        <StatisticsSection>
            {
                title && ( <h2 className="title">{ title }</h2> )
            }
            <ListStatistics stats={ stats }/>
        </StatisticsSection>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array
}

export default Statistics;