const _card = (props) => {
  return (
    <div className="card">
        <div className="card_title">
            <div className="person_img_wrapper">
                <img src={props.img} alt="person-image" />
            </div>
            <div className="text_wrapper">
                <p>{props.name}</p>
                <p>Verified Buyer</p>
            </div>
        </div>

        <p className="card_main_text">{props.mainText}</p>
    </div>
  )
}

export default _card