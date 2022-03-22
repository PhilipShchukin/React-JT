import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';


export const Footer = ({ isLoggedIn, setIsLoggedIn, userName, setIsAdmin }) => {
  const handleLogOut = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userName')
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    
    <header className={styles.mainHeader}>
      {      
        isLoggedIn ?
        <nav>
          Добро пожаловать, &nbsp;<strong>{userName}</strong>
          <NavLink
            onClick={handleLogOut}
            exact
            to="/login"
          >
            <MeetingRoomIcon />
            Выход
          </NavLink>
        </nav>

        :  'Добро пожаловать, падаван!'    
      }
    </header>
  );
};
