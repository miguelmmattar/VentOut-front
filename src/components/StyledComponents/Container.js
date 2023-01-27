import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 5px;
  background-color: white;
  border-radius: 10px;
  border: .1px solid ${(props) => props.mainPalette.border};
`;

export default Container;
