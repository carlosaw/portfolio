import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';

const Contact = () => {
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let`s discuss your project</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img
                  src={Phone}
                  alt=""
                  className="c-icon"
                />
                +55 65 999813879
              </div>
              <div className="c-info-item">
                <img
                  src={Email}
                  alt=""
                  className="c-icon"
                />
                contact@carlosdev.dev
              </div>
              <div className="c-info-item">
                <img
                  src={Address}
                  alt=""
                  className="c-icon"
                />
                Rua Men de Sá, 61, Várzea Grande Mato Grosso, Brasil
              </div>
            </div>
        </div>
        <div className="c-right"></div>
      </div>
    </div>
  );
};

export default Contact;