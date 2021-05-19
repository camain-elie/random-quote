function Author (props) {
    return(
        <div className="author">
            <div className="author__return-button" onClick={props.returnClick}>back</div>
            <div className="author__name">{props.author}</div>
            <div className="author__quotes">
                {props.quoteList.map((item, index) => 
                    <div className="author__quote" key={index}>{item.quoteText}</div>
                    )}
            </div>
        </div>
    )
}

export default Author