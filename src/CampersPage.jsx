import { AutoCard } from './AutoCard/AutoCard';
import { Filter } from './Filter/Filter';
import { MainContainer } from './Header/Header.styles';

const CampersPage = () => {
  return (
    <>
      <MainContainer>
        <AutoCard />

        <Filter />
      </MainContainer>
    </>
  );
};
export default CampersPage;
