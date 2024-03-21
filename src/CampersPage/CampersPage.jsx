import { AutoCard } from '../AutoCard/AutoCard';
import { Filter } from '../Filter/Filter';
import { FlexDiv, MainContainer } from './CampersPage.styles';

const CampersPage = () => {
  return (
    <>
      <MainContainer>
        <Filter />
        <FlexDiv>
          <AutoCard />
        </FlexDiv>
      </MainContainer>
    </>
  );
};
export default CampersPage;
