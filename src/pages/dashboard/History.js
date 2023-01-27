import styled from 'styled-components';
import { IoChevronForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { mainPalette } from '../../utils/colors';
import options from '../../utils/HistoryUtils';

export default function History() {
  return (
    <StyledHistory mainPalette={mainPalette}>
      <Link to="moods"><HistorOption option={options.moods} /></Link>
      <Link to="reports"><HistorOption option={options.reports} /></Link>
      <Link to="charts"><HistorOption option={options.charts} /></Link>
    </StyledHistory>
  );
}

function HistorOption({ option }) {
  return (
    <div>
      <h4>{option}</h4>
      <IoChevronForward />
    </div>
  );
}

const StyledHistory = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  position: absolute;
  top: 80px;
  left: 0;

  div {
    width: 100%;
    height: 70px;
    background-color: white;
    padding: 10px 20px;
    border: solid 1px ${(props) => props.mainPalette.border};
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.mainPalette.main};
  }

  h4 {
    font-size: 20px;
  }

  a {
    text-decoration: none;
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${(props) => props.mainPalette.placeholder};
  }

  @media(min-width: 1024px) {
    position: initial;
    flex-direction: row;
    margin: 20px 0;

    div {
      border-radius: 10px;
      width: 180px;
      height: 180px;
    }

    a:nth-child(2) {
      margin: 0 30px;
    }

    h4 {
    font-size: 24px;
    width: 100%;
    text-align: center;
    }

    svg {
      display: none;
    }
}
`;
