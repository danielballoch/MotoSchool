import React, { useState, useEffect } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function MyApp({tileDisabled}) {
  const [value, onChange] = useState([new Date(), new Date()]);
  return (
    <div>
      <DateRangePicker tileDisabled={tileDisabled} onChange={onChange} value={value} />
    </div>
  );
}