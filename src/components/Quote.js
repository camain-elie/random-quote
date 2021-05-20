import './Quote.scss'

function Quote (props) {
    return(
        <div className="quote">
            <div className="quote__text">
                {`"${props.quote}"`}
            </div>

            <div className="quote__button" onClick={props.authorClick}>
                <div className="quote__author">{props.author}</div>
                <div className="quote__genre">{props.genre}</div>
                <p className="material-icons quote__arrow">trending_flat</p>
            </div>
        </div>
    )
}

export default Quote