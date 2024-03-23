import {
  BottomOfTheModal,
  ModalBackground,
  ModalButton,
  ModalButtonsDiv,
  ModalContainer,
  ModalDescription,
  ModalImg,
  ModalName,
  ModalPrice,
  OnCloseButton,
  ReviewsModal,
  ShowModalImg,
} from './ShowMoreCard.styles';
import sprite from '../img/svg.svg';
import Features from '../Features/Features';

import { useState } from 'react';
import BookForm from '../BookForm/BookForm';
import Reviews from '../Reviews/Reviews';

const ShowMoreCard = ({ onClose, auto }) => {
  const [features, setFeatures] = useState(true);
  const [reviews, setReviews] = useState(false);
  const onFeatures = () => {
    setFeatures(true);
    setReviews(false);
  };
  const onReviews = () => {
    setReviews(true);
    setFeatures(false);
  };
  return (
    <ModalBackground>
      <ModalContainer key={auto.id}>
        <ModalName>
          <p>{auto.name}</p>
          <OnCloseButton onClick={onClose}>
            <svg width="32" height="32">
              <use href={`${sprite}#close`} width="32" height="32"></use>
            </svg>
          </OnCloseButton>
        </ModalName>
        <ReviewsModal>
          <div>
            <svg width="20" height="14">
              <use href={`${sprite}#Rating`}></use>
            </svg>
            {auto.rating}({auto.reviews?.length} Reviews)
          </div>
          <p>
            <svg width="20" height="14">
              <use href={`${sprite}#map`}></use>
            </svg>
            {auto.location}
          </p>
        </ReviewsModal>
        <ModalPrice>€{auto.price}.00</ModalPrice>
        <ModalImg>
          <ShowModalImg src={auto.gallery?.[0]} alt={auto.name}></ShowModalImg>
          <ShowModalImg src={auto.gallery?.[1]} alt={auto.name}></ShowModalImg>
          <ShowModalImg src={auto.gallery?.[2]} alt={auto.name}></ShowModalImg>
        </ModalImg>
        <ModalDescription>{auto.description}</ModalDescription>
        <ModalButtonsDiv>
          <ModalButton onClick={onFeatures}>Features</ModalButton>
          <ModalButton onClick={onReviews}>Reviews</ModalButton>
        </ModalButtonsDiv>
        <BottomOfTheModal>
          <div>
            {features && <Features auto={auto} />}
            {reviews && <Reviews auto={auto} />}
          </div>
          <div>
            <BookForm />
          </div>
        </BottomOfTheModal>
      </ModalContainer>
    </ModalBackground>
  );
};
export default ShowMoreCard;
