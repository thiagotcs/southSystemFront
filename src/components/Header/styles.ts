import styled from 'styled-components';

export const Container = styled.header`
  padding: 32px 0;
  background: #28262e;
  /* background: #f1f1f1; */
  /* background: #312E38; */
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 2rem;
  }
  button {
    margin-left: auto;
    background: transparent;
    border: 0;
    svg {
      width: 20px;
      height: 20px;
      color: #999591;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #f4ede8;
    }
    strong {
      color: #ff5100;
    }
  }
`;
