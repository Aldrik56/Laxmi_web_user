import {Language,AccountCircle,ShoppingBag} from '../../../elements/icon';

const MenuIcon = () => {
    return (
        <div className="d-flex flex-row">
            <div className="mx-2">
                <a data-bs-toggle="collapse" data-bs-target="#navbarMenu" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    <Language />
                </a>
                <div className="dropdown-menu dropdown-container dropdown-language mr-4">
                    <div className="text-center">
                        <h5>Language</h5>
                        <p>Choose your language :</p>
                    </div>
                    <div className="language-menu">
                        <div className="language-menu-list px-5 d-flex flex-row align-items-center active py-2">
                            <img 
                                src="/img/icon/UK_flag.png" 
                                alt="laxmi tailer"
                                className="flag-icon mr-3" />
                            <h6 className="my-0">English</h6>                                        
                        </div>
                        <div className="language-menu-list px-5 d-flex flex-row align-items-center py-2">
                            <img 
                                src="/img/icon/ID_flag.png" 
                                alt="laxmi tailer"
                                className="flag-icon mr-3" />
                            <h6 className="my-0">English</h6>                                        
                        </div>
                    </div>
                </div>
            </div>                        
            <div className="mx-2">
                <a type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    <AccountCircle />
                </a>
                <ul className="dropdown-menu dropdown-container dropdown-account">
                    <div className="text-center">
                        <h5>Hi, Jhon</h5>
                        <p>Access to your personal area: </p>
                    </div>
                    <li><a className="dropdown-item" href="#">Dashboard</a></li>
                    <li><a className="dropdown-item" href="#">Notification</a></li>
                    <li><a className="dropdown-item" href="#">Orders</a></li>
                    <li><a className="dropdown-item" href="#">Addresses</a></li>
                    <li><a className="dropdown-item" href="#">Edit Account</a></li>
                    <li><a className="dropdown-item" href="#">Addresses</a></li>
                    <li><a className="dropdown-item" href="#">Log Out</a></li>
                </ul>
            </div>                        
            <div className="mx-2">
                    <ShoppingBag />
            </div>                        
        </div>
    )
}

export default MenuIcon