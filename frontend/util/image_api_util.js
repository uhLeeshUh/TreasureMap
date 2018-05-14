export const createImage = (articleId, image) => {
  return $.ajax({
    method: "post",
    url: `/api/article/${articleId}/images`,
    contentType: false,
    processData: false,
    data: image
  });
};
