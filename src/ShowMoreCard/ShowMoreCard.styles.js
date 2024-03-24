import styled from 'styled-components';
export const ModalBackground = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 18, 19, 0.4);
`;

export const ModalContainer = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 40px;
  width: 982px;
  height: 720px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
    height: 264px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: #d9d9d9;
  }
`;

export const ModalName = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 24px;
  color: #101828;
  margin-bottom: 10px;
`;
export const CenterDivButton = styled.div`
  display: flex;
`;
export const OnCloseButton = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background: none;
`;
export const ReviewsModal = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #101828;
`;
export const ModalPrice = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: #101828;
  margin-bottom: 24px;
`;
export const ModalImg = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const ModalDescription = styled.p`
  margin-bottom: 44px;
`;
export const ModalButtonsDiv = styled.div`
  display: flex;
  gap: 40px;
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: #101828;
  /* margin-bottom: 24px; */
`;

export const ModalButton = styled.button`
  background: none;
  border: none;
  padding-bottom: 24px;
`;
export const BottomOfTheModal = styled.div`
  display: flex;
  gap: 24px;
  border-top: 1px solid rgba(16, 24, 40, 0.2);
  padding-top: 44px;
`;

export const ShowModalImg = styled.img`
  width: 290px;
  height: 310px;
`;
