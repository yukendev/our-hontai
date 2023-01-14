export const extractData = (obj: any) => {
  const { summary, onix } = obj;
  // extract data from API response
  const title = summary.title as string;
  const author = summary.author as string;
  const publisher = summary.publisher as string;
  const outline = onix.CollateralDetail.TextContent.filter(
    (obj: { TextType: string }) => obj.TextType == '03',
  )[0].Text as string;

  return {
    title,
    author,
    publisher,
    outline,
  };
};
