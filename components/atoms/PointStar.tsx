import Star from '../../public/star.svg';

type AvarageStar = {
  size: number;
  color: string;
};

export const PointStar = (props: AvarageStar): JSX.Element => {
  const { size, color } = props;
  return <Star fill={color} width={size} height={size} />;
};
