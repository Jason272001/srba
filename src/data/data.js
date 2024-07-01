export const bannerquery = async () => {
  const query = `*[_type == "banner"]{
    content{
      asset->{
        
        url
      }
    },
    mediaType,
    buttonUrl,
    description,
    title,
    buttonText,
    _createdAt
  } | order(_createdAt asc)`;
  return query;
};
