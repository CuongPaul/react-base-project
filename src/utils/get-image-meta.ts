const getImageMeta = async (url: string) => {
  const image = new Image();

  image.src = url;

  await image.decode();

  return image;
};

export default getImageMeta;
