import "./CaseFavorite.css"
import { TiPinOutline } from "react-icons/ti";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";

const CaseFavorite = () => {
  return (
    <div className="case-container">
        <header className="header">
            <h2 className="header-heading"><TiPinOutline className="pin"/>Case Favorite</h2>
        </header>
        <hr className="line"/>

        <p className="note">Lerem ispum dolor sit amet consecteture.Et tincidunt</p>
        <p className="note-photo"><MdOutlinePhotoSizeSelectActual className="pic"/>Photo</p>
        <p className="note">Lerem ispum dolor sit amet consecteture.Et tincidunt</p>
        
      
    </div>
  )
}

export default CaseFavorite
