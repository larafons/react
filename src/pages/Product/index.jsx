import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Vinilo from '../../components/Vinilo/Vinilo';
import { productosService } from "../../services/productos";
import NavBar from '../../components/NavBar/NavBar';
import './Product.css'

function Product () {
    const [vinilo, setVinilo] = useState();
    const {productId} = useParams();

    useEffect(() => {
        productosService.getById(productId).then(
            data => setVinilo(data)
        )
      }, [])
      return (
        <Container>
        <header>
            <NavBar/>
        </header>
        <div>
        <Vinilo 
            id={vinilo && vinilo.id} 
            image={vinilo && `/image/${vinilo.img}`}  
            name={vinilo && vinilo.name}  
            artist={vinilo && vinilo.artist} 
            description={vinilo && vinilo.description}
            price={vinilo && vinilo.price}
        />
        </div>
        </Container>
        );

      }

export {Product}

