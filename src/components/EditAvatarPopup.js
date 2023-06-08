import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup(props){
  const avatarRef = React.useRef()
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return(
    <PopupWithForm onClose={props.onClose} onSubmit={handleSubmit} isOpen={props.isOpen} title={"Обновить аватар"} name={"patch_avatar"} button={props.button}>
      <label className="popup__label">
        <input id="url-patch-input" ref={avatarRef} type="url" placeholder="Ссылка на картинку"
               className="popup__input popup__input_type_link" name="link" required/>
        <span className="url-patch-input-error popup__input-error"></span>
      </label>
    </PopupWithForm>
  )
}
