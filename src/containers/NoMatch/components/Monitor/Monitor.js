import React from 'react';

import styled from "styled-components";

const DivWrapper = styled('div')`
  display: flex;
  justify-content: flex-start;
  background-color: white;
	color: black;
	padding: 16px;
`;

const TextWrapper = styled('span')`
  font-size: 22px;
`;

const TitleWrapper = styled(TextWrapper)`
  font-weight: bold;
  margin-right: 8px;
`;

const ButtonWrapper = styled('button')`
  border: unset;
	background-color: #E6E6FA;
	height: 20px;
	margin-right: 2px;
  
	border-radius: 4px;
  border-color: black;
	color: black;
  outline: unset;
  cursor: pointer;

`;
const TodayButton = styled(ButtonWrapper)`
  padding-right: 16px;
	padding-left: 16px;
	font-weight: bold;
  margin-left: 8px;
  justify-content: center;
`;

export const Monitor = ({ today, prevHandler, todayHandler, nextHandler }) => {

  return (
    <DivWrapper>
      <div>
        <ButtonWrapper onClick={prevHandler}>  &lt; </ButtonWrapper>
        <TitleWrapper>{today.format('MMMM')}</TitleWrapper>
        <TextWrapper>{today.format('YYYY')}</TextWrapper>
        <ButtonWrapper onClick={nextHandler}>&gt;</ButtonWrapper>
        <TodayButton onClick={todayHandler}>Today</TodayButton>

      </div>
    </DivWrapper>

  );
};