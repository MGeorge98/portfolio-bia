'use client';

import { useEffect, useState } from 'react';

const fmt = (d: Date) => {
  try {
    return new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Europe/Lisbon',
    }).format(d);
  } catch {
    return (
      String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0')
    );
  }
};

export default function Clock() {
  const [time, setTime] = useState('--:--');

  useEffect(() => {
    setTime(fmt(new Date()));
    const id = window.setInterval(() => setTime(fmt(new Date())), 30000);
    return () => clearInterval(id);
  }, []);

  return <span id="clock">{time}</span>;
}
