export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = ( email, password,) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
    .then((response) => {
      try {
        if (response.status === 201){
          return response.json();
        }
      } catch(e){
        return (e)
      }
    })
    .catch((err) => console.log(err));
};

export const login = ( email, password,) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
    .then((response) => {
      try {
        if (response.status === 200){
          return response.json();
        }
      } catch(e){
        return (e)
      }
    })
    .then((res) => {
      if (res.token){
        localStorage.setItem('token', res.token);
        return res;
      } else {
        return;
      }
    })
.catch((err) => console.log(err));
};

export const authorize = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    },
  })
    .then((response) => {
      try {
        if (response.status === 200){
          return response.json();
        }
      } catch(e){
        return (e)
      }
    })

    .catch((err) => console.log(err));
};
