export const goToLoginPage = (history) => {
  history.push("/");
};

export const goToSignUpPage = (history) => {
  history.push("/signup");
};

export const goToFeed = (history) => {
  history.push(`/feed`);
};

export const goToCart = (history) => {
  history.push(`/cart`);
};

export const goToAddAdress = (history) => {
  history.push(`/addadress`);
};

export const goToProfile = (history) => {
  history.push(`/profile`);
};

export const goToRestaurant = (history, id) => {
  history.push(`/restaurant/${id}`);
};

export const goToEditProfile = (history) => {
  history.push(`/editProfile`);
};

export const goToEditAddress = (history) => {
  history.push(`/editaddress`);
};

