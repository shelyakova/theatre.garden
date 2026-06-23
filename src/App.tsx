import React, { useEffect, useState } from 'react';
import { getCheckboxData } from './api';

export const App: React.FC = () => {
  const [checkboxData, setCheckboxData] = useState(null);
  const getData = async () => {
    const data = await getCheckboxData();

    setCheckboxData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>Theatre Garden в розробці</div>
      <div>
        <ul>
          {checkboxData?.map((item: any) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
