export default function ImagePopup({card,onClose}){
    return(
        <div className={`popup popup_open-img ${card !== null && "popup_opened" }`}>
            <div className="popup__container">
                <img className="popup__img popup__img_full-size" src={`${card != null ? card.link : undefined}`} alt={`${card !== null ? card.name : undefined}`}/>
                <button type="button" className="blackout popup__close" onClick={onClose}></button>
                <p className="popup__img-name">{`${card !== null ? card.name : undefined}`}</p>
            </div>
        </div>
    )
}
