const RunningTask = (props) => {
    // console.log(props.props.properties)

    const properties = props.props.properties;
    // console.log(typeof(properties))
    // Object.values(properties)?.map((pro,index)=>(
        // console.log(pro)
    // ))

    return (
        <>
            {Object.values(properties)?.map((props,index) => (
                <div className="functionNameBlock" key={index}>
                    <span className="details-box" >
                        <span style={{display:"flex"}} className="runningTaskName" >{props}</span>
                        <span className="momary-use-details">running</span>
                    </span>
                    <span className="material-symbols-outlined delete-btn">delete</span>
                </div>
            ))
            }

        </>
    )
}
export default RunningTask;