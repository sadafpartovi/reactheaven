import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [user, setuser] = useState([]);
  const [page, setPage] = useState(1);

  const getUser = async () => {
    try {
      const { data } = await axios.get(
        `https://randomuser.me/api?page=${page}`
      );

      console.log('----', data);
      const newUser = [...user, ...data.results];
      setuser(newUser);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();

  }, [page]);

  const handleName = (user) => {
   
    const {
      name: { first, last },
    } = user;

    return `${first} ${last}`;
  };
  return (
    <>
      {user &&
        user.map((item) => (
          <>
            <p>{handleName(item)}</p>
            <img alt="user" src={item.picture.medium} />
          </>
        ))}
      <button onClick={() => setPage(page + 1)}>Load More</button>
    </>
  );
}

export default App;
