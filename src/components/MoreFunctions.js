import { Link,useLocation } from "react-router-dom";
import RunningTask from "./RunningTask";
const MoreFunctions = (props) => {
    const location = useLocation();
    const propsData = location.state;
    console.log(propsData.name)
 
    // usest
    const RefreshPage =()=>{
        window.location.reload()
        // console.log(":hello")
    }
    // propsData?.map((details,index)=>(
    //     console.log(details.details)
    // ))

    return (
            <div className="morefunctions">
            <div className="pc-details">
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <span className="material-symbols-outlined computer-icon">computer</span>
                    <span className="Desktop-Name" >{propsData.name}</span>
                </div>
                <div className="shutdown-hybernate-Btn">
                    <Link to="#"><button className="common-func-btn"><span className="material-symbols-outlined">power_settings_new</span></button></Link>
                    <Link to="#"><button className="common-func-btn hibernate-btn"><span className="material-symbols-outlined">error</span></button></Link>
                </div>
            </div>
            <div className="pcfunctions">
            <span className="material-symbols-outlined battery-icon">battery_horiz_075</span>
            <span className="material-symbols-outlined refresh-btn" onClick={RefreshPage}>refresh</span>
                <div className="allpcfunc">
                    <RunningTask props={propsData} />
                </div>
            </div>
        </div>
    )
}

export default MoreFunctions;