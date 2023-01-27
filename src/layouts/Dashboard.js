import styled from 'styled-components';

import { mainPalette } from '../utils/colors';

export default function Dashboard({ children }) {
  console.log(children);
  return (
    <StyledDashboard mainPalette={mainPalette}>
      {children}
    </StyledDashboard>
  );
}

const StyledDashboard = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.mainPalette.background};
  padding: 80px 20px 40px 20px;
  position: relative;
  margin-bottom: 60px;

  @media(min-width: 768px) and (max-width: 1023px) {
    padding-left: 140px;
    padding-right: 140px;
  }

  @media(min-width: 1024px) {
    margin-bottom: 0;
  }
`;
