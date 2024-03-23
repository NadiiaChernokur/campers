import { Field, Form } from 'formik';
import styled from 'styled-components';
export const BookingContainer = styled.div`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 24px;
  width: 448px;
`;
export const Booking = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: #101828;
  margin-bottom: 8px;
`;
export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #475467;
  margin-bottom: 24px;
`;
export const BookingForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
export const BookingInput = styled(Field)`
  border-radius: 10px;
  border: none;
  padding: 18px 18px;
  width: 400px;
  height: 56px;
  background: #f7f7f7;
  font-weight: 400;
  font-size: 16px;
`;
export const BookingInputComent = styled.textarea`
  border-radius: 10px;
  border: none;
  padding: 18px 18px;
  width: 400px;
  min-height: 114px;
  background: #f7f7f7;
  font-weight: 400;
  font-size: 16px;
`;
export const BookingInputData = styled(Field)`
  border-radius: 10px;
  border: none;
  padding: 18px 18px;
  width: 400px;
  height: 56px;
  background: #f7f7f7;
  font-weight: 400;
  font-size: 16px;
  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
`;
export const BookingButton = styled.button`
  border-radius: 200px;
  padding: 16px 60px;
  width: 160px;
  height: 56px;
  background: #e44848;
  color: #fff;
  border: none;
`;
