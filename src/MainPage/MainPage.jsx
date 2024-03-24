import {
  MainPageContainer,
  MainPageImg,
  MainPageText,
} from './MainPage.styles';
import img from '../img/auuuto.svg.png';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  const handleImageClick = () => {
    navigate('/campers');
  };
  return (
    <MainPageContainer>
      <MainPageText>
        Our site offers a wide selection of campers. Click
        <MainPageImg
          src={img}
          alt="auto"
          onClick={handleImageClick}
        ></MainPageImg>
        to view
      </MainPageText>
    </MainPageContainer>
  );
};
export default MainPage;
