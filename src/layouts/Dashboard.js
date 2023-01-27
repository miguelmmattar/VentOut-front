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
`;
