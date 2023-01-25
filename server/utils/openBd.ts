export const extractData = (obj: any) => {
  const { summary, onix } = obj;
  // extract data from API response
  const title = summary.title as string;
  const author = summary.author as string;
  const publisher = summary.publisher as string;
  const context = onix.CollateralDetail.TextContent;
  // TODO: refactor
  const outline03 = context.filter((obj: { TextType: string }) => obj.TextType == '03');
  const outline02 = context.filter((obj: { TextType: string }) => obj.TextType == '02');
  const outline01 = context.filter((obj: { TextType: string }) => obj.TextType == '01');
  // const outline = context
  //   ? (context.filter((obj: { TextType: string }) => obj.TextType == '03' || '02' || '01')[0]
  //       .Text as string)
  //   : null;
  let outline;
  if (outline03) {
    outline = outline03[0].Text;
  } else if (outline02) {
    outline = outline02[0].Text;
  } else if (outline01) {
    outline = outline01[0].Text;
  } else {
    outline = null;
  }
  if (outline03)
    return {
      title,
      author,
      publisher,
      outline,
    };
};
