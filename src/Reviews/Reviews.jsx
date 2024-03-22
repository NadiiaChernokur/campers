import {
  RatingFive,
  RatingFour,
  RatingOne,
  RatingThree,
  RatingTwo,
} from './Rating';
import {
  Coment,
  InnerContainer,
  Letter,
  Name,
  ReviewsContainer,
  ReviewsName,
} from './Reviews.styles';

const Reviews = ({ auto }) => {
  console.log(auto);
  return (
    <ReviewsContainer>
      {auto.reviews?.map((rev, index) => (
        <InnerContainer key={index}>
          <ReviewsName>
            <Letter>
              <p>{rev.reviewer_name.charAt(0)}</p>
            </Letter>
            <div>
              <Name>{rev.reviewer_name}</Name>
              {rev.reviewer_rating === 1 && <RatingOne />}
              {rev.reviewer_rating === 2 && <RatingTwo />}
              {rev.reviewer_rating === 3 && <RatingThree />}
              {rev.reviewer_rating === 4 && <RatingFour />}
              {rev.reviewer_rating === 5 && <RatingFive />}
            </div>
          </ReviewsName>
          <Coment>{rev.comment}</Coment>
        </InnerContainer>
      ))}
    </ReviewsContainer>
  );
};
export default Reviews;
