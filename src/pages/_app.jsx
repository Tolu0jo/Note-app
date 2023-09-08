import { ThemeUIProvider } from "theme-ui";
import theme from "../../theme";
export default function app({Component,pageProps}){
    return (
    <ThemeUIProvider theme={theme}>
           <Component {...pageProps}/>
    </ThemeUIProvider>
 
    )
}