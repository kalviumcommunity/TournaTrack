import { useEffect, useState } from 'react';
import Tournament from './Tournament';

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
