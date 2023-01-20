import styled from 'styled-components';
import { useNavigate, useLocation, Link } from 'react-router-dom';

import {
  BsHouseFill, BsFillClockFill, BsFillPlusCircleFill,
} from 'react-icons/bs';
import { IoChevronBack } from 'react-icons/io5';

import { mainPalette } from '../utils/colors';
import noProfilePicture from '../assets/images/no-profile-picture-icon.webp';

/* BsEmojiAngry,
    BsEmojiAngryFill,
    BsEmojiFrown,
    BsEmojiFrownFill,
    BsEmojiNeutral,
    BsEmojiNeutralFill,
    BsEmojiSmile,
    BsEmojiSmileFill,
    BsEmojiLaughing,
    BsEmojiLaughingFill */
export default function Header() {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  function goBack() {
    if (location === '/dashboard/home') {
      return;
    }
    navigate(-1);
  }

  return (
    <StyledHeader mainPalette={mainPalette} location={location}>
      <IoChevronBack className="back" onClick={goBack} />
      <AppName><h1>VentOut</h1></AppName>
      <span>
        <Link to="add/report"><BsFillPlusCircleFill className="desktop add" /></Link>
        <Link to="history"><BsFillClockFill className="desktop history" /></Link>
        <Link to="home"><BsHouseFill className="desktop home" /></Link>
        <img src={noProfilePicture} alt="Profile" />
      </span>
    </StyledHeader>
  );
}

const AppName = styled.div`
    position: absolute;
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    left: calc(50% - 100px);
`;

const StyledHeader = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    background-color: ${(props) => props.mainPalette.main};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    position: relative;

    h1 {
        font-size: 32px;
        color: white;
        position: absolute;
        /* width: 143px;
        height: 32px; */
        left: calc(50% - 71.5px);
        top: calc(50% - 16px);;
    }

    span {
        display: flex;
        align-items: center;
    }

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 10px;
    }

    svg {
        height: 30px;
        width: 30px;
    }

    .desktop {
        margin: 10px;
    }

    .back {
        color: ${(props) => (props.location === '/dashboard/home' ? props.mainPalette.disabled : 'white')};
        cursor: ${(props) => (props.location === '/dashboard/home' ? 'initial' : 'pointer')};
    }

    .home {
        color: ${(props) => (props.location === '/dashboard/home' ? props.mainPalette.disabled : 'white')};
        cursor: ${(props) => (props.location === '/dashboard/home' ? 'initial' : 'pointer')};
    }

    .history {
        color: ${(props) => (props.location === '/dashboard/history' ? props.mainPalette.disabled : 'white')};
        cursor: ${(props) => (props.location === '/dashboard/history' ? 'initial' : 'pointer')};
    }

    .add {
        color: ${(props) => (props.location === '/dashboard/add/report' ? props.mainPalette.disabled : 'white')};
        cursor: ${(props) => (props.location === '/dashboard/add/report' ? 'initial' : 'pointer')};
    }
`;
