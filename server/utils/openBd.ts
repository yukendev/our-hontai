export const extractData = (obj: any) => {
  const { summary, onix } = obj;
  // extract data from API response
  const title = summary.title as string;
  const author = summary.author as string;
  const publisher = summary.publisher as string;
  const context = onix.CollateralDetail.TextContent;
  const outline = context
    ? (context.filter((obj: { TextType: string }) => obj.TextType == '03')[0].Text as string)
    : null;

  return {
    title,
    author,
    publisher,
    outline,
  };
};
