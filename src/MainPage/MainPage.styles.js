import styled from 'styled-components';
import img from '../img/stock-vector-vector-seamless-pattern-with-outline-cartoon-cars.jpg';
export const MainPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  padding: 0 500px;
  background-image: url(${img});

  background-position: center;
`;
export const MainPageText = styled.p`
  font-weight: 600;
  font-size: 35px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  color: #f30930;
  filter: contrast(4.5);
`;
export const MainPageImg = styled.img`
  width: 35px;
  height: 35px;
  display: inline;
  margin: 0 14px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;
