import websitelogo from '../icons/websitelogo.png';


function Header() {
    return(
        <div className="navbar bg-black">
            <img
                    alt=""
                    src={websitelogo}
                    width="300"
                    height="70"
                    className="d-inline-block align-top pl-5"
                    />
        </div>
    );
}

export default Header;