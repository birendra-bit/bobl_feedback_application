// return the user data from the session storage
export const getUser = () => {
    const userStr = sessionStorage.getItem('user');  
    if (userStr) 
      return userStr;
    else 
      return null;
  }

  // return the token from the session storage
  export const getToken = () => {
    return sessionStorage.getItem('token') || null;
  }

  // remove the token and user from the session storage
  export const removeUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('fullName');
  }
   
  // set the token and user from the session storage
  export const setUserSession = (token, secret, user, fullName) => {
    sessionStorage.setItem('token', token+":"+secret);
    sessionStorage.setItem('user',user);
    sessionStorage.setItem('fullName',fullName);
  }