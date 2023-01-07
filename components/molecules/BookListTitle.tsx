type BookListTitleProps = {
  year: number;
};

export const BookListTitle = (props: BookListTitleProps): JSX.Element => {
  const { year } = props;
  return <>{`${year}年のノミネート作品`}</>;
};
