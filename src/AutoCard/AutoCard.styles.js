import styled from 'styled-components';
export const CardContainer = styled.div`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  padding: 24px;
  width: 888px;
  height: 358px;
  background: #fff;
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
`;

export const CardImg = styled.img`
  border-radius: 10px;
  width: 290px;
  height: 310px;
`;
export const CardImgContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const InformationContainer = styled.div`
  width: 526px;
  height: 310px;
  display: flex;
  flex-direction: column;
`;

export const NameDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;
export const Name = styled.p`
  font-weight: 600;
  font-size: 24px;
  color: #101828;
  line-height: 125%;
`;

export const Prise = styled.div`
  display: flex;
  gap: 10px;
  font-weight: 600;
  font-size: 24px;
  align-items: center;
  color: #101828;
  line-height: 125%;
`;
export const Reviews = styled.div`
  display: flex;
  margin-bottom: 24px;
  gap: 16px;
  font-weight: 400;
  font-size: 16px;
  color: #101828;
  text-decoration-skip-ink: none;
`;
export const Description = styled.p`
  font-size: 16px;

  width: 100%;
  max-width: 526px;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 16px;
  /* display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  overflow-wrap: break-word; */
`;
export const List = styled.li`
  display: flex;
  gap: 8px;
  border-radius: 100px;
  padding: 12px 18px;
  align-items: center;
  height: 44px;
  background: #f2f4f7;
`;

export const UlList = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 24px;
  font-weight: 500;
  font-size: 16px;
  color: #101828;
`;
export const ShowMore = styled.button`
  border-radius: 200px;
  padding: 16px 40px;
  width: 166px;
  height: 56px;
  background: #e44848;
  border: none;
  color: #fff;
  font-weight: 500;
  font-size: 16px;

  letter-spacing: -0.01em;
`;
export const ReviewsStar = styled.p`
  font-weight: 400;
  font-size: 16px;

  text-decoration: underline;
  text-decoration-skip-ink: none;
`;
export const ListText = styled.p`
  font-weight: 500;
  font-size: 16px;
`;
export const ButtonAddToFavorite = styled.button`
  background: none;
  border: none;
`;
export const UseHart = styled.use`
  background: aqua;
  background-color: aqua;
  fill: aqua;
  /* filter: blur(aqua);  */
`;
