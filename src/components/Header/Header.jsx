import {
    FaSearch,
    FaHashtag,
    FaRegBell,
    FaUserCircle,
    FaMoon,
    FaSun,
} from 'react-icons/fa';
import {useState} from "react";

const Header = () => {
    return (
        <div className='top-navigation'>
            <HashtagIcon />
            <Title />
            <ThemeIcon />
            <Search />
            <BellIcon />
            <UserCircle />
        </div>
    );
};

const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useState(true);
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
        <span onClick={handleMode}>
      {darkTheme ? (
          <FaSun size='24' className='top-navigation-icon' />
      ) : (
          <FaMoon size='24' className='top-navigation-icon' />
      )}
    </span>
    );
};

const Search = () => (
    <div className='search focus-within:w-full'>
        <input className='search-input' type='text' placeholder='Search...' />
        <FaSearch size='18' className='text-secondary my-auto' />
    </div>
);
const BellIcon = () => <FaRegBell size='24' className='top-navigation-icon' />;
const UserCircle = () => <FaUserCircle size='24' className='top-navigation-icon' />;
const HashtagIcon = () => <FaHashtag size='20' className='title-hashtag' />;
const Title = () => <h5 className='title-text min-w-fit'>tailwind-css</h5>;

export default Header;
