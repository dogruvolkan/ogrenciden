import { GetServerSideProps } from 'next';
import { SecondHands } from '@ogrenciden/types';
import { css } from '@emotion/react';
import { SecondHandNoticeCard } from '@ogrenciden/components';
import { useState } from 'react';

export interface Props {
  secondHand: SecondHands.SecondHand[];
}

export const Notices = (props: Props) => {
  const { secondHand } = props;

  const [searchTerms, setSearchTerms] = useState('');

  const filteredSecondHand = secondHand.filter((notice) =>
    notice.Title.toLowerCase().includes(searchTerms.toLowerCase())
  );

  return (
    <div css={containerCss}>
      <input
        css={searchCss}
        type="search"
        placeholder="Ara..."
        value={searchTerms}
        onChange={(e) => setSearchTerms(e.target.value)}
      />
      <div css={secondHandNoticeContainerCss}>
        <h1>İkinci El İlanlar</h1>
        <div css={secondHandNoticeCss}>
          {filteredSecondHand?.map((notice) => {
            return (
              <SecondHandNoticeCard secondHandNotice={notice} key={notice.ID} />
            );
          })}
        </div>
      </div>
      <div css={secondHandNoticeContainerCss}>
        <h1>Kitap ve Not İlanları</h1>
        <div css={secondHandNoticeCss}>
          {secondHand?.map((notice) => {
            return (
              <SecondHandNoticeCard secondHandNotice={notice} key={notice.ID} />
            );
          })}
        </div>
      </div>
      <div css={secondHandNoticeContainerCss}>
        <h1>Ev ve Ev Arkadaşı İlanları</h1>
        <div css={secondHandNoticeCss}>
          {secondHand?.map((notice) => {
            return (
              <SecondHandNoticeCard secondHandNotice={notice} key={notice.ID} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const containerCss = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 90%;
  margin: 20px auto;
`;

const searchCss = css`
  width: 50%;
  height: 50px;
  padding: 0 20px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  font-size: 1em;
  outline: none;
  margin-bottom: 20px;
`;

const secondHandNoticeContainerCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  h1 {
    font-size: 2em;
    font-weight: bold;
  }
`;

const secondHandNoticeCss = css`
  display: flex;
  gap: 30px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const secondHand = await SecondHands.publicList({
    filter: ['Published=true'],
  });

  return {
    props: {
      secondHand: secondHand,
    },
  };
};

export default Notices;
