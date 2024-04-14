import React, {Suspense, lazy} from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Loader from '../components/common/Loader'


const Landing= lazy(()=>import("../pages/landing/LandingPage"))
const Signin= lazy(()=> import("../pages/auth/SignIn"))
const Signup= lazy(()=> import("../pages/auth/SignUp"))
const Categorypage= lazy(()=> import("../pages/categories/CategoryPage"))
const Quizpage= lazy(()=> import("../pages/quizFlow/QuizQandAPage"))
const Leaderboardpage= lazy(()=> import("../pages/quizFlow/LeaderboardPage"))
const Layout= lazy(()=> import("../layout/LayoutComponent"))


const routeInfo=[
  {
    path:"/",
    element:Landing,
    layout:Layout
  },
  {
    path:"/signin",
    element:Signin,
    layout:Layout
  },
  {
    path:"/signup",
    element:Signup,
    layout:Layout
  },
  {
    path:"/categories",
    element:Categorypage,
    layout:Layout
  },
  {
    path:"/quiz/:quizId",
    element:Quizpage,
    layout:Layout
  },
  {
    path:"/score",
    element:Leaderboardpage,
    layout:Layout
  }
]

function CustomRouter() {
  
  return (
    <BrowserRouter>
     <Routes>
    {
      routeInfo.map((item, index)=>{
        const Element= item.element
        const Layout= item.layout
        return(
          <Route key={index} path={item.path} element={
            <Suspense fallback={<Loader/>}>
          <Layout>
            <Element/>
          </Layout>
         </Suspense>
          }/>
        )
      })
    }
     </Routes>
    </BrowserRouter>
  )
}

export default CustomRouter