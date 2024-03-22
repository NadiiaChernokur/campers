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
} from './ShowMoreCard.styles';
import sprite from '../img/svg.svg';
import Features from '../Features/Features';
import BookForm from './BookForm/BookForm';

const ShowMoreCard = ({ onClose, auto }) => {
  console.log(auto);
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
          <img
            src={auto.gallery?.[0]}
            alt={auto.name}
            width="290"
            height="310"
          ></img>
          <img
            src={auto.gallery?.[1]}
            alt={auto.name}
            width="290"
            height="310"
          ></img>
          <img
            src={auto.gallery?.[2]}
            alt={auto.name}
            height="310"
            width="290"
          ></img>
        </ModalImg>
        <ModalDescription>{auto.description}</ModalDescription>
        <ModalButtonsDiv>
          <ModalButton>Features</ModalButton>
          <ModalButton>Reviews</ModalButton>
        </ModalButtonsDiv>
        <BottomOfTheModal>
          <div>
            <Features auto={auto} />
          </div>
          <div style={{ background: 'red' }} width="448">
            <BookForm />
          </div>
        </BottomOfTheModal>
      </ModalContainer>
    </ModalBackground>
  );
};
export default ShowMoreCard;
