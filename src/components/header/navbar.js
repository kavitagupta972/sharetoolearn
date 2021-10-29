
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessQueen } from "@fortawesome/free-solid-svg-icons"
const Navbar = () => {

    return (
        <nav class = "navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <div class = "container-fluid">
                <ul class = "navbar-nav">
                    <li class = "nav-item">
                   
                    <a className = "btn chessqueen navbar-brand" href = "#" target="_self"><FontAwesomeIcon className = "icon" icon={faChessQueen}/></a>   
                    {/* <img src="logo.png" alt="Avatar Logo" style={{width:"40px",height:"40px"}} class="rounded-pill"/> */}
                    </li>
                    <li class = "nav-item"> 
                        <a class = "nav-link" href = "#">Home</a>
                    </li>
                    <li class = "nav-item"> 
                        <a class = "nav-link" href = "#">Stories</a>
                    </li>
                    <li class = "nav-item"> 
                        <a class = "nav-link" href = "#">Upcoming Trainings</a>
                    </li>
                    <li class = "nav-item"> 
                        <a class = "nav-link" href = "#">Contact Us</a>
                    </li>
                    <li class = "nav-item"> 
                        <a class = "nav-link" href = "#">About Us</a>
                    </li>
                    <li class = "nav-item"> 
                        <a class = "nav-link" href = "#">Sign In/Up</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;