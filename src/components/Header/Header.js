import styles from "./Header.module.css"
import { Link } from 'react-router-dom'

export const Header = ({ year }) => {
  return (
    <footer>
      <span><Link to="/home">Home</Link></span>
      <span><Link to="/info">Info</Link></span>
      <span><Link to="/profile">Profile</Link></span>
      <span><Link to="/calendar">Calendar</Link></span>


      
    </footer>
    
  );
};


