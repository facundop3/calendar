import React, { useContext } from "react";
import Button from "./Button";
import { NavigateNext } from "styled-icons/material/NavigateNext";
import { NavigateBefore } from "styled-icons/material/NavigateBefore";
import styled, { withTheme } from "styled-components";
import { textColor } from "../theme";

const MonthSelectorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    background-color: transparent !important;
  }
  svg {
    color: ${textColor};
  }
  .btn--link {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn--link:hover {
    background-color: rgba(119, 136, 153, 0.2);
  }
`;

const SelectedMonthContainer = styled.div`
  min-width: 100px;
  text-align: center;
`;

const NavigateNextIcon = styled(NavigateNext)`
  height: 30px;
  font-weight: bold;
`;

const NavigateBeforeIcon = styled(NavigateBefore)`
  height: 30px;
  font-weight: bold;
`;

const MonthSelector = (props: {
  mini?: boolean;
  context: any;
  onlyYear?: boolean;
  theme?: { mode: string };
}) => {
  const { mini, onlyYear } = props;
  const calendarContext = props.context;
  const { state, dispatch } = useContext(calendarContext);
  const { currentDate } = state;
  const stringDateArr: string[] = new Date(currentDate)
    .toDateString()
    .split(" ");
  const month = stringDateArr[1];
  const year = stringDateArr[3];

  return (
    <MonthSelectorContainer style={{ zoom: mini ? 0.7 : 1 }}>
      <Button
        ariaLabel="Previus month"
        size={50}
        onClick={() =>
          dispatch({ type: onlyYear ? "PREV_YEAR" : "PREV_MONTH" })
        }
      >
        <NavigateBeforeIcon />
      </Button>
      <Button
        size={50}
        ariaLabel="Next month"
        onClick={() =>
          dispatch({ type: onlyYear ? "NEXT_YEAR" : "NEXT_MONTH" })
        }
      >
        <NavigateNextIcon />
      </Button>
      <SelectedMonthContainer arial-label="testing" tabIndex={0}>
        {`${onlyYear ? "" : month + " - "}${year}`}
      </SelectedMonthContainer>
    </MonthSelectorContainer>
  );
};

export default withTheme(MonthSelector);
