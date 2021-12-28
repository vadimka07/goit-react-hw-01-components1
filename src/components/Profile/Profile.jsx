import PropTypes from "prop-types";
import { ProfileContainer, ThumbnailAvatarContainer, Name, Tag, Location } from "./Profile.styled";
import ListStatisticProfile from "../ListStatisticProfile/ListStatisticProfile";
import logo from "../../logo.svg"

function Profile( { user } ) {
    return (
        <ProfileContainer>
            <div className="description">
                <ThumbnailAvatarContainer>
                    <img
                        src={ user.avatar }
                        alt={ user.tag }
                        className="avatar"
                    />
                </ThumbnailAvatarContainer>
                <Name>{ user.username }</Name>
                <Tag>{ user.tag }</Tag>
                <Location>{ user.location }</Location>
            </div>
            <ListStatisticProfile stats={ user.stats }/>

        </ProfileContainer>
    )
}

Profile.propTypes = {
    user: PropTypes.shape( {
        avatar: PropTypes.string,
        tag: PropTypes.string,
        username: PropTypes.string.isRequired,
        location: PropTypes.string,
    } )
}

Profile.defaultProps = {
    user: PropTypes.shape( { avatar: logo } )
}
export default Profile;