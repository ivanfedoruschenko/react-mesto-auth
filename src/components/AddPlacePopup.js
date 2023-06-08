import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup(props){
  const placeLinkRef = React.useRef()
  const placeNameRef = React.useRef()
  function handleSubmit(e) {
    e.preventDefault();
    props.onPostNewPlace({
      name: placeNameRef.current.value,
      link: placeLinkRef.current.value
    });
  }

  return(
    <PopupWithForm onClose={props.onClose} isOpen={props.isOpen} onSubmit={handleSubmit} title={"Новое место"} name={"create_card"} button={props.button}>
      <label className="popup__label popup__label_margin_first">
        <input ref={placeNameRef} id="name-add-input" type="text" placeholder="Название"
               className="popup__input  popup__input_type_title" name="name" minLength="2" maxLength="30"
               required/>
        <span className="name-add-input-error popup__input-error"></span>
      </label>
      <label className="popup__label">
        <input ref={placeLinkRef} id="url-add-input" type="url" placeholder="Ссылка на картинку"
               className="popup__input popup__input_type_link" name="link" required/>
        <span className="url-add-input-error popup__input-error"></span>
      </label>
    </PopupWithForm>
  )
}
