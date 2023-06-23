import axios from 'axios';
import React, { useEffect, useState } from 'react';


const useAllData = () => {
  const [sidebar, setSidebar] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      const result = (
        await Promise.all([
          axios.put("http://localhost:5050/api/sketch/", {
            apikeys: "abcde"
          }),
        ])
      ).map((r) => r.data);
      const [sidebarResult] = await Promise.all(
        result
      );
      setSidebar(sidebarResult);
    };

    dataFetch();
  }, []);

  return { sidebar };
};

const App = () => {
  const { sidebar } = useAllData()
  if (!sidebar) return (
    <>
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </>
  );

  return (
    <div className='sketch'>
    <main>
      <div className='container'>
          <h1>
            <a href='/'>Keqing Bot | Community's Sketch Gallery</a>
          </h1>
          <hr/>
          <div class="cards"> 
          {/* <div className="row"> */}
            {sidebar.map(todo => 
                <div class="card">
                  <h2 class="card-title">{todo.name}</h2>
                  <img src={todo.imageUrl} alt="" width={150}/>
                  <div class="card-desc">
                  <p >Code: <code>{todo.code}</code></p>
                  <p > Ink: 🩸 {todo.ink.toLocaleString()}</p> 
                  <p> Sketcher: {todo.sketcher}</p>
                  <p >Owner: {todo.owner}</p>  
                </div>
              </div>
            )}
            </div>
      </div>
    </main>
    </div>
    
  )
}

export default App