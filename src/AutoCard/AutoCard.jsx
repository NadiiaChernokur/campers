// import React from 'react';

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
import { getCampers } from '../redux/operation';
import { useEffect, useState } from 'react';
import sprite from '../img/svg.svg';

export const AutoCard = () => {
  const dispatch = useDispatch();
  const [array, setArrey] = useState();
  const [favor, setFavor] = useState(false);
  const campersArrey = useSelector((state) => state.campersArray);
  // const isLoading = useSelector((state) => state.isLoading);
  // const error = useSelector((state) => state.error);
  console.log(array);
  const showMore = () => {};

  useEffect(() => {
    if (!array) {
      dispatch(getCampers());
    }

    if (campersArrey) {
      setArrey(campersArrey);
      return;
    }

    return;
  }, [array, campersArrey, dispatch]);
  useEffect(() => {}, []);
  const addToFavirite = () => {
    if (!favor) {
      setFavor(true);
      return;
    }
    if (favor) {
      setFavor(false);
      return;
    }
  };

  const firstLetter = (w) => {
    if (w) {
      return w.charAt(0).toUpperCase() + w.slice(1);
    }
  };

  return (
    <>
      {array?.map((auto) => (
        <CardContainer key={auto.id}>
          <CardImgContainer>
            <CardImg src={auto.gallery?.[0]} alt={auto.name} />
          </CardImgContainer>
          <InformationContainer>
            <NameDiv>
              <Name>{auto.name}</Name>
              <Prise>
                <p>€{auto.price}.00</p>
                <ButtonAddToFavorite onClick={addToFavirite}>
                  {favor ? (
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
            <ShowMore onClick={showMore}>Show more</ShowMore>
          </InformationContainer>
        </CardContainer>
      ))}
    </>
  );
};
