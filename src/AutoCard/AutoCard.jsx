import { useDispatch, useSelector } from 'react-redux';
import {
  ButtonAddToFavorite,
  CardContainer,
  CardImg,
  CardImgContainer,
  Description,
  InformationContainer,
  List,
  ListText,
  Name,
  NameDiv,
  Prise,
  Reviews,
  ReviewsStar,
  ShowMore,
  UlList,
  UseHart,
} from './AutoCard.styles';
import { addFavorite, removeFavoriteItem } from '../redux/operation';
import { useEffect, useState } from 'react';
import sprite from '../img/svg.svg';
import ShowMoreCard from '../ShowMoreCard/ShowMoreCard';

export const AutoCard = () => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAuto, setSelectedAuto] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const campersArray = useSelector((state) => state.campersArray);
  const newFilterArray = useSelector((state) => state.newFilterArray);

  console.log(newFilterArray);
  const showMore = (auto) => {
    setSelectedAuto(auto);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

    setFavorites(storedFavorites);
  }, []);

  const addToFavirite = (id) => {
    const updatedFavorites = [...favorites];
    const index = updatedFavorites.indexOf(id);
    if (index !== -1) {
      updatedFavorites.splice(index, 1);
      dispatch(removeFavoriteItem(id));
    } else {
      updatedFavorites.push(id);
      dispatch(addFavorite(id));
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const firstLetter = (w) => {
    if (w) {
      return w.charAt(0).toUpperCase() + w.slice(1);
    }
  };
  const onClose = () => {
    return setIsModalOpen(false);
  };
  const isFavorite = (id) => favorites.includes(id);
  return (
    <>
      {(newFilterArray.length > 0 ? newFilterArray : campersArray)?.map(
        (auto) => (
          <CardContainer key={auto._id}>
            <CardImgContainer>
              <CardImg src={auto.gallery?.[0]} alt={auto.name} />
            </CardImgContainer>
            <InformationContainer>
              <NameDiv>
                <Name>{auto.name}</Name>
                <Prise>
                  <p>€{auto.price},00</p>
                  <ButtonAddToFavorite onClick={() => addToFavirite(auto._id)}>
                    {isFavorite(auto._id) ? (
                      <svg width="24" height="24">
                        <UseHart href={`${sprite}#hearts`}></UseHart>
                      </svg>
                    ) : (
                      <svg width="24" height="24">
                        <UseHart href={`${sprite}#heart`}></UseHart>
                      </svg>
                    )}
                  </ButtonAddToFavorite>
                </Prise>
              </NameDiv>
              <Reviews>
                <ReviewsStar>
                  <svg width="20" height="14">
                    <use href={`${sprite}#Rating`}></use>
                  </svg>
                  {auto.rating}({auto.reviews?.length} Reviews)
                </ReviewsStar>
                <p>
                  <svg width="20" height="14">
                    <use href={`${sprite}#map`}></use>
                  </svg>
                  {auto.location}
                </p>
              </Reviews>
              <Description>{auto.description}</Description>
              <UlList>
                <List>
                  <svg width="20" height="20">
                    <use href={`${sprite}#Users`}></use>
                  </svg>
                  <ListText>{auto.adults} adults</ListText>
                </List>
                <List>
                  <svg width="20" height="20">
                    <use href={`${sprite}#nets`}></use>
                  </svg>
                  <ListText>{firstLetter(auto.transmission)}</ListText>
                </List>
                <List>
                  <svg width="20" height="20">
                    <use href={`${sprite}#tank`}></use>
                  </svg>
                  <ListText>{firstLetter(auto.engine)}</ListText>
                </List>
                <List>
                  <svg width="20" height="20">
                    <use href={`${sprite}#Kitchen`}></use>
                  </svg>
                  <p>Kitchen</p>
                </List>
                <List>
                  <svg width="20" height="20">
                    <use
                      href={`${sprite}#bad`}
                      width="20"
                      height="20"
                      fill="none"
                    ></use>
                  </svg>
                  <ListText>{auto.details?.beds} beds</ListText>
                </List>
                <List>
                  <svg width="20" height="20">
                    <use href={`${sprite}#blow`} width="20" height="20"></use>
                  </svg>
                  <ListText>AC</ListText>
                </List>
              </UlList>
              <ShowMore onClick={() => showMore(auto)}>Show more</ShowMore>
            </InformationContainer>
          </CardContainer>
        )
      )}
      {isModalOpen && <ShowMoreCard onClose={onClose} auto={selectedAuto} />}
    </>
  );
};
