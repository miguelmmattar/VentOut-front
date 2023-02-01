import {
  BsEmojiAngry,
  BsEmojiFrown,
  BsEmojiNeutral,
  BsEmojiSmile,
  BsEmojiLaughing,
} from 'react-icons/bs';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import moods from '../../utils/MoodsUtils';
import { StyledHistory } from './History';
import { mainPalette } from '../../utils/colors';
import useMoods from '../../hooks/api/useMoods';

export default function Moods() {
  const { getMoods } = useMoods();
  const [moodsList, setMoodsList] = useState([]);

  useEffect(() => {
    const loadMoodsData = async () => {
      try {
        const result = await getMoods();

        if (result) {
          setMoodsList(result);
        }
      } catch (error) {
        toast('Cannot load moods data!');
      }
    };

    loadMoodsData();
  }, []);

  return (
    <StyledHistory mainPalette={mainPalette}>
      { moodsList.length === 0
        ? <p className="alternative-message history-page">It looks like you haven&apos;t made any reports lately...</p> : (
          moodsList.map((data, index) => (
            <PastMood
              key={index}
              data={data}
            />
          ))
        )}
    </StyledHistory>
  );
}

function PastMood({ data }) {
  const date = dayjs(data.date).format('ddd MM/DD/YYYY');

  return (
    <StyledMood color={data.color} mainPalette={mainPalette}>
      <h5>{date}</h5>

      {data.mood === moods.great
        && <BsEmojiLaughing />}
      {data.mood === moods.good
        && <BsEmojiSmile />}
      {data.mood === moods.meh
        && <BsEmojiNeutral />}
      {data.mood === moods.bad
        && <BsEmojiFrown />}
      {data.mood === moods.angry
        && <BsEmojiAngry />}
    </StyledMood>
  );
}

const StyledMood = styled.span`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  background-color: ${(props) => props.color};

  border: 1px solid ${(props) => props.mainPalette.border};

  h5 {
    font-size: 18px;
    color: ${(props) => props.mainPalette.main};
    text-align: left;
    font-weight: 700;
  }

  svg {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    color: ${(props) => props.mainPalette.main};
  }

  @media(min-width: 1024px) {
    border-radius: 10px;
    width: 190px;
    height: 190px;
    margin: 10px;
    flex-direction: column-reverse;
    padding: 40px 0 20px 0;

    h5 {
      width: 100%;
      text-align: center;
    }
    
    svg {
      display: initial !important;
      width: 80px;
      height: 80px;
      margin: 0;
    };
  }
`;
