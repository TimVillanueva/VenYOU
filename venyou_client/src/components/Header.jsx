import {Link} from 'react-router-dom'

export default function Header () {
    return (

        <div className='header'>
            <div className='logo-container'>
                <Link className='logo' to='/'>VenYou</Link>
            </div>

            <div className='nav'>
                <Link className='nav-link' to='/'>VENUES</Link>
                <Link className='nav-link' to='/events'>EVENTS</Link>
                <Link className='nav-link' to='/'>LOG IN</Link>
            </div>
        </div>
    )
}