import styles from "./styles/Footer.css"
import {BsTwitter, BsInstagram, BsFacebook, BsWhatsapp} from "react-icons/bs"; 

const Footer = () => <footer className="page-footer font-small pt-4 text-light" id="foot">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-5 mt-md-0 mt-2">
                <img src="logo.png" alt="Henry Gaming" className="footerImg"/>
                <p>Your friendly, reliable, PC hardware business.</p>
            </div>
            <hr className="clearfix w-100 d-md-none pb-0"/>
            <div className="col-md-2 mb-md-0 mb-2">
                <h5 className="text-uppercase">Company</h5>
                <ul className="list-unstyled">
                    <li><a href="#!" className="text-secondary text-decoration-none">About Us</a></li>
                    <li><a href="#!" className="text-secondary text-decoration-none">Contact</a></li>
                    <li><a href="#!" className="text-secondary text-decoration-none">Donate</a></li>
                </ul>
            </div>
            <div className="col-md-2 mb-md-0 mb-2">
                <h5 className="text-uppercase">Information</h5>
                <ul className="list-unstyled text-secondary">
                    <li><a href="#!" className="text-secondary text-decoration-none">F.A.Q</a></li>
                    <li><a href="#!" className="text-secondary text-decoration-none">Terms & Conditions</a></li>
                    <li><a href="#!" className="text-secondary text-decoration-none">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="col-md-2 mb-md-0 mb-2">
                <h5 className="text-uppercase">Follow Us</h5>
                <ul className="list-unstyled text-secondary d-flex justify-content-center flex-row">
                    <li><a href="#!" className="text-secondary text-decoration-none mx-1"><BsTwitter/></a></li>
                    <li><a href="#!" className="text-secondary text-decoration-none mx-1"><BsInstagram/></a></li>
                    <li><a href="#!" className="text-secondary text-decoration-none mx-1"><BsFacebook/></a></li>
                    <li><a href="#!" className="text-secondary text-decoration-none mx-1"><BsWhatsapp/></a></li>
                </ul>
            </div>
        </div>
    </div>
    <hr style={{margin: "2vh 4vw 0 4vw"}}/>
    <div className="footer-copyright text-center py-3">Copyright © 2022:
        <a className="text-secondary text-decoration-none" href="https://mdbootstrap.com/"> HenryGaming Argentina SRL</a>
    </div>
</footer>

export default Footer