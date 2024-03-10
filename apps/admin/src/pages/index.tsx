import styled from '@emotion/styled';
import { Category } from '@ogrenciden/types';
import { useEffect } from 'react';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {

  useEffect(() => {
    Category.publicList().then((res) => {
      console.log(res);
    });
  }, [])

  return (
   <div>
    hello
   </div>
  );
}

export default Index;
