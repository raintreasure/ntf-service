import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SignerProvider } from "../state/signer";
import Layout from "../components/Layout";
import "../styles/globals.css";


const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <SignerProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
        </SignerProvider>
    );
};

export default MyApp;
