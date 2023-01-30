import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';

import DoughnutChart from '../../components/charts/DoughnutChart';
import RadarChart from '../../components/charts/RadarChart';
import StackedBarChart from '../../components/charts/StackedBarChart';

import MoodPicker from '../../components/MoodPicker';
import Container from '../../components/StyledComponents/Container';
import Divider from '../../components/StyledComponents/Divider';
import { mainPalette } from '../../utils/colors';
import useChartsData from '../../hooks/api/useChartsData';
import dateFilters from '../../utils/dateUtils';

export default function Home() {
  const week = [
    {
      value: 1,
      name: 'Anger',
      color: '#ecf0f1',
      days: [1, 0, 3, 1, 2, 0, 1],
    },
    {
      value: 4,
      name: 'Joy',
      color: '#50af95',
      days: [0, 2, 1, 1, 3, 0, 0],
    },
    {
      value: 2,
      name: 'Passion',
      color: '#f3ba2f',
      days: [2, 1, 0, 0, 1, 2, 2],
    },
    {
      value: 6,
      name: 'Fear',
      color: '#2a71d0',
      days: [1, 3, 1, 2, 1, 1, 0],
    },
  ];
  const { getChartsData, chartsDataLoading } = useChartsData();
  const [data, setData] = useState({
    emotions: null,
    symptoms: null,
  });

  useEffect(() => {
    const loadChartsData = async () => {
      const filter = {
        date: new Date(),
        param: dateFilters.week,
      };

      try {
        const result = await getChartsData(filter);
        console.log(result);
        if (result) {
          setData(result);
        }
      } catch (error) {
        toast('Cannot load charts data!');
      }
    };

    loadChartsData();
  }, []);

  return (
    <>
      <MoodPicker />

      <StyledHome mainPalette={mainPalette}>
        <div className="week-area emotions-area">
          <Chart label="My Week">
            <StackedBarChart data={week} />
          </Chart>

          <Chart label="My Emotions">
            {!data.emotions || chartsDataLoading
              ? <p>Carregando...</p>
              : <DoughnutChart data={data?.emotions} />}
          </Chart>
        </div>

        <Divider mainPalette={mainPalette} />

        <div className="symptoms-area">
          <Chart label="My Symptoms">
            {!data.symptoms || chartsDataLoading
              ? <p>Carregando...</p>
              : <RadarChart data={data?.symptoms} />}
          </Chart>
        </div>
      </StyledHome>
    </>
  );
}

function Chart({ label, children }) {
  return (
    <>
      <h5>{label}</h5>
      <Container mainPalette={mainPalette}>
        {children}
      </Container>
    </>
  );
}

const StyledHome = styled.div`
  padding-top: 90px;
  
  h5 {
    font-size: 14px;
    color: ${(props) => props.mainPalette.main};
    text-align: left;
    line-height: 24px;
    font-weight: 700;
    margin: 20px 0 5px 0;
  }

  .week-area canvas,
  .emotions-area canvas,
  .symptoms-area canvas {
    margin: 10px !important;
  }

  @media(min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    padding: 100px 100px 0 100px;

    .symptoms-area {
      width: 100%;
    }

    .week-area,
    .emotions-area {
      width: 70%;
    }

    h5, h6 {
    font-size: 18px;
  }

    h5 {
      font-weight: 700;
      margin: 30px 0 10px 0;
    }
  }
`;
