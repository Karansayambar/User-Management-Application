import { useState } from "react"
import Navbar from "../components/Navbar"
import User from "../components/User"
import FromModal from "../components/FromModal"

const HomePage = () => {
  const [isModalopen , setIsModalOpen] = useState(false)

  const togglemodal = () => {
    setIsModalOpen(prev => !prev)
  }

 
  return (
    <div>
      <Navbar onAddEmployeeClick={togglemodal}/>
      {isModalopen && <FromModal onClose={togglemodal}/>}
      <User/>
    </div>
  )
}

export default HomePage
 