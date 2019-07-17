import React, { useContext } from "react";
import Button from "./Button";
import "./styles/MonthSelector.css";
import { NavigateNext } from "styled-icons/material/NavigateNext";
import { NavigateBefore } from "styled-icons/material/NavigateBefore";
import styled from "styled-components";

const NavigateNextIcon = styled(NavigateNext)`
  height: 30px;
  font-weight: bold;
`;

const NavigateBeforeIcon = styled(NavigateBefore)`
  height: 30px;
  font-weight: bold;
`;

const MonthSelector = (props: { mini?: boolean; context: any }) => {
  const { mini } = props;
  const calendarContext = props.context;
  const { state, dispatch } = useContext(calendarContext);
  const { currentDate } = state;
  const stringDateArr: string[] = currentDate.toDateString().split(" ");
  const month = stringDateArr[1];
  const year = stringDateArr[3];

  return (
    <div className="monthSelector-container" style={{ zoom: mini ? 0.7 : 1 }}>
      <Button
        type="link"
        ariaLabel="Previus month"
        onClick={() => dispatch({ type: "PREV_MONTH" })}
      >
        <NavigateBeforeIcon />
      </Button>
      <Button
        type="link"
        ariaLabel="Next month"
        onClick={() => dispatch({ type: "NEXT_MONTH" })}
      >
        <NavigateNextIcon />
      </Button>
      <div className="selected-month" arial-label="testing" tabIndex={0}>
        {`${month} - ${year}`}
      </div>
    </div>
  );
};

export default MonthSelector;
