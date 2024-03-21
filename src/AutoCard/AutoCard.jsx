// import React from 'react';

import { useDispatch } from 'react-redux';
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

export const AutoCard = () => {
  const dispatch = useDispatch();
  const showMore = () => {
    const res = dispatch(getCampers());
    console.log(res);
  };
  return (
    <>
      <CardContainer>
        <CardImg src="" alt="" />
        <InformationContainer>
          <NameDiv>
            <Name>Mavericks</Name>
            <Prise>
              <p>€8000.00</p>
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
              4.4(2 Reviews)
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
    </>
  );
};
