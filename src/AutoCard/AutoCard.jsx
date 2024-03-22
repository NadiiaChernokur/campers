// import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
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
} from './AutoCard.styles';
import { getCampers } from '../redux/operation';
import { useEffect, useState } from 'react';
import sprite from '../img/LinkedSprite.svg';

export const AutoCard = () => {
  const dispatch = useDispatch();
  const [array, setArrey] = useState();
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
                <p>{auto.price}</p>
                <button>
                  <svg width="20" height="14">
                    <use href={`${sprite}#heart`} fill="none"></use>
                  </svg>
                </button>
              </Prise>
            </NameDiv>
            <Reviews>
              <ReviewsStar>
                <svg width="20" height="14">
                  <use href={`${sprite}#Users`}></use>
                </svg>
                {auto.rating}({auto.reviews?.length} Reviews)
              </ReviewsStar>
              <p>
                <svg width="20" height="14">
                  <use href={`${sprite}#map`} fill="none"></use>
                </svg>
                {auto.location}
              </p>
            </Reviews>
            <Description>{auto.description}</Description>
            <UlList>
              <List>
                <svg width="20" height="14">
                  <use href={`${sprite}#Users`}></use>
                </svg>
                <ListText>{auto.adults} adults</ListText>
              </List>
              <List>
                <svg width="20" height="14">
                  <use href={`${sprite}#nets`} fill="none"></use>
                </svg>
                <ListText>{auto.transmission}</ListText>
              </List>
              <List>
                <svg width="20" height="14">
                  <use href={`${sprite}#camper`} fill="none"></use>
                </svg>
                <ListText>{auto.engine}</ListText>
              </List>
              <List>
                <svg width="20" height="14">
                  <use href={`${sprite}#Kichen`} fill="none"></use>
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
                <svg width="20" height="14">
                  <use
                    href={`${sprite}#blow`}
                    fill="none"
                    width="20"
                    height="14"
                  ></use>
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
