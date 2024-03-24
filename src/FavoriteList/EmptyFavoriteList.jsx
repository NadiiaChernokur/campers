import { EmptyText } from './EmptyFavoriteList.styles';
import { FavoriteCardContainerText } from './FavoritList.styles';

export const EmptyFavoriteList = () => {
  return (
    <EmptyText>
      <FavoriteCardContainerText>
        You don&apos;t have any campers saved yet
      </FavoriteCardContainerText>
    </EmptyText>
  );
};
