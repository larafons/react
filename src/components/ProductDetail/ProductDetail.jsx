import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productosService } from "../../services/productos";
import { Vinilo } from '../../components/Vinilo/Vinilo';

function ProductDetail () {
    const [vinilo, setVinilo] = useState();
    const {productId} = useParams();

    useEffect(() => {
        productosService.getById(productId).then(
            data => setVinilo(data)
        )
      }, [])
    return (
            <Vinilo 
                id={vinilo && vinilo.id} 
                image={vinilo && `/image/${vinilo.img}`}  
                name={vinilo && vinilo.name}  
                artist={vinilo && vinilo.artist} 
                description={vinilo && vinilo.description} 
            />

    );
}

export { ProductDetail }