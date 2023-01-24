import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { mainPalette } from '../utils/colors';
import MoodPicker from '../components/MoodPicker';

export default function Dashboard() {
  return (
    <StyledDashboard mainPalette={mainPalette}>
      <Header />
      <MoodPicker />
      <Footer />
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
