import styled from 'styled-components';

export const Container = styled.header`
  padding: 32px 0;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 80px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #999591;
      width: 20px;
      height: 20px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  line-height: 24px;

  span {
    color: #f4ede8;
  }

  a {
    text-decoration: none;

    strong {
      color: #ff9000;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;
