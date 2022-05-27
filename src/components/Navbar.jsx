import Logo from '/images/logo.png';
import profile1 from '/images/profile-1.jpg';

export const Navbar = ({activeAside, activeTheme, applyDarkTheme}) => {
    return (
        <nav>
            <div className="container">
                <img
                    src={Logo}
                    alt="logo icon"
                    className="logo" />

                <div className="search-bar">
                    <span className="material-symbols-sharp">
                        search
                    </span>
                    <input type="search" placeholder='Search' />
                </div>

                <div className="profile-area">
                    <div className="theme-btn" onClick={activeTheme}>
                        <span className={`material-symbols-sharp ${!applyDarkTheme ? 'active' : ''}`}>
                            light_mode
                        </span>
                        <span className={`material-symbols-sharp ${applyDarkTheme ? 'active' : ''}`}>
                            dark_mode
                        </span>
                    </div>

                    <div className="profile">
                        <div className="profile-photo">
                            <img
                                src={profile1}
                                alt="profile photo" />
                        </div>
                        <h5>Chu Hua</h5>
                        <span className="material-symbols-sharp">
                            expand_more
                        </span>
                    </div>

                    <button id='menu-btn' onClick={activeAside}>
                        <span className="material-symbols-sharp">
                            menu
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
}