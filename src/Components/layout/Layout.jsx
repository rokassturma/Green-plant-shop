import Footer from "../Footer";
import Header from "../Header";
import TopBanner from "../TopBanner";
import { Outlet } from "react-router-dom";


export default function Layout() {
    return (
        <div>
            <>
                <TopBanner />
                <Header />
            </>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
