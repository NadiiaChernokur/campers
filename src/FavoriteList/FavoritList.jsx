import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavoriteItem } from '../redux/operation';
import {
  ButtonAddToFavorite,
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
} from '../AutoCard/AutoCard.styles';
import sprite from '../img/svg.svg';
import ShowMoreCard from '../ShowMoreCard/ShowMoreCard';
import { FavoriteCardContainer } from './FavoritList.styles';
import { EmptyFavoriteList } from './EmptyFavoriteList';
const Favorits = () => {
  const [favorites, setFavorites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAuto, setSelectedAuto] = useState(null);
  const [array, setArray] = useState([]);

  const favArray = useSelector((state) => state.favoriteArray);
  const dispatch = useDispatch();

  useEffect(() => {
    setArray(favArray);
  }, [favArray]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

    setFavorites(savedFavorites);
    return;
  }, []);

  const firstLetter = (w) => {
    if (w) {
      return w.charAt(0).toUpperCase() + w.slice(1);
    }
  };

  const showMore = (auto) => {
    setSelectedAuto(auto);
    setIsModalOpen(true);
  };

  const onClose = () => {
    return setIsModalOpen(false);
  };

  const removeToFavirite = (id) => {
    dispatch(removeFavoriteItem(id));
    const updatedFavorites = favorites.filter((nummer) => nummer !== id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <>
      {array.length > 0 ? (
        array?.map((auto) => (
          <FavoriteCardContainer key={auto._id}>
            <CardImgContainer>
              <CardImg src={auto.gallery?.[0]} alt={auto.name} />
            </CardImgContainer>
            <InformationContainer>
              <NameDiv>
                <Name>{auto.name}</Name>
                <Prise>
                  <p>€{auto.price}.00</p>
                  <ButtonAddToFavorite
                    onClick={() => removeToFavirite(auto._id)}
                  >
                    <svg width="24" height="24">
                      <UseHart href={`${sprite}#hearts`}></UseHart>
                    </svg>
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
          </FavoriteCardContainer>
        ))
      ) : (
        <EmptyFavoriteList />
      )}
      {isModalOpen && <ShowMoreCard onClose={onClose} auto={selectedAuto} />}
    </>
  );
};
export default Favorits;
