import './Topbar.css';
export default function Topbar()
{
    return (
        <div className="container">
            <p className="title">YourChallenge</p>
            <ul className="nav">
                <li>
                    <a href="#">
                        Product
                    </a>
                </li>
                <li>
                    <a href="#">
                        Download
                    </a>
                </li>
                <li>
                    <a href="#">
                        Pricing
                    </a>
                </li>
            </ul>
        </div>
    );
}