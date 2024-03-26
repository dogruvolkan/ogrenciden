import { css } from '@emotion/react';
import { RequestCards } from '@ogrenciden/components';
import { UserRequest } from '@ogrenciden/types';
import { GetServerSideProps } from 'next';
import { useState } from 'react';

interface Props {
  requests: UserRequest.Request[];
}

export const MyRequests = (props: Props) => {
  const { requests } = props;

  const [searchTerms, setSearchTerms] = useState('');

  const filteredRequest = requests.filter((request) =>
  request.Title.toLowerCase().includes(searchTerms.toLowerCase())
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
      <div css={requestContainerCss}>
        <h1>Taleplerim</h1>
        <div css={requestCss}>
          {filteredRequest?.map((request) => {
            return <RequestCards key={request.ID} request={request} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MyRequests;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const jwt = context.req.cookies['jwt'];

  const requests = await UserRequest.myRequests({
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  if (!jwt) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      requests: requests,
    },
  };
};

const containerCss = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  padding: 20px;

  h1 {
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 20px;

    span {
      font-size: 0.5em;
      font-weight: normal;
      vertical-align: middle;
    }
  }
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

const requestContainerCss = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const requestCss = css`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
`;
