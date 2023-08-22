import { useEffect } from "react";
import { getUpcomingMovies } from "./apis";

function App() {

  const callgetUpcomingList = async () => {
    console.log("callgetUpcomingList")
    const response = await getUpcomingMovies();
    console.log(response);
  }
  useEffect(() => {
    callgetUpcomingList();
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
