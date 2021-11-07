import { useEffect, useState } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import {featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {   
            id : "featured",
            title :"Featured",
        },
        {   
            id : "web",
            title :"Web Apps",
        },
        {   
            id : "mobile",
            title :"Mobile App",
        },
        {   
            id : "content",
            title :"Content",
        },

    ];
    useEffect(()=>{
        switch(selected){
            case "featured" :
                setData(featuredPortfolio);
                break;
                case "web" :
                setData(webPortfolio);
                break;
                case "mobile" :
                setData(mobilePortfolio);
                break;
                case "content" :
                setData(contentPortfolio);
                break;
                default:
                setData(featuredPortfolio);
        }
        
    },[selected])
    return (
        <div className="portfolio" id="portfolio">
            <h2>Portfolio</h2>
            <ul>
                {list.map((item)=>(
                    <PortfolioList 
                    title={item.title}
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}
            />
                ))}
            </ul>
            <div className="container">
                {data.map((d)=>(
                <div className="item">
                    <img src={d.img}
                        alt="" srcset="" />
                    <h2 className="">{d.title}</h2>
                </div>
                ))}
            </div>
        </div>
    )
}
