import styled from "@emotion/styled";

const ProfileContainer = styled.div`
  background: #fff;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.37);
  border-radius: 3px;
  padding: 20px;
  margin: 0 auto;
`;

const ThumbnailAvatarContainer = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #f4f4e8;
  img {
    max-width: 100%;
    display: block;
    width: 100%;
    object-fit: contain;
  }
`;

const Name = styled.p`
  font-size: 18px;
`;

const Tag = styled.p`
  font-size: 20px;
  color: #856993;
`;
const Location = styled.p`
  font-size: 18px;
  color: #d4adea;
`;

export {ProfileContainer, ThumbnailAvatarContainer, Name, Tag, Location};