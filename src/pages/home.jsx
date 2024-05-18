import React from 'react'
import Logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTentArrowLeftRight , faHashtag ,faFilePdf} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp , faXTwitter , faTelegram  } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import '../App.css';




function home() {
    const handleTele = (e)=>{
        e.preventDefault();
        window.open('https://t.me/stockwelt' , '_blank');
    }

    const handleButtonClick = (e) => {
        e.preventDefault();
        const adminWhatsAppNumber = '7904314197';
        const whatsappLink = `https://wa.me/${adminWhatsAppNumber}`;
        window.open(whatsappLink, '_blank');
      };

      const pdfOpen=(e)=>{
          e.preventDefault();
          window.open('https://drive.google.com/file/d/14D2M1QOKgxjO0s0ypdpkOorZytoZckwJ/view?usp=drivesdk','_blank');
      }

  return (
    <div className="card-outer">
        <img src={Logo} alt="Logo" className="logo"/>
        <h4 className='heading'>Don't afraid to give up good to go for great</h4>
      <form className="form">
         <button className='buttons' onClick={(e)=>handleTele(e)}><FontAwesomeIcon icon={faTelegram} style={{color: "#36baf2",}} onClick={(e)=>handleTele(e)}/>  Join us in Telegram</button>
         <button className='buttons' onClick={(e)=>pdfOpen(e)}><FontAwesomeIcon icon={faFilePdf} style={{color: "#e00606",}} />Course Module</button>
        
         <button className='buttons' onClick={(e)=>handleButtonClick(e)}><FontAwesomeIcon icon={faWhatsapp} style={{color: "#11ce03",}} />    Contact Admin</button>
        <div className='reg-div'>
            <Link to="/register">
            <button className='reg-btn'>Register</button>
            </Link>
       
        </div>
         
      </form>
    </div>
  )
}

export default home
