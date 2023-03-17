import Link from 'next/link';
import classes from './main-header.module.css'
function MainHeader() {
    return(
       <header className={classes.header}>
           <div className={classes.logo}>
               <Link href='/'>Events</Link>
           </div>
           <nav className={classes.navigation}>
               <ul className={classes.ui}>
                   <li className={classes.li}>
                       <Link href='/events'> Browse All Events </Link>
                   </li>
               </ul>
           </nav>
       </header>
    )
}

export default MainHeader;