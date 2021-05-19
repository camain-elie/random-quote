function Quote (props) {
    return(
        <div className="quote">
            <div className="quote__text">{props.quote}</div>
            <div className="quote__author" onClick={props.authorClick}>{props.author}</div>
            <div className="quote__genre">{props.genre}</div>
        </div>
    )
}

export default Quote