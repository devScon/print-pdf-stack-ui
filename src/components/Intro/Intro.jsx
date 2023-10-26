import "./intro.css"

export const  Intro = () => {
    return (
        <div className="intro__wrapper">
            <div className="intro en">
                <h1>This is your personal Security eGrid to sign-in to Scotia Online for <br/> Business</h1>
                <p>Use the security eGrid to sign-in to Scotia Online for Business untill you receive your Security Token <br/> replacement</p>
                <p>We recommend that you save and print this Security eGrid so that it is readily available to you at the time of <br/> your sign-in to Scotia Online for Business</p>
            </div>
            <div className="intro es">
                <h1>A Coninuacion se incluye su eGrid de Seguridad personal para ingresar <br/> a Scotia en Linea Empresarial</h1>
                <p>Utilice el eGrid de seguridad para ingresar a Scotia en Linea Empresarial hasta que reciba su dispositivo de <br/> seguridad de reemplazo</p>
                <p>Le recomendamos que guarde e imprima este eGrid de seguridad para tenerlo a la mano cuando ingrese a <br/> Scotia en Linea Empresarial.</p>
            </div>
        </div>
    )
}