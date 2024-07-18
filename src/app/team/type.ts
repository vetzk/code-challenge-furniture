export type TeamMember = {
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: string;
      name: string;
    };
    city: string;
    state: string;
    country: string;
  };

  email: string;
  phone: string;
  cell: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  dob: {
    age: string;
  };
};

export type TeamMate = {
  name: string;
  imgUrl: string;
  role: string;
};
