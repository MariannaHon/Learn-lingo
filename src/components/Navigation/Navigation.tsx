
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css'

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav className={css.nav}>
            <NavLink className={css.link} to="/">
                Home
            </NavLink>
            <NavLink className={css.link} to="/teachers">
                Teachers
            </NavLink>
            {isLoggedIn && (
                <NavLink className={css.link} to="/favorites">
                    Favorites
                </NavLink>
            )}
        </nav>
    );
}