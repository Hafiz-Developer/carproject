import "../css/fotter.css";
import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiFillLinkedin,
} from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";

export default function Fotter() {
  return (
    <>
      <div className="footer" id="contact">
        <div className="f_data">
          <div className="first_data same ">
            <h3>hcars</h3>

            <div className="a">
              <p>
                I adore my car; its sleek design, powerful engine, and smooth
                ride make every journey a delightful adventure.
              </p>
              <div className="nmber">
                <a href="" className="lowercase">ahmaddeveloper122@gmail.com</a>
                <br />
                <a href="">+(92) 3193223060</a>
              </div>
            </div>
          </div>
          <div className="second_data same">
            <h3>about us</h3>
            <div className="a">
              <div className="a2">
                <a href="">about</a>
                <a href="">services</a>
                <a href=""> showrom</a>
                <a href=""> varre</a>
                <a href="">term of services</a>
                <a href="">privacy policy</a>
              </div>
              <div className="a2">
                <a href="https://hafizdeveloper.com/" target="_blank">developer👇</a>
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSBpgSxBbpVbZVvnmvLnBZMgGBvqtLJLDNRrVmDQtrFcJPCxPgLSZSxCNJrBfpbwJvhgqxWP" target="_blank">hafiz ahmad</a>
                <a href="https://web.whatsapp.com/#" target="_blank"> WhatsApp👇</a>
                <a href="tel:+923193223060">03193223060</a>
                <a href="https://www.linkedin.com/in/ahmad-developer-523a54296/" target="_blank"> linkedin</a>
              </div>
            </div>
          </div>
          <div className="third_data same">
            <h3>TOP BRANDS</h3>
            <div className="a">
              <div className="a2">
                <a href="">BMW</a>
                <a href="">Lamborghini</a>
                <a href=""> Camaro</a>
                <a href=""> audi</a>
                <a href="">infinti</a>
                <a href="">nissan</a>
              </div>
              <div className="a2">
                <a href="">civic</a>
                <a href="">corolla</a>
                <a href=""> toyota</a>
                <a href=""> paradu</a>
              </div>
            </div>
          </div>
          <div className="forth_data same">
            <h3>news letter</h3>
            <div className="email">
              <p>enter you email 👇</p>
              <input type="email" placeholder="add email" />
            </div>
          </div>
        </div>
        <div className="fotter_last">
          <hr className="hr" />
          <div className="flex">
            <p>© Copyright.Designed And Developed By hafizdeveloper.</p>
            <div className="logo">
              <a href="https://wa.me/+923193223060">

                <AiOutlineWhatsApp />
              </a>
              <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSBpgSxBbpVbZVvnmvLnBZMgGBvqtLJLDNRrVmDQtrFcJPCxPgLSZSxCNJrBfpbwJvhgqxWP" target="_blank">
                <AiOutlineMail />
              </a>
              <a href="https://www.linkedin.com/in/ahmad-developer-523a54296/" target="_blank">
                <AiFillLinkedin />
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <FiFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
