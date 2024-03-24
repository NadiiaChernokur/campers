import { useEffect, useState } from 'react';
import { AutoCard } from '../AutoCard/AutoCard';
import { Filter } from '../Filter/Filter';
import { CampersButton, FlexDiv, MainContainer } from './CampersPage.styles';
import { useDispatch, useSelector } from 'react-redux';
import { emptyArray, getCampers, totalCampers } from '../redux/operation';

const CampersPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isArray, setIsArray] = useState(false);
  const [buttonDisable, setbuttonDisable] = useState(false);
  const totalArrey = useSelector((state) => state.totalCampers);
  const campersArrey = useSelector((state) => state.campersArray);

  const LoadMore = () => {
    if (campersArrey.length + 4 >= totalArrey.length) {
      setbuttonDisable(true);
    }
    setPage((prev) => prev + 1);
    dispatch(getCampers(page));
  };

  useEffect(() => {
    if (!isArray) {
      dispatch(emptyArray());
      setIsArray(true);
      return;
    }

    setPage((prev) => prev + 1);
    dispatch(getCampers(page));
    dispatch(totalCampers());
    return;
  }, [dispatch, isArray]);

  return (
    <>
      <MainContainer>
        <Filter />
        <FlexDiv>
          <AutoCard page={page} />
          {buttonDisable ? (
            <CampersButton onClick={LoadMore} style={{ display: 'none' }}>
              Load more
            </CampersButton>
          ) : (
            <CampersButton onClick={LoadMore}>Load more</CampersButton>
          )}
        </FlexDiv>
      </MainContainer>
    </>
  );
};
export default CampersPage;
