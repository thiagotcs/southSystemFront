import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
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
export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
`;

export const Schedule = styled.div`
  flex: 1;

  h1 {
    font-size: 36px;
    color: #ff5100;

    a {
      margin-left: auto;
      background: transparent;
      border: 0;
      margin: 10px;
      text-decoration: none;

      svg {
        width: 20px;
        height: 20px;
        color: #999591;

        &:hover {
          color: #ff5100;
        }
      }
    }
  }
`;

export const Card = styled.div`
  margin-top: 40px;

  > strong {
    color: #999591;
    font-size: 20px;
    font-weight: 400;
  }
  > div {
    background: #3e3b47;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 10px;
    position: relative;
    justify-content: space-between;

    &::before {
      position: absolute;
      height: 80%;
      width: 1px;
      left: 0;
      top: 10%;
      content: '';
      background: #ff5100;
    }

    strong {
      margin-left: 24px;
      color: #fff;
    }
  }
`;

export const CardInfo = styled.div`
  display: flex;
  img {
    width: 80px;
    height: 80px;
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
      margin-left: 0;
    }
  }
`;

export const CardBtn = styled.div`
  a {
    margin-left: auto;
    background: transparent;
    border: 0;
    margin: 10px;
    text-decoration: none;

    svg {
      width: 20px;
      height: 20px;
      color: #999591;

      &:hover {
        color: #ff5100;
      }
    }
  }
`;
