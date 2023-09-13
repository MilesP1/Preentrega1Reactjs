import CartWidget from "./CartWidget/CartWidget";

const Title = () => {

    return(
        <nav className="hero is-info">
            <div className="body">
                <h1 className="title has-text-centered">Filliskeb</h1>
            </div>
            <div className="columns is-mobile is-centered m-2">
                <button className="button is-rounded is-dark column is-2 p-2">Cursos</button>
                <button className="button is-rounded is-dark column is-2 p-2">Eventos</button>
                <button className="button is-rounded is-dark column is-2 p-2">Bolsa de Trabajo</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Title;