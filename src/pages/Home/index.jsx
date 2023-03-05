import { Container } from 'react-bootstrap';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import  NavBar from '../../components/NavBar/NavBar';


const Home = () => {
    return (
        <Container>
            <header>
                <NavBar/>
            </header>
            <ItemListContainer greeting="Bienvenido!"/>
            <h6>En nuestra pagina podras encontrar los vinilos mas buscados al mejor precio</h6>
        </Container>
    )
}

export {Home}