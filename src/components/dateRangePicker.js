import React, { useState, useEffect } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function MyApp({tileDisabled}) {
  const [value, onChange] = useState([new Date(), new Date()]);

  useEffect(() => {
    console.log("Booking Period:", value[0].getDate()+"/"+(value[0].getMonth()+1)+"/"+value[1].getFullYear() + " to " + value[1].getDate()+"/"+(value[1].getMonth()+1)+"/"+value[1].getFullYear())
  })

  return (
    <div>
      <DateRangePicker tileDisabled={tileDisabled} onChange={onChange} value={value} />
    </div>
  );
}