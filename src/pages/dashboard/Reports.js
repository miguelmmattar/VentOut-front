import styled from 'styled-components';
import { IoChevronForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { StyledHistory } from './History';
import { mainPalette } from '../../utils/colors';
import useReports from '../../hooks/api/useReports';

export default function Reports() {
  const { getReports } = useReports();
  const [reportsList, setReportsList] = useState([]);
  console.log(reportsList);
  useEffect(() => {
    const loadReportsData = async () => {
      try {
        const result = await getReports();

        if (result) {
          setReportsList(result);
        }
      } catch (error) {
        toast('Cannot load reports data!');
      }
    };

    loadReportsData();
  }, []);

  return (
    <StyledHistory mainPalette={mainPalette}>
      { reportsList.length === 0
        ? <p className="alternative-message history-page">It looks like you haven&apos;t made any reports lately...</p> : (
          reportsList.map((data, index) => (
            <Link to={`${data?.id}`} key={index}>
              <PastReport
                data={data}
              />
            </Link>
          ))
        )}
    </StyledHistory>
  );
}

function PastReport({ data }) {
  const date = dayjs(data?.date).format('ddd MM/DD/YYYY');

  return (
    <StyledReport mainPalette={mainPalette}>
      <h5>{date}</h5>
      <IoChevronForward />
    </StyledReport>
  );
}

const StyledReport = styled.span`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  background-color: white;

  border: 1px solid ${(props) => props.mainPalette.border};

  h5 {
    font-size: 18px;
    color: ${(props) => props.mainPalette.main};
    text-align: left;
    font-weight: 700;
  }

  @media(min-width: 1024px) {
    border-radius: 10px;
    width: 190px;
    height: 190px;
    margin: 10px;
    flex-direction: column-reverse;
    padding: 40px 0 50px 0;

    h5 {
      width: 100%;
      text-align: center;
      font-size: 24px;
      line-height: 40px;
    }
  }
`;
