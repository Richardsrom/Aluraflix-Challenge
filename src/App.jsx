import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import Home from './pages/Home.jsx'
import AddCategory from './pages/AddCategory.jsx'
import AddVideo from './pages/AddVideo.jsx'
import Page404 from './pages/Page404.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
   
  //Lista de videoCards
  const [videoCards, setVideoCards] = useState([{
   
    category:"Front End",
    code:"1",
    description:"nada",
    img:"https://i.ytimg.com/vi/PztCEdIJITY/maxresdefault.jpg",
    link:"https://www.youtube.com/watch?v=PztCEdIJITY",
    title:"Front End 1"
   },
   {
    category:"Front End",
    code:"1",
    description:"nada",
    img:"https://i.ytimg.com/vi/rpvrLaBQwgg/maxresdefault.jpg",
    link:"https://www.youtube.com/watch?v=rpvrLaBQwgg",
    title:"Front End 2"
   },
   {
    category:"Front End",
    code:"1",
    description:"nada",
    img:"https://i.ytimg.com/vi/GJfOSoaXk4s/maxresdefault.jpg",
    link:"https://www.youtube.com/watch?v=GJfOSoaXk4s",
    title:"Front End 3"
   },
   {
    category:"Front End",
    code:"1",
    description:"nada",
    img:"https://i.ytimg.com/vi/R9uaBxgCkyA/maxresdefault.jpg",
    link:"https://www.youtube.com/watch?v=R9uaBxgCkyA",
    title:"Front End 4"
   },
   {
    category:"Back End",
    code:"1",
    description:"nada",
    img:"https://i.ytimg.com/vi/t-iqt1b2qqk/maxresdefault.jpg",
    link:"https://www.youtube.com/watch?v=t-iqt1b2qqk",
    title:"Back End 1"
   },
   {
    category:"Back End",
    code:"1",
    description:"nada",
    img:"https://i.ytimg.com/vi/EoPvlE85XAQ/maxresdefault.jpg",
    link:"https://www.youtube.com/watch?v=EoPvlE85XAQ",
    title:"Back End 2"
   },
   {
    category:"Back End",
    code:"1",
    description:"nada",
    img:"https://i.ytimg.com/vi/cLLKVd5CNLc/maxresdefault.jpg",
    link:"https://www.youtube.com/watch?v=cLLKVd5CNLc",
    title:"Back End 3"
   },
   {
    category:"Back End",
    code:"1",
    description:"nada",
    img:"https://i.ytimg.com/vi/R9uaBxgCkyA/maxresdefault.jpg",
    link:"https://www.youtube.com/watch?v=R9uaBxgCkyA",
    title:"Back End 4"
   },
   {
    category:"Innovación y Gestión",
    code:"1",
    description:"nada",
    img:"https://i.ytimg.com/vi/vhwspfvI52k/maxresdefault.jpg",
    link:"https://www.youtube.com/watch?v=vhwspfvI52k",
    title:"Innovación y Gestión 1"
   },
   {
    category:"Innovación y Gestión",
    code:"1",
    description:"nada",
    img:"https://i.ytimg.com/vi/6N3OkLCfK-0/maxresdefault.jpg",
    link:"https://www.youtube.com/watch?v=6N3OkLCfK-0",
    title:"Innovación y Gestión 2"
   },
   {
    category:"Innovación y Gestión",
    code:"1",
    description:"nada",
    img:"https://i.ytimg.com/vi/YhR7Zp8NUzE/maxresdefault.jpg",
    link:"https://www.youtube.com/watch?v=YhR7Zp8NUzE",
    title:"Innovación y Gestión 3"
   },
   {
    category:"Innovación y Gestión",
    code:"1",
    description:"nada",
    img:"https://i.ytimg.com/vi/hamjv6G5shY/maxresdefault.jpg",
    link:"https://www.youtube.com/watch?v=TttMvhj4uu4&list=PLNKOkLkhi1Ke9j-o8dn6pdG38VPhAoJ1Y&index=24",
    title:"Innovación y Gestión 4"
   }])

  //Lista de categorias
  const [categories, setCategories] = useState([
    {
      title:'Front End',
      primaryColor:'#6bd0ff',
      description:"Formacion Front End Alura Latam"
    },
    {
      title:'Back End',
      primaryColor:'#00C86F',
      description:'Formacion Back End Alura Latam'
    },
    {
      title:'Innovación y Gestión',
      primaryColor:'#FE8C2A',
      description:'Formacion Innovación y Gestión Alura Latam'
    },

  ])

  //Registrar video card
  const registerVideoCard = (videoCard) => {
    setVideoCards([...videoCards, videoCard])
  }

  //Eliminar categoria
  const deleteCategory = (title) => {
    console.log('Eliminar categoria', title)
    const newCategory = categories.filter( (category) => category.title !== title )
    setCategories(newCategory)
  }

  //Crear nueva categoria
  const createCategory = (newCategory) => {
    console.log(newCategory)
    setCategories([...categories, {  ...newCategory }])

  }
    

  return (
    <Router>
      <Header />
      <Routes>
        <Route 
          path='/' 
          element={
            <Home 
               videoCards={videoCards}
               categories={categories}
               setCategories={setCategories}
            />
          }
        />
        <Route 
          path='/addvideo' 
          element={
            <AddVideo 
              videoCards={videoCards}
              setVideoCards={setVideoCards}
              categories={categories}
              registerVideoCard={registerVideoCard}
            />
          }
        />
        <Route 
          path='/addcategory'
          element={
            <AddCategory 
              createCategory={createCategory}
              categories={categories}
              deleteCategory={deleteCategory}
              setCategories={setCategories}
            />
          }
        />
        <Route 
          path='*'
          element={
            <Page404 />
          }
        />
      </Routes>
      <Footer />
    </Router>

  )
}

export default App

