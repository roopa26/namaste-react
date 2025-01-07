import { createContext } from "react";

const isMobileDevice = createContext({isMobile: window.innerWidth <= 768})

export default isMobileDevice;