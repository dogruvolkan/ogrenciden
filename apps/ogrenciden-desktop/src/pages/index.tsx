import styled from '@emotion/styled';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.@emotion/styled file.
   */
  return (
    <StyledPage>

      <div id="welcome">
        <h1 style={{ textAlign: "center" }}>
          <span> Hello </span>
          <br />
          DÜNYANIN EN TATLI  <br />
          KIZI
        </h1>
      </div>


    </StyledPage>
  );
}

export default Index;
