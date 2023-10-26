import { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import "./printInputGrid.css"
import { UserContext } from "../..";





export const PrintInputGrid = () => {
    const {id} = useParams()
    const HHeader = [" ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", " "]
    const VHEADER = [1, 2, 3, 4, 5]
    const socket = useContext(UserContext)
    // const dispatch = useDispatch()
    const [input, setInput] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        socket.emit('fetch-secret', {id})
    },[])

    useEffect(() => {
        socket.on('receive-secret', (secret) => {
            console.log(`the received secret from server is ${JSON.stringify(secret, null, 2)}`)
            setInput(prev => ({...prev, ...secret}))
            setLoading(false)
        })
    }, [socket])


    useEffect(() => {
        console.log(`the input data is ${JSON.stringify(input, null, 2)}`)
    }, [input])

    if(loading) return <div><h1>Loading....</h1></div>
    if(!loading) return(<div className="gr-wrapper loaded">
            <h1 className="gr-title">Epiration Date / Fecha de Vencimiento:</h1>
            <div className="gr-table">
                <div className="gr-header">
                    {HHeader.map((header,index) => <div className="box header" key={index}>{header}</div>)}
                </div>
               
                {VHEADER.map((vh,index) => (
                    <div className="gr-header" key={index}>
                        <div className="box header" >{index +1}</div>
                         {[1,2,3,4,5,6,7,8,9,10].map((inp,j) => <div key={j} className="box inp"><input type="text" name={`${String.fromCharCode(64+inp)}_${index+1}`} value={input[`${String.fromCharCode(64+inp)}_${index+1}`] ? input[`${String.fromCharCode(64+inp)}_${index+1}`] : ""}/></div>)}
                        <div className="box header">{index + 1 }</div>
                    </div>
                ))} 
            </div>
        </div>
    )
    
}