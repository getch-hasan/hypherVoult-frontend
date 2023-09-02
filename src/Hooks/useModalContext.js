
import { useContext } from 'react';
import { ModalContext } from '../Contex/ModalContext';

const useModalContext = () => {
    return useContext(ModalContext)

};

export default useModalContext;