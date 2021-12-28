import PropTypes from "prop-types";
import { ListStatisticProfileContainer, ListStatisticItemProfile } from "./ListStatisticProfile.styled";

function ListStatisticProfile( { stats: { followers, views, likes } } ) {

    return (
        <ListStatisticProfileContainer>
            <ListStatisticItemProfile>
                <span className="label">Followers</span>
                <span className="quantity">{ followers }</span>
            </ListStatisticItemProfile>
            <ListStatisticItemProfile>
                <span className="label">Views</span>
                <span className="quantity">{ views }</span>
            </ListStatisticItemProfile>
            <ListStatisticItemProfile>
                <span className="label">Likes</span>
                <span className="quantity">{ likes }</span>
            </ListStatisticItemProfile>
        </ListStatisticProfileContainer>
    )
}

ListStatisticProfile.propTypes = {
    stats: PropTypes.shape( {
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    } )

}
ListStatisticProfile.defaultProps = {
    stats: PropTypes.shape( {
        followers: 0,
        views: 0,
        likes: 0,
    } )
}
export default ListStatisticProfile;