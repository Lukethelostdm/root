import { NavBar } from "@/components/navbar";
import { ReactNode } from "react";


const Layout = ({Children}: {Children: ReactNode}) => {
    return(
        <>
            <NavBar/>
            {Children}
        </>
    )
}

export default Layout;