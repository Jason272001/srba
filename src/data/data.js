export const bannerquery = () => {
  return `*[_type == "banner"] | order(displayOrder asc) {
    content{
      asset->{
        url
      }
    },
    mediaType,
    category,
    _createdAt
  }`;
};

export const logoteamquery = () => {
  return `*[_type == "partners"]{
    name,
    logo{
      asset->{
        url
      }
    },
    date
  } | order(date asc)`;
};

export const projectquery = () => {
  return `*[_type == "project"]| order(displayorder asc)`;
};

export const membershipquery = async () => {
  return `*[_type == "member"]{
          name,
          price,
          type,
          benefits,
          recommendation,
          displayorder
        } | order(displayorder asc)`;
};
