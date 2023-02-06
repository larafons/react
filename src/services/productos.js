import { vinilos } from "../data/vinilos";

const getAll = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(vinilos);
        }, [1000]);
    });
};

const getById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(vinilos.find((elem) => elem.id.toString() === id));
        }, [1000]);
    });
};

export const productosService = {getAll, getById}