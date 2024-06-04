import { NavLink } from "react-router-dom";
import "./Header.css";
import { useAuth } from "../../context";


export const Header = () => {
    const { user, logout } = useAuth();
    return (
        <>
        <header>
            <div className="titleFatherContainer">
            <img
                src="https://cdn.icon-icons.com/icons2/35/PNG/512/supervisor_people_man_you_2840.png"
                alt="logo"
                className="logo"
            />
            <div className="titleContainer">
                
                <h1 className="titleHeader">PAGINA DE USUARIO</h1>
                <h1 className="titleHeaderBlack">PAGINA DE USUARIO</h1>
            </div>
            </div>
            <nav>
            {user == null && (
                <NavLink to="/login">
                <img
                    src="https://cdn.icon-icons.com/icons2/3380/PNG/512/social_media_login_user_profile_account_password_logout_icon_212484.png"
                    alt=""
                    className="iconNav"
                />
                </NavLink>
            )}

            {user !== null ? (
                <NavLink to="/dashboard">
                <img
                    src="https://cdn.icon-icons.com/icons2/3887/PNG/512/dashboard_analytics_chart_icon_245875.png"
                    alt=""
                    className="iconNav iconDashBoard"
                />
                </NavLink>
            ) : null}

            <NavLink to="/">
                <img
                src="https://cdn.icon-icons.com/icons2/334/PNG/256/1_-_Home_256x256_35385.png"
                alt=""
                className="iconNav home"
                />
            </NavLink>
            {user !== null && (
                <img
                src="https://cdn.icon-icons.com/icons2/10/PNG/256/log_logout_door_1563.png"
                alt=""
                className="iconNav iconLogout"
                onClick={() => logout()}
                />
            )}
            {user !== null ? (
                <>
                <NavLink to="/profile">
                    <img
                    className="profileCircle"
                    src={user.image}
                    alt={user.user}
                    />
                </NavLink>
                </>
            ) : null}
            {}
            </nav>
        </header>
        <div className="whiteContainer"></div>
        </>
    );
};