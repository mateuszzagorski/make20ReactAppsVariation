import React, { useState } from "react";
import styled, { css } from "styled-components";

const calendarDates = Array(31)
    .fill(0)
    .map((e, i) => i);

export default function CalendarPicker() {
    const [choosingType, setChoosingType] = useState("start");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [hoverDate, setHoverDate] = useState(null);

    function updateDate(chosenDay) {
        //handle if user chose before our current range
        if (startDate && chosenDay < startDate) {
            setStartDate(chosenDay);
            return setChoosingType("end");
        }

        //handle if user chose after our current range
        if (endDate && chosenDay > endDate) {
            setEndDate(chosenDay);
            return setChoosingType("end");
        }

        if (choosingType === "start") {
            setStartDate(chosenDay);
            return setChoosingType("end");
        }
        if (choosingType === "end") {
            setEndDate(chosenDay);
        }
    }
    function checkInBetween(day) {
        if (startDate && !endDate) {
            return day > startDate && day < hoverDate;
        }
        return day > startDate && day < endDate;
    }

    return (
        <StyledAppContainer>
            <StyledCalendarContainer>
                <StyledDateChooser>
                    <StyledDateChooserButton
                        onClick={() => setChoosingType("start")}
                        isChoosing={choosingType === "start"}
                    >
                        Start Date <span>{startDate}</span>
                    </StyledDateChooserButton>
                    <StyledDateChooserButton
                        onClick={() => setChoosingType("end")}
                        isChoosing={choosingType === "end"}
                    >
                        End Date <span>{endDate}</span>
                    </StyledDateChooserButton>
                </StyledDateChooser>

                <StyledCalendar>
                    {calendarDates.map((day, index) => {
                        const dayNumber = day + 1;

                        let isInBetween = checkInBetween(dayNumber);
                        let isSelected =
                            dayNumber === startDate || dayNumber === endDate;

                        return (
                            <StyledCalendarDay
                                key={index}
                                isInBetween={isInBetween}
                                isSelected={isSelected}
                                onClick={() => updateDate(dayNumber)}
                                onMouseOver={() => setHoverDate(dayNumber)}
                            >
                                {dayNumber}
                            </StyledCalendarDay>
                        );
                    })}
                </StyledCalendar>
            </StyledCalendarContainer>
        </StyledAppContainer>
    );
}
const StyledCalendarContainer = styled.div`
    margin: 0 auto;
    max-width: 1200px;
`;

const StyledAppContainer = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap");
    font-family: "Balsamiq Sans", cursive !important;
    background: #d6e3f8;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
        font-family: "Balsamiq Sans", cursive !important;
    }
`;

const StyledDateChooser = styled.div`
    display: flex;
    max-width: 300px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 20px;
`;

const StyledDateChooserButton = styled.button`
    color: #0b204c;
    text-transform: uppercase;
    flex: 1;
    padding: 15px;
    background: none;
    cursor: pointer;
    border: none;
    border-bottom: 2px solid rgba(11, 32, 76, 0.2);
    outline: none;
    border-color: ${(props) => (props.isChoosing ? "#0b204c" : "none")};

    span {
        display: block;
        min-height: 60px;
        font-size: 50px;
    }
`;

const StyledCalendar = styled.div`
    max-width: 400px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 10px 10px -5px rgba(0, 0, 0, 0.04);
    background: #0b204c;
    color: #fff;
    padding: 20px;
    margin: 0 auto;
`;

const StyledCalendarDay = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    transition: 0.3s ease background;
    border: none;
    outline: none;
    cursor: pointer;
    color: #8096c1;
    background: none;

    ${(props) =>
        props.isSelected &&
        css`
            background: #1a1a1a !important;
            color: #eee;
        `}

    ${(props) =>
        props.isInBetween &&
        css`
            background: #254381 !important;
            color: #eee;
        `}

  &:hover {
        color: #eee;
        background: #254381;
    }
`;
