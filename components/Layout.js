import Head from "next/head";
import { AppProvider } from "../context/AddContext";
import Header from "./Header";

const Layout = (props) => {
    return (
        <AppProvider>
            <div>
                <Head>
                    <title>Woocommerce React Theme</title>
                    <link rel="stylesheet" href="https://bootswatch.com/5/flatly/bootstrap.min.css" />
                </Head>
                <Header />

                {props.children}
            </div>
        </AppProvider>

    );
}

export default Layout;