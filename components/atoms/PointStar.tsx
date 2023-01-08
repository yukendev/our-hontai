import Star from '../../public/star.svg';

type AvarageStar = {
  color: string;
};

export const PointStar = (props: AvarageStar): JSX.Element => {
  const { color } = props;
  return <Star fill={color} width={40} height={40} />;
};
