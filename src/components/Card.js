import React, {useState, useEffect} from 'react';
import './Card.css';
function camelize (str) {
    if(str === "Miss")return "Ms";
    return str[0].toUpperCase() + str.substr(1);
}
export function Card ({users, handleClick, isActive}) 
{
    /*const [users, setUsers] = useState([]);
    
    const getUsers = async () => {
        const response = await fetch('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20');
        let temp = await response.json();
        setUsers(temp.results);
    }

    useEffect(()=>{
        getUsers();
    }, []);*/
    return (
        <div className="container-fluid mt-5">
            <div className="row text-center">
                    {
                        users.map((ele, ind)=>{
                            let cardname = "cards";
                            if(isActive == ele)
                                cardname = "active-card";
                            return (
                                <div 
                                    className="col-5 col-md-3 mt-5"
                                    onClick={()=> handleClick(ind)}
                                >
                                    <div key={ind} className={cardname}>
                                        <p className="gender">{`${camelize(ele.gender)} . ${ele.nat}`}</p>
                                        <h5 className="name">{`${camelize(ele.name.title)}. ${camelize(ele.name.first)} ${camelize(ele.name.last)}`}</h5>
                                        <p className="mail">{ele.email}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    )
}