import './Quote.scss'

function Author (props) {
    return(
        <div className="quote">
            
            <div className="quote__author quote__author-bold">
                <div className="quote__return" onClick={props.returnClick}>
                    <p>
                        <span className="material-icons icon">
                            keyboard_backspace
                        </span>
                        go back to quote
                    </p>
                </div>
                <p>{props.author}</p>
            </div>

            <div className="quote__quotes">
                {props.quoteList.map((item, index) => 
                    <div className="quote__text" key={index}>
                        {`"${item.quoteText}"`}
                    </div>
                )}
            </div>

        </div>
    )
}

export default Author