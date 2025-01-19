import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";
import { ReactNode } from "react";


const Layout = ({children}: {children: ReactNode}) => {
    return(
        <>
            <NavBar/>
            {children}
            <Footer />
        </>
    )
}

export default Layout;