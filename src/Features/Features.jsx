import {
  Details,
  DetailsDiv,
  FeaturesContainer,
  FeaturesList,
  FeaturesListText,
  FeaturesText,
  FeaturesUlList,
} from './Features.styles';
import sprite from '../img/svg.svg';
const Features = ({ auto }) => {
  console.log(auto);
  const firstLetter = (w) => {
    if (w) {
      return w.charAt(0).toUpperCase() + w.slice(1);
    }
  };
  const splitFunction = (v) => {
    const parts = v.split('m');
    const formatted = parts[0] + ' m';
    return formatted;
  };

  const tankFunction = (v) => {
    const parts = v.split('l');
    const formatted = parts[0] + ' l';
    return formatted;
  };
  return (
    <FeaturesContainer>
      <FeaturesUlList>
        <FeaturesList>
          <svg width="20" height="20">
            <use href={`${sprite}#Users`}></use>
          </svg>
          <FeaturesListText>{auto.adults} adults</FeaturesListText>
        </FeaturesList>
        <FeaturesList>
          <svg width="20" height="20">
            <use href={`${sprite}#nets`}></use>
          </svg>
          <FeaturesListText>{firstLetter(auto.transmission)}</FeaturesListText>
        </FeaturesList>
        <FeaturesList>
          <svg width="20" height="20">
            <use href={`${sprite}#blow`} width="20" height="20"></use>
          </svg>
          <FeaturesListText>AC</FeaturesListText>
        </FeaturesList>
        <FeaturesList>
          <svg width="20" height="20">
            <use href={`${sprite}#tank`}></use>
          </svg>
          <FeaturesListText>{firstLetter(auto.engine)}</FeaturesListText>
        </FeaturesList>
        <FeaturesList>
          <svg width="20" height="20">
            <use href={`${sprite}#Kitchen`}></use>
          </svg>
          <p>Kitchen</p>
        </FeaturesList>
        <FeaturesList>
          <svg width="20" height="20">
            <use
              href={`${sprite}#bad`}
              width="20"
              height="20"
              fill="none"
            ></use>
          </svg>
          <FeaturesListText>{auto.details?.beds} beds</FeaturesListText>
        </FeaturesList>
        {auto.details?.airConditioner > 0 && (
          <FeaturesList>
            <svg width="20" height="20">
              <use href={`${sprite}#conditioner`}></use>
            </svg>
            <p>{auto.details?.airConditioner} air conditioner</p>
          </FeaturesList>
        )}
        {auto.details?.CD > 0 && (
          <FeaturesList>
            <svg width="20" height="20">
              <use href={`${sprite}#cd`}></use>
            </svg>
            <p>CD</p>
          </FeaturesList>
        )}
        {auto.details?.radio > 0 && (
          <FeaturesList>
            <svg width="20" height="20">
              <use href={`${sprite}#radio`}></use>
            </svg>
            <p>Radio</p>
          </FeaturesList>
        )}
        {auto.details?.hob > 0 && (
          <FeaturesList>
            <svg width="20" height="20">
              <use href={`${sprite}#painted`}></use>
            </svg>
            <p> {auto.details?.hob} hob</p>
          </FeaturesList>
        )}

        {auto.details?.freezer > 0 && (
          <FeaturesList>
            <svg width="20" height="20">
              <use href={`${sprite}#freezer`}></use>
            </svg>
            <p>Freezer</p>
          </FeaturesList>
        )}
        {auto.details?.microwave > 0 && (
          <FeaturesList>
            <svg width="20" height="20">
              <use href={`${sprite}#microwave`}></use>
            </svg>
            <p>Microwave</p>
          </FeaturesList>
        )}
        {auto.details?.shower > 0 && (
          <FeaturesList>
            <svg width="20" height="20">
              <use href={`${sprite}#dusch`}></use>
            </svg>
            <p>Shower</p>
          </FeaturesList>
        )}
        {auto.details?.toilet > 0 && (
          <FeaturesList>
            <svg width="20" height="20">
              <use href={`${sprite}#toilet`}></use>
            </svg>
            <p>Toilet</p>
          </FeaturesList>
        )}
        {auto.details?.water > 0 && (
          <FeaturesList>
            <svg width="20" height="20">
              <use href={`${sprite}#water`}></use>
            </svg>
            <p>Water</p>
          </FeaturesList>
        )}
        {auto.details?.gas > 0 && (
          <FeaturesList>
            <svg width="20" height="20">
              <use href={`${sprite}#gas`}></use>
            </svg>
            <p>Gas</p>
          </FeaturesList>
        )}
      </FeaturesUlList>
      <FeaturesText>Vehicle details</FeaturesText>
      <DetailsDiv>
        <Details>
          <p>Form</p>
          <p>{auto.form}</p>
        </Details>
        <Details>
          <p>Length</p>
          <p>{splitFunction(auto.length)}</p>
        </Details>
        <Details>
          <p>Width</p>
          <p>{splitFunction(auto.width)}</p>
        </Details>
        <Details>
          <p>Height</p>
          <p>{splitFunction(auto.height)}</p>
        </Details>
        <Details>
          <p>Tank</p>
          <p>{tankFunction(auto.tank)}</p>
        </Details>
        <Details>
          <p>Consumption</p>
          <p>{auto.consumption}</p>
        </Details>
      </DetailsDiv>
    </FeaturesContainer>
  );
};
export default Features;
