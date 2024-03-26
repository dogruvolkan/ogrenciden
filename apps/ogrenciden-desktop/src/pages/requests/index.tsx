import { GetServerSideProps } from 'next';
import { UserRequest } from '@ogrenciden/types';
import { RequestCards } from '@ogrenciden/components';
import { css } from '@emotion/react';
import { useState } from 'react';

export interface Props {
  requests: UserRequest.Request[];
}

export const Requests = (props: Props) => {
  const { requests } = props;

  const [searchTerms, setSearchTerms] = useState('');

  const filteredRequest = requests.filter((request) =>
  request.Title.toLowerCase().includes(searchTerms.toLowerCase())
  );

  return (
    <div css={requestCss}>
      <input
        css={searchCss}
        type="search"
        placeholder="Ara..."
        value={searchTerms}
        onChange={(e) => setSearchTerms(e.target.value)}
      />
      <h1>
        Talepler <span>({requests.length} talep bulundu)</span>
      </h1>
      <div css={requestContainerCss}>
        {filteredRequest?.map((request) => (
          <RequestCards key={request.ID} request={request} />
        ))}
      </div>
    </div>
  );
};

const requestCss = css`
  margin: 20px auto;
  width: 100%;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2em;
    font-weight: bold;

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
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  margin-top: 20px;
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const requests = await UserRequest.publicList({
    filter: ['Published=true'],
  });

  return {
    props: {
      requests: requests,
    },
  };
};

export default Requests;
