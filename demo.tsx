import React, { useState } from 'react';
import './index.css';
import DateRangePicker from './Test';
// import { DatePicker, Space } from 'antd';
// import DateRangePicker from '@wojtekmaj/react-daterange-picker';
// import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
// import 'react-calendar/dist/Calendar.css';

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

// const { RangePicker, _InternalRangePanelDoNotUseOrYouWillBeFired } = DatePicker;

const App: React.FC = () => {
  // const [value, onChange] = useState<Value>([new Date(), new Date()]);

  return (
    <>
      {/* <DateRangePicker onChange={onChange} value={value} /> */}

      <DateRangePicker />

      {/* <Space direction="vertical" size={12}>
        <RangePicker
          style={{
            '.dateRangePicker .ant-picker-panel:nth-child(2)': {
              display: 'none',
            },
            '.dateRangePicker .ant-picker-panel:nth-child(1) button': {
              visibility: 'visible !important',
            },
          }}
        />
        <_InternalRangePanelDoNotUseOrYouWillBeFired />

        <RangePicker showTime />
        <RangePicker picker="week" />
        <RangePicker picker="month" />
        <RangePicker picker="quarter" />
        <RangePicker
          picker="year"
          id={{
            start: 'startInput',
            end: 'endInput',
          }}
          onFocus={(_, info) => {
            console.log('Focus:', info.range);
          }}
          onBlur={(_, info) => {
            console.log('Blur:', info.range);
          }}
        />
      </Space> */}
    </>
  );
};

export default App;
