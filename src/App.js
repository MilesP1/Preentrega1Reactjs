import Title from "./components/navbar/NavBar";
import "bulma/css/bulma.css"
import ItemListContainer from "./components/navbar/ListContainer/ItemListContainer";





function App(){

   return (
    <div className="App">
    <Title />
    <ItemListContainer greeting={"Bienvenido"} />
    </div>
   )
}

export default App;