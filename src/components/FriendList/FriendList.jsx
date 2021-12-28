import PropTypes from "prop-types";
import { FriendListContainer, FriendListItem, ContainerImage, Image, Status, Description } from "./FriendList.styled";

function FriendList( { friends } ) {
    return (
        <FriendListContainer>
            {
                friends.map( ( { avatar, name, isOnline, id } ) => (
                    <FriendListItem key={ id }>
                        <Status isOnline={ isOnline }></Status>
                        <ContainerImage>
                            <Image src={ avatar } alt="User avatar" width="48"/>
                        </ContainerImage>
                        <Description>{ name }</Description>
                    </FriendListItem>
                ) )
            }
        </FriendListContainer>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        })
    )
}

export default FriendList;