import { useEffect, useState } from 'react';
import Tournament from './Tournament';
import { Link} from 'react-router-dom';
import { Button, Flex } from '@chakra-ui/react';
const Created = () => {
  const [data, setData] = useState();
  // const [pData, setPData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${process.env.REACT_APP_API}/home`)
      const tData = await res.json()
      // const finalData=tData.post
      setData(tData.post)
      // if (tData.post.participents) {setPData(tData.post.participents)
      //   console.log(tData.post.participents);
      // }
    }
    getData()
  }, []);
  return (
    <div>
      <Tournament />
      <Link to ='/sechdule'>
      <Flex justifyContent={'flex-end'} alignItems={'baseline'} mt='5vh' mr='5vw'>
          <Button
            borderRadius={0} color={'white'} bg={'#7C6A96'} boxShadow={'2px black'} _hover={{}} marginBottom={'20px'}>Sechdule matches</Button>
        </Flex>
        </Link>
      {data &&
        data.map((elem, ind) => {
          return <div key={ind}>
           {
              elem.participents.length > 0 &&
              elem.participents.map((e, i) => {
                console.log(e);
                return (
                  <div key={i}>
                    Hello
                    <p>Team: {e.team_name}</p>
                    <p>Captain: {e.captain}</p>
                    <p>Contact: {e.contact}</p>
                    <p>Payment: {e.payment}</p>
                  </div>)
              })
            }
          </div>
        })
      }
        
    </div>
  );
}

export default Created;
