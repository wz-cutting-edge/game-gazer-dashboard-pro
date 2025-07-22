import {useParams} from 'react-router-dom'
import SideBar from '../components/SideBar'

const DetailView = () => {
    const {id}=useParam()
  return (
    <div className="whole-page">
        <div className="SideBar">
            <SideBar/>
        </div>
        
        <div className="GameDetails">
            Details for game with ID: {id}
        </div>
    </div>
  )
}

export default DetailView