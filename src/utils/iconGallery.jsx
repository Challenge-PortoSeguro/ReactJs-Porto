import { FaBox, FaX, FaCirclePlay, FaUsers, FaGear, FaRocket, FaChevronLeft, FaEye, FaEyeSlash, FaBars, FaUserCheck, FaMessage, FaCircleInfo, FaPlus, FaCreditCard, FaUserLock, FaRightFromBracket } from 'react-icons/fa6';

const iconGallery = {
    info: (color, size, onClick) => <FaCircleInfo fill={color} size={size} onClick={onClick} />,
    aboutus: (color, size, onClick) => <FaUsers fill={color} size={size} onClick={onClick} />,
    add: (color, size, onClick) => <FaPlus fill={color} size={size} onClick={onClick} />,
    gear: (color, size, onClick) => <FaGear fill={color} size={size} onClick={onClick} />,
    rocket: (color, size, onClick) => <FaRocket fill={color} size={size} onClick={onClick} />,
    eyeOn: (color, size, onClick) => <FaEye fill={color} size={size} onClick={onClick} />,
    eyeOff: (color, size, onClick) => <FaEyeSlash fill={color} size={size} onClick={onClick} />,
    money: (color, size, onClick) => <FaCreditCard fill={color} size={size} onClick={onClick} />,
    back: (color, size, onClick) => <FaChevronLeft fill={color} size={size} onClick={onClick} />,
    user: (color, size, onClick) => <FaUserCheck fill={color} size={size} onClick={onClick} />,
    login: (color, size, onClick) => <FaUserLock fill={color} size={size} onClick={onClick} />,
    logout: (color, size, onClick) => <FaRightFromBracket fill={color} size={size} onClick={onClick} />,
    box: (color, size, onClick) => <FaBox fill={color} size={size} onClick={onClick} />,
    hamburguer: (color, size, onClick) => <FaBars fill={color} size={size} onClick={onClick} />,
    contact: (color, size, onClick) => <FaMessage fill={color} size={size} onClick={onClick} />,
    close: (color, size, onClick) => <FaX fill={color} size={size} onClick={onClick} />,
    play: (color, size, onClick) => <FaCirclePlay fill={color} size={size} onClick={onClick} />,
}

const renderIcon = ({ name, color, size, onClick }) => iconGallery[name](color, size, onClick);

export default renderIcon;