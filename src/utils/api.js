class Api {
  constructor(setting) {
    this._address = setting.baseUrl;
    this._headers = setting.headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getUserInfo() {
    return fetch(`${this._address}/users/me`, {
      method: 'GET',
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }

  getInitialCards() {
    return fetch(`${this._address}/cards `, {
      method: 'GET',
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }

  patchUserInfo(data) {
    return fetch(`${this._address}/users/me`, {
      method: 'PATCH',
      body: JSON.stringify({ name: data.name, about: data.about }),
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }

  postNewCard(data) {
    return fetch(`${this._address}/cards `, {
      method: 'POST',
      body: JSON.stringify({ name: data.name, link: data.link }),
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }

  deleteCard(id) {
    return fetch(`${this._address}/cards/${id} `, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }

  activateLike(id) {
    return fetch(`${this._address}/cards/${id}/likes `, {
      method: 'PUT',
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }

  deactivateLike(id) {
    return fetch(`${this._address}/cards/${id}/likes `, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }

  patchAvatar(data) {
    return fetch(`${this._address}/users/me/avatar`, {
      method: 'PATCH',
      body: JSON.stringify({ avatar: data.avatar }),
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: '3a98338d-a57d-4dce-ad75-e1c5dfaa5739',
    'Content-Type': 'application/json',
  },
});

export default api;
