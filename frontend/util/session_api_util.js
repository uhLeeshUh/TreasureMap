export const signup = (user) => {
  return $.ajax({
    method: 'post',
    url: 'api/users',
    contentType: false,
    processData: false,
    data: user
  });
};

export const login = (user) => {
  // debugger
  return $.ajax({
    method: 'post',
    url: 'api/session',
    contentType: false,
    processData: false,
    data: user
  });
};

export const logout = () => {
  return $.ajax({
    method: 'delete',
    url: 'api/session'
  });
};
