import { createContext, useState } from "react";

export const ModalContext = createContext({})
export const ModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}> {children} </ModalContext.Provider>
}