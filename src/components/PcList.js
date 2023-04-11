import { Link } from "react-router-dom";
import "./pc.css"
const PcList = () => {


    const Computers = [
        {
          name: "Desktop 1",
          properties: {
            brand: "HP",
            processor: "Intel Core i5",
            RAM: "8GB",
            storage: "256GB SSD",
            display: "23.8-inch",
          },
        },
        {
          name: "Desktop 2",
          properties: {
            brand: "Dell",
            processor: "Intel Core i7",
            RAM: "16GB",
            storage: "512GB SSD",
            display: "27-inch",
          },
        },
        {
          name: "Desktop 3",
          properties: {
            brand: "Lenovo",
            processor: "AMD Ryzen 5",
            RAM: "12GB",
            storage: "1TB HDD",
            display: "21.5-inch",
          },
        },
      ];
    //   console.log(typeof(Computers))
      
    

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