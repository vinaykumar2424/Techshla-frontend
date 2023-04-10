import { Link } from "react-router-dom";
import "./pc.css"
const PcList = () => {


    const Computers  = [
        {
            name: "Desktop 1",
            processor: "Intel Core i5",
            RAM: "8 GB",
            storage: "256 GB SSD",
            graphics: "NVIDIA GeForce GTX 1050",
            display: "23.8-inch FHD",
            price: "$899"
        },
        {
            name: "Desktop 2",
            processor: "AMD Ryzen 7",
            RAM: "16 GB",
            storage: "512 GB SSD + 1 TB HDD",
            graphics: "AMD Radeon RX 5700 XT",
            display: "27-inch 4K UHD",
            price: "$1,299"
        },
        {
            name: "Desktop 3",
            processor: "Intel Core i7",
            RAM: "32 GB",
            storage: "1 TB SSD",
            graphics: "NVIDIA GeForce RTX 3080",
            display: "32-inch QHD",
            price: "$2,499"
        }

    ]
    

    return (
        <div className="pclist">
            {Computers?.map((computer, index) => (
                <div className="pc-card" key={index}>
                    <div className="pcName">{computer.name}</div>
                    <div className="pcFunc">
                        <button className="pcFuncBtn" href="#">Shut Down</button>
                        <button className="pcFuncBtn" href="#">Hybernate</button>
                    </div>
                    <Link to="/moreinfo" state={computer} ><button className="MoreInfoBtn">MoreInfo</button></Link>
                </div>
            ))
            }
        </div>
    )
}
export default PcList;