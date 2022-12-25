import styled from "styled-components";

export const CardWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 40px;
  max-width: 1300px;
  margin: 60px auto;
  padding: 0 30px;
`;
export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
export const CardImg = styled.div`
  flex: 0 1 35%;
  & > img {
    min-height: 300px;
    object-fit: cover;
    border-radius: 10px;
  }
  @media screen and (min-width: 769px) {
    & > img {
      min-height: 400px;
    }
  }
`;

export const CardText = styled.div`
  flex: 0 1 60%;
  & > h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    color: var(--color-black);
  }
`;
export const CardLocation = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.17em;
  color: var(--color-black);
  display: flex;
  & > p {
    margin: 0 10px 0 5px;
  }
  & .map {
    letter-spacing: 0em;
    color: #918e9b;
    text-decoration-line: underline;
  }
`;
export const Date = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 10.24px;
  line-height: 12px;
  color: var(--color-black);
  margin: 10px 0;
`;
export const Intro = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 10.24px;
  line-height: 150%;
  color: var(--color-black);
`;
