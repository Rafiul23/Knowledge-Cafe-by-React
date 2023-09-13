import Header from "./Components/Header"
import Blogs from "./Components/Blogs"
import Bookmarks from "./Components/Bookmarks"
import { useState } from "react"

function App() {
  
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog =>{
    const newBookMarks = [ ...bookmarks, blog];
    setBookmarks(newBookMarks);
  }

  const handleReadingTime = (time) => {
    setReadingTime(readingTime + time);
  }

  return (
    <>
     
      <Header></Header>  
      <main className="container mx-auto pt-4
       md:flex">
      <Blogs handleReadingTime={handleReadingTime} handleAddToBookmark={handleAddToBookmark}></Blogs>    
      <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </main> 

    </>
  )
}

export default App
