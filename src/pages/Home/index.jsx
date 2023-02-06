import { Container } from 'react-bootstrap';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import  NavBar from '../../components/NavBar/NavBar';


const Home = () => {
    return (
        <Container>
            <header>
                <NavBar/>
            </header>
            <ItemListContainer greeting="Bienvenido a Kuba"/>
        </Container>
    )
}

export {Home}