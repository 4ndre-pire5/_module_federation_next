import { ReactNode } from 'react';
import Navbar from '../navbar'

type ConteinerProps = {
    children: ReactNode;
}

const mainConteiner = ( {children}:ConteinerProps ) =>{
    return(
        <>
            <Navbar />
            <div>{ children }</div>
        </>
    );
};
 export default mainConteiner;