import moment from 'moment';
import React from 'react';
import styled from 'styled-components'

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    //grid-template-rows: repeat(6, 1fr);
    grid-gap: 1px;
    background-color: #404040;
`;

const CellWrapper = styled.div`
    min-width: 70px; //140
    min-height: 70px; // 80
    background-color:  ${props => props.isWeekend ? '#27282A': '#1E1F21' };
    color: ${props => props.isSelectedMonth ? '#DDDDDD': '#555759' };
`;

const RowInCell = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
    ${props => props.pl && `padding-left: ${props.pl * 8 }px`}
    
	
`;

const DayWrapper = styled.div`
	height: 33px;
	width: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
;`

const CurrentDay = styled('div')`
  height: 100%;
  width: 100%;
  background: #f00;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ShowDayWrapper = styled.div`
    display: flex;
    justify-content: flex-start;

`;

const EventListWrapper = styled('ul')`
    margin: unset;
    list-style-position: inside;
    padding-left: 4px;

`;

const EventItemWrapper = styled('button')`
   position: relative;
   left: -14px;
   text-overflow: ellipsis;
   overflow: hidden;
   white-space: nowrap;
   width: 114px;
   border: unset;
   background: unset;
   color: #DDDDDD;
   cursor: pointer;
   margin: 0;
   padding: 0;
`;


export const CalendarGrid = ({startDay, today, totalDay, events, openFormHandler}) => {

    
    const day = startDay.clone().subtract(1, 'day');
    const daysMap = [...Array(totalDay)].map(() => day.add(1, 'day').clone())

    const isCurrentDay = (day) => moment().isSame(day,  'day')
    const isSelectedMonth = (day) => today.isSame(day,  'month')
    
    return (
        
        <GridWrapper>
            {[...Array(7)].map((_, i) => (
                <CellWrapper isSelectedMonth key={i}>
                    <RowInCell justifyContent={'flex-start'} pl={1}>
                        {moment().day(i + 1).format('ddd')}
                    </RowInCell>
                </CellWrapper>
            ))}


            {
                daysMap.map((dayItem) => (
                    <CellWrapper
                        //key = {dayItem.format('DDMMYYYY')}
                        isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
                        key={dayItem.unix()}
                        isSelectedMonth={isSelectedMonth(dayItem)}
                    >
                        <RowInCell
                            justifyContent={'flex-start'}
                        >
                            <ShowDayWrapper>
                                <DayWrapper onDoubleClick={() => openFormHandler('Create')}>
                                    {
                                        isCurrentDay(dayItem) ? (
                                            <CurrentDay>{dayItem.format('D')}</CurrentDay>
                                        ) : (
                                            dayItem.format('D')
                                        )
                                    }
                                </DayWrapper>
                            </ShowDayWrapper>

                                <EventListWrapper>
                                    {
                                        events
                                            .filter(event => event.date >= dayItem.format('X') && event.date <= dayItem.clone().endOf('day').format('X'))
                                            .map(event =>(
                                                <li key={event.id}>
                                                    <EventItemWrapper onDoubleClick={() => openFormHandler('Update',event)}>
                                                    {event.title}
                                                    </EventItemWrapper>

                                                </li>
                                            ))
                                    }
                                </EventListWrapper>

                        </RowInCell>

                    </CellWrapper>
                ))
            }



    </GridWrapper>
    
  );
};
