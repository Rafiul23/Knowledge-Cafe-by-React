import Header from "./Components/Header"
import Blogs from "./Components/Blogs"
import Bookmarks from "./Components/Bookmarks"

function App() {
  

  return (
    <>
     
      <Header></Header>  
      <main className="container mx-auto pt-4
       md:flex">
      <Blogs></Blogs>    
      <Bookmarks></Bookmarks>
      </main> 

    </>
  )
}

export default App
