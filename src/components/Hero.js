import './Hero.css';
function camelize (str) {
    if(str === "Miss")return "Ms";
    return str[0].toUpperCase() + str.substr(1);
}
export default function Hero(activeUser){
    console.log('in hero...', activeUser.user);
    if(activeUser===undefined || activeUser.user===undefined)return (<></>);
    let avatar = activeUser.user.picture.large;
    let name =  camelize(activeUser.user.name.title) + '. ' + activeUser.user.name.first + ' ' + 
                activeUser.user.name.last;
    let location = activeUser.user.location;
    let stNum = location.street.number;
    let address = ', '+location.city+', '+location.state;
    let country = ', '+location.country;
    let postcode = ', '+location.postcode;
    let timezone = location.timezone.offset+" - "+location.timezone.description;
    let gender = camelize(activeUser.user.gender);
    console.log(timezone)
    return (
        <div className="hero">
            <img src={avatar} alt="active-user-pic" width="128px" height="128px"></img>
            <div className="description">
                <p className="heroName">{name}</p>
                <div className="line1">
                    <p className="stNum">{stNum}</p>
                    <p className="address">{address}</p>
                    <p className="country">{country}</p>
                    <p className="postcode">{postcode}</p>
                </div>
                
                <p className="timezone">{timezone}</p>
                
                <p className="heroGender">{gender}</p>
            </div>
        </div>
    );
}