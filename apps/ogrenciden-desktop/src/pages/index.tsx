import styled from '@emotion/styled';
import { useEffect, useState } from 'react';


const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3000/api/v1/public/sectors'); // API URL'sini buraya ekleyin
        const data = await response.json();
        console.log('Data:', data)
        setStudents(data);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>

    </>
  );
}

export default Index;
