import './App.css';
import Row from './Row'
import requests from './requests';
import Banner from './Banner'
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      

      <Nav/>
      <Banner />
      <Row 
        title="Netflix Originals" 
        fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow={true}/>

      <Row 
        title="Trending" 
        fetchUrl={requests.fetchTrending} 
        isLargeRow={false}/>
      
      <Row 
        title="Top-Rated" 
        fetchUrl={requests.fetchTopRated} 
        isLargeRow={false}/>


        <Row 
        title="Sci-Fi" 
        fetchUrl={requests.fetchSciFiMovies} 
        isLargeRow={false}/>

        <Row 
        title="Action" 
        fetchUrl={requests.fetchActionMovies} 
        isLargeRow={false}/>

        <Row 
        title="Comedy" 
        fetchUrl={requests.fetchComedyMovies} 
        isLargeRow={false}/>
      
      <Row 
        title="Documentaries" 
        fetchUrl={requests.fetchDocumentaries} 
        isLargeRow={false}/>

      <Row 
        title="Romance" 
        fetchUrl={requests.fetchRomanceMovies} 
        isLargeRow={false}/>  

      <Row 
        title="Horror" 
        fetchUrl={requests.fetchHorrorMovies} 
        isLargeRow={false}/>
      
      
      
      



    </div>
  );
}

export default App;
