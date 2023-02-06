import { Container } from 'react-bootstrap';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import  NavBar  from '../../components/NavBar/NavBar';

const Contact = () => {
    return (
        <Container>
            <header>
                <NavBar/>
            </header>
            <ItemListContainer greeting="Contacto"/>
        </Container>
    )
}

export {Contact}