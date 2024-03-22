import styled from 'styled-components';
export const CheckboxInput = styled.input`
  position: absolute;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
export const CheckboxLabel = styled.label`
  cursor: pointer;
  position: relative;
  display: block;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 17px 12px;
  width: 113px;
  height: 95px;
  text-align: center;

  ${CheckboxInput}:checked + & {
    background-color: green;
    mix-blend-mode: multiply;
  }
`;
export const FormContainer = styled.form`
  width: 360px;
`;
export const Equipment = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  border-top: 1px solid rgba(16, 24, 40, 0.2);
  padding-top: 24px;
  margin-bottom: 32px;
  color: #101828;
`;
export const LocationDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const LocationInput = styled.input`
  border-radius: 10px;
  padding: 18px 218px 18px 18px;
  width: 100%;
  height: 56px;
  background: #f7f7f7;

  border: none;
  margin-bottom: 32px;
`;
export const Filters = styled.p`
  margin-bottom: 14px;
`;
export const VehicleEquipment = styled.p`
  font-weight: 600;
  font-size: 20px;
  color: #101828;
  margin-bottom: 24px;
`;
export const Type = styled.p`
  margin-bottom: 24px;
`;
export const SearchButton = styled.button`
  border-radius: 200px;
  border: none;
  padding: 16px 60px;
  width: 173px;
  height: 56px;
  background: #e44848;
  color: #fff;
`;
export const Svg = styled.svg`
  width: 15px;
`;
