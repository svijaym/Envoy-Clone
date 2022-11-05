import{ useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Components/Context/AuthContext'

const PrivateRoutes = ({children}) => {
    const[auth] = useContext(AuthContext);
    const navigate = useNavigate();
    if(!auth){
        navigate("/");
    }
  return (
    {children}
  )
}

export default PrivateRoutes