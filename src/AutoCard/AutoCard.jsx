// import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  CardContainer,
  CardImg,
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
          <CardImg src="" alt="" />
          <InformationContainer>
            <NameDiv>
              <Name>{auto.name}</Name>
              <Prise>
                <p>{auto.price}</p>
                <button>
                  <svg width="20" height="14">
                    <use></use>
                  </svg>
                </button>
              </Prise>
            </NameDiv>
            <Reviews>
              <ReviewsStar>
                <svg width="20" height="14">
                  <use></use>
                </svg>
                {auto.rating}({} Reviews)
              </ReviewsStar>
              <p>
                <svg width="20" height="14">
                  <use></use>
                </svg>
                Kyiv, Ukraine
              </p>
            </Reviews>
            <Description>
              Embrace simplicity and freedom with the Mavericks panel truck, an
              ideal choice for solo travelers or couples seeking a compact and
              efficient way to explore the open roads.
            </Description>
            <UlList>
              <List>
                <svg width="20" height="14">
                  <use></use>
                </svg>
                <ListText>2 adults</ListText>
              </List>
              <List>
                <svg width="20" height="14">
                  <use></use>
                </svg>
                <ListText>Automatic</ListText>
              </List>
              <List>
                <svg width="20" height="14">
                  <use></use>
                </svg>
                <ListText>Petrol</ListText>
              </List>
              <List>
                <svg width="20" height="14">
                  <use></use>
                </svg>
                <p>Kitchen</p>
              </List>
              <List>
                <svg width="20" height="14">
                  <use></use>
                </svg>
                <ListText>1 beds</ListText>
              </List>
              <List>
                <svg width="20" height="14">
                  <use></use>
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
