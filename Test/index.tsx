// DateRangePicker.tsx
import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateRangePicker.css';
import { addDays } from 'date-fns';
import { Select, MenuItem } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

const DateRangePicker: React.FC = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(addDays(new Date(), 7));
    const [month, setMonth] = useState<number>(new Date().getMonth());
    const [year, setYear] = useState<number>(new Date().getFullYear());

    const handleDateChange = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const handleMonthChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setMonth(event.target.value as number);
    };

    const handleYearChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setYear(event.target.value as number);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0 1rem' }}>
                    <Select
                        value={month}
                        onChange={handleMonthChange}
                        style={{ width: '100px', marginRight: '10px' }}
                    >
                        {months.map((month, index) => (
                            <MenuItem key={index} value={index}>
                                {month}
                            </MenuItem>
                        ))}
                    </Select>
                    <Select
                        value={year}
                        onChange={handleYearChange}
                        style={{ width: '100px' }}
                    >
                        {years.map((year, index) => (
                            <MenuItem key={index} value={year}>
                                {year}
                            </MenuItem>
                        ))}
                    </Select>
                </div>
                <DatePicker
                    selected={startDate}
                    onChange={handleDateChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    inline
                    showPopperArrow={false}
                    renderCustomHeader={({
                        date,
                        changeYear,
                        changeMonth,
                        decreaseMonth,
                        increaseMonth,
                    }) => (
                        <div style={{ margin: 10, display: "flex", justifyContent: "space-between" }}>
                            <button onClick={decreaseMonth} className="react-datepicker__navigation react-datepicker__navigation--previous">
                                <ArrowBack />
                            </button>
                            <button onClick={increaseMonth} className="react-datepicker__navigation react-datepicker__navigation--next">
                                <ArrowForward />
                            </button>
                        </div>
                    )}
                />
            </div>
        </div>
    );
};

export default DateRangePicker;
