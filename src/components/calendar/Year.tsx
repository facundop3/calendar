import React from "react";
import styled from "styled-components";
import Month from "./Month";
import { chunkArray } from "../../utils/arrays";
import WeekHeader from "./WeekHeader";
import { CalendarState } from "../../interfaces";
const uuidv1 = require("uuid/v1");

const FourMonths = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const MonthTitle = styled.p`
  width: 100%;
  padding-left: 1.5em;
`;

const MonthCalendar = styled.div`
  width: 320px;
`;

interface YearProps {
  year: number;
  state: CalendarState;
}

const Year = (props: YearProps) => {
  const { year, state } = props;
  const monthDates: Date[] = Array(12)
    .fill(1)
    .map((e, monthNumber: number) => new Date(year, monthNumber));
  const fourMonthOneElem: Date[][] = chunkArray(monthDates, 4);
  return (
    <div style={{ zoom: 0.8 }}>
      {fourMonthOneElem.map(months => {
        return (
          <FourMonths key={uuidv1()}>
            {months.map(date => (
              <MonthCalendar key={uuidv1()}>
                <MonthTitle>{date.toDateString().split(" ")[1]}</MonthTitle>
                <WeekHeader mini={true} />
                <Month currentDate={date.getTime()} mini={true} state={state} />
              </MonthCalendar>
            ))}
          </FourMonths>
        );
      })}
    </div>
  );
};

const isSameYear = (prevProps: YearProps, nextProps: YearProps) =>
  prevProps.year === nextProps.year;
export default React.memo(Year, isSameYear);
