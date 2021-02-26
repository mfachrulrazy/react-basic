import { useState, useEffect } from 'react';

const Experiments = () => {

  const [dataku, setDataku] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'oji', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'fachrul', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum 2...', author: 'oji', id: 3 },
    { title: 'Next Js Future', body: 'lorem ipsum...', author: 'razi', id: 4 },
    { title: 'Pro tips for developers', body: 'lorem ipsum 3...', author: 'oji', id: 5 }
  ]);

    const handleClick = (e) => {
      console.log('Hello blogs', e)
    }

    const handleClickAgain = (name, b) => {
      console.log('hello '+ name, b.target)
    }

  const [name, setName] = useState('Oji');
  const [age, setAge] = useState(24);

  const handleClick2 = () => {
    setName('Fachrul');
    setAge(29);
  }

  const [job, setJob] = useState('Programmer')

  useEffect(() => {
    console.log('use effect run');
    console.log(job);
  }, [job])

    return ( 
      <div className="home">
        <h1>Experiments Page</h1>
        <button onClick={handleClick}>Click</button>
        <br/>
        <button onClick={(b) => handleClickAgain('oji', b)}>Click Saya</button>
        <br/>
        <p>{ name } is { age } years old</p>
        <br/>
      <button onClick={handleClick2}>Click to Change</button>
      <br/>
      <button onClick={() => setJob('Designer')}>Change Pekerjaan</button>
      <p>{ job }</p>
      </div>
     );
}
 
export default Experiments;