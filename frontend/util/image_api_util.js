export const createImage = (image) => {
  return $.ajax({
    method: "post",
    url: ?,
    contentType: false,
    processData: false,
    data: image
  })
};
