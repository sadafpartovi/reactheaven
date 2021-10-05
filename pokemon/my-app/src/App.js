
import { useState, useEffect } from 'react';
import style from './my.module.css';
import Select from './Select'
import Card from './Card'
const data = [
  {
    id: 1,
    name: 'pokemon 1',
    url: 'https://source.unsplash.com/random',
    des: 'ksjsidjhiwhdisxaniaj'
  },

  {
    id: 2,
    name: 'pokemon 2',
    url: 'https://source.unsplash.com/random',
    des: 'ksjsidjhiwhdisxaniaj'
  },
  {
    id: 3,
    name: 'pokemon 3',
    url: 'https://source.unsplash.com/random',
    des: 'ksjsidjhiwhdisxaniaj'
  },
  {
    id: 4,
    name: 'pokemon 4',
    url: 'https://source.unsplash.com/random',
    des: 'ksjsidjhiwhdisxaniaj'
  },
]
function App(props) {
  const [list, setList] = useState(data);
  const [activePok, setActivePok] = useState();

  // const handleNext = async () => {
  //   const next = activePok.id + 1;
  //   console.log(next)
  //    const nextPoke = await list.find(item => item.id === next);
  //   console.log(nextPoke)
  //   setActivePok(nextPoke)
  //   console.log(activePok)
  // }
  useEffect(() => {
    if (activePok) {
      const next = activePok.id + 1;
      console.log(next)
       const nextPoke = list.find(item => item.id === next);
      console.log(nextPoke)
      setActivePok(nextPoke)
      console.log(activePok)

    }
  }, [activePok])


  return (
    <>
    <Select  list={list} setActivePok={setActivePok}/>
    <Card activePok={activePok}/>
    <button >Next</button>
    <button>Previous</button>
    </>
  );
}

export default App;
