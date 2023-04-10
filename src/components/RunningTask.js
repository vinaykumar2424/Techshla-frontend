const RunningTask = (props) => {
    console.log(props)
    return (

        <div className="functionNameBlock">
            <span>
                <span>{props.props.processor}</span>
                <span className="momary-use-details">{props.props.price}</span>
            </span>
            <span className="material-symbols-outlined delete-btn">delete</span>
        </div>

    )
}
export default RunningTask;