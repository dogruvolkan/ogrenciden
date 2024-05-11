/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { City } from '@ogrenciden/types';
import { css } from '@emotion/react';
import HouseBodyNotice from './housebodynotice/HouseBodyNotice';
import HouseNotice from './housenotice/HouseNotice';

interface Props {
  cities: City.City[];
}

export const HouseAndHouseBody = (props: Props) => {
  const { cities } = props;
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div>
      <div css={tabsCss}>
        <button css={houseTab(activeTab)} onClick={() => setActiveTab('tab1')}>
          Ev İlanı
        </button>
        <button
          css={houseBodyTab(activeTab)}
          onClick={() => setActiveTab('tab2')}
        >
          Ev Arkadaşı İlanı
        </button>
      </div>

      {activeTab === 'tab1' ? (
        <HouseNotice cities={cities}/>
      ) : (
        <HouseBodyNotice cities={cities} />
      )}
    </div>
  );
};

export default HouseAndHouseBody;

const tabsCss = css`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f1f1f1;
  width: 50%;
  height: 50px;
  border-radius: 10px;
`;

const houseTab = (active: string) => css`
  background-color: ${active === 'tab1' ? '#ffffff' : '#f1f1f1'};
  cursor: pointer;
  width: 150px;
  padding: 10px;
  border-radius: 10px;
`;

const houseBodyTab = (active: string) => css`
  background-color: ${active === 'tab2' ? '#ffffff' : '#f1f1f1'};
  cursor: pointer;
  width: 150px;
  padding: 10px;
  border-radius: 10px;
`;
