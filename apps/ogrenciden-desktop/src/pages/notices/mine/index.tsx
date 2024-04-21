import { css } from '@emotion/react';
import { SecondHands } from '@ogrenciden/types';
import { SecondHandNoticeCard } from 'libs/components/src/lib/components/notices/secondHands/SecondHandNoticeCard';
import { GetServerSideProps } from 'next';
import { useState } from 'react';

interface Props {
  secondHandNotices: SecondHands.SecondHand[];
}

export const MyNotices = (props: Props) => {
  const { secondHandNotices } = props;

  const [searchTerms, setSearchTerms] = useState('');

  const filteredSecondHand = secondHandNotices?.filter((notice) =>
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
        <h1>İkinci El İlanlarım</h1>
        <div css={secondHandNoticeCss}>
          {filteredSecondHand?.map((notice) => {
            return (
              <SecondHandNoticeCard secondHandNotice={notice} key={notice.ID} />
            );
          })}
        </div>
      </div>
      <div css={secondHandNoticeContainerCss}>
        <h1>Kitap & Not İlanlarım</h1>
        <div css={secondHandNoticeCss}>
          {secondHandNotices?.map((notice) => {
            return (
              <SecondHandNoticeCard secondHandNotice={notice} key={notice.ID} />
            );
          })}
        </div>
      </div>
      <div css={secondHandNoticeContainerCss}>
        <h1>Ev & Ev Arkadaşı İlanlarım</h1>
        <div css={secondHandNoticeCss}>
          {secondHandNotices?.map((notice) => {
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
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 40px;
  padding: 20px;
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
  gap: 20px;

  h1 {
    font-size: 2em;
    font-weight: bold;
  }
`;

const secondHandNoticeCss = css`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const jwt = context.req.cookies['jwt'];

  const secondHandNotices = await SecondHands.mySecondHandNotices({
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  if (!jwt) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      secondHandNotices: secondHandNotices,
    },
  };
};

export default MyNotices;
