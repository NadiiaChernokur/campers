import styled from 'styled-components';

export const ReviewsName = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const Letter = styled.div`
  border-radius: 60px;
  width: 60px;
  height: 60px;
  background: #f2f4f7;
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  padding: 15px;
  color: #e44848;
`;
export const ReviewsContainer = styled.div`
  width: 430px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 133%;
  color: #101828;
`;
export const Coment = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #475467;
`;
export const RatingsStar = styled.div`
  display: flex;
  gap: 3px;
`;
