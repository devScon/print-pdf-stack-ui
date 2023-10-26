import { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams } from 'react-router-dom';
import { useradded } from "../../store/features/userSlice";
import { secretupdated } from "../../store/features/secretSlice";
import axios from "axios";
// import { useSocket } from "../../hooks/socketHook";
import "./inputGrid.css"
import { UserContext } from "../..";






export const InputGrid = () => {
    const location = useLocation();
    const currentURL = location.pathname;
    const {id} = useParams()
    const HHeader = [" ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", " "]
    const VHEADER = [1, 2, 3, 4, 5]
    const socket = useContext(UserContext)
    const dispatch = useDispatch()
    const [input, setInput] = useState({})
    const user = useSelector(state => state.user.id)

    useEffect(() => {
        socket.on('add-user', (id) => { dispatch(useradded(id))})
    }, [socket])

    const handleInput = (e) => {
        setInput((prev) => ({...prev, [e.target.name]: e.target.value}))
        
    }

    const handlePdfConv = async () => {
        const download = (await import('downloadjs')).default;
        const response = await axios.get(`http://localhost:5000/print/${user}`)
        console.log(`the received response is ${JSON.stringify(response, null, 2)}`)
        download(response.data.url)
    }

    useEffect(() => {
        socket.emit('user-input', input)
        dispatch(secretupdated({secret: input}))
    },[input])

    return(
        <div className="gr-wrapper">
            <h1 className="gr-title">Epiration Date / Fecha de Vencimiento:</h1>
            <div className="gr-table">
                <div className="gr-header">
                    {HHeader.map((header,index) => <div className="box header" key={index}>{header}</div>)}
                </div>
               
                {VHEADER.map((vh,index) => (
                    <div className="gr-header" key={index}>
                        <div className="box header" >{index +1}</div>
                         {[1,2,3,4,5,6,7,8,9,10].map((inp,j) => <div key={j} className="box inp"><input type="text" onChange={(e) => handleInput(e)} name={`${String.fromCharCode(64+inp)}_${index+1}`} value={input[`${String.fromCharCode(64+inp)}_${index+1}`] ? input[`${String.fromCharCode(64+inp)}_${index+1}`] : ""}/></div>)}
                        <div className="box header">{index + 1 }</div>
                    </div>
                ))} 
            </div>
             <button onClick={handlePdfConv} className="btn_prim">Export to PDF</button>
        </div>
    )
}