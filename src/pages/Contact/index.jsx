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
            <br />
            <h4>Escribinos a contacto@vinilosba.com</h4>
        </Container>
    )
}

export {Contact}