import { ThemeUIProvider } from "theme-ui";
import theme from "../../theme";
import Nav from "../components/nav";
export default function app({Component,pageProps}){
    return (
    <ThemeUIProvider theme={theme}>
        <Nav/>
        <Component {...pageProps}/>
    </ThemeUIProvider>
 
    )
}