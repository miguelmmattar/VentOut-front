import { useState } from 'react';
import styled from 'styled-components';
import { mainPalette } from '../../utils/colors';

import SelectFromData from '../../components/AddReport/SelectFromData';
import Container from '../../components/StyledComponents/Container';

export default function AddReport() {
  const [initialData, setInitialData] = useState({});
  const [text, setText] = useState('');
  const [emotions, setEmotions] = useState([]);
  const [physicalSymptoms, setPhysicalSymptoms] = useState([]);
  const [emotionalSymptoms, setEmotionalSymptoms] = useState([]);

  return (
    <StyledReport mainPalette={mainPalette}>
      <div className="text-area">
        <WriteReport
          label="What would you like to share?"
          text={text}
          setText={setText}
        />
      </div>

      <Separator mainPalette={mainPalette} />

      <div className="selection-area">
        <SelectFromData
          label="How do you feel about it?"
          placeholder="Add an emotion"
          givenData={[
            { value: 'chocolate', label: 'Chocolate', color: 'brown' },
            { value: 'strawberry', label: 'Strawberry', color: 'red' },
            { value: 'vanilla', label: 'Vanilla', color: 'blue' },
          ]}
        />

        <SelectFromData
          label="Have you had any physical symptoms?"
          placeholder="Add a symptom"
          givenData={[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
          ]}
        />

        <SelectFromData
          label="Have you had any emotional symptoms?"
          placeholder="Add a symptom"
          givenData={[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
          ]}
        />
      </div>
      
      <StyledButton name="save" mainPalette={mainPalette}>SAVE</StyledButton>
      <StyledButton name="cancel" mainPalette={mainPalette}>CANCEL</StyledButton>
    </StyledReport>
  );
}

function WriteReport({ label, text, setText }) {
  return (
    <>
      <h5>{label}</h5>
      <Container mainPalette={mainPalette}>
        <textarea
          id="report"
          name="report"
          placeholder="Don't overthink! Write whaterver comes to your mind..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </Container>
    </>
  );
}

const StyledReport = styled.div`
  h5 {
    font-size: 14px;
    color: ${(props) => props.mainPalette.main};
    text-align: left;
    line-height: 24px;
  }

  h5 {
    font-weight: 700;
    margin: 20px 0 5px 0;
  }

  svg {
    color: ${(props) => props.mainPalette.main};
    width: 18px;
    height: 18px;
  }

  textarea {
    border: 0;
    width: 100%;
    height: 148px;
    overflow-y: auto;
    padding: 10px;
    border: 0;
    border-radius: 10px;
    resize: none;
  }

  textarea::placeholder {
    color: ${(props) => props.mainPalette.placeholder};
    word-wrap: break-word;
    line-height: 20px;
  }

  .text-area div {
    height: 150px;
    padding: 0;
  }

  @media(min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    padding: 20px 100px;

    .text-area,
    .selection-area {
      width: 100%;
    }

    .text-area div {
    height: 350px;
    }

    textarea {
      height: 348px;
    }

    h5, h6 {
    font-size: 18px;
  }

    h5 {
      font-weight: 700;
      margin: 30px 0 10px 0;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background-color: ${(props) => (props.name === 'save' ? props.mainPalette.main : 'white')};
`;

const Separator = styled.div`
  height: calc(100vh - 160px);
  width: 1px;
  margin: 20px 100px 0 100px;
  border: 1px solid ${(props) => props.mainPalette.border};

  @media(max-width: 1023px) {
    display: none;
  }
`;
