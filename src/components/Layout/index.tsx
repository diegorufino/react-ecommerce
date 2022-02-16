import React from "react";

import { Grid } from "./styles";
import Header from "../Header";
import Content from "../Content";

const Layout: React.FC = ({ children }) => {
    return (
        <Grid>
            <Header />
            <Content>
                { children }
            </Content>
        </Grid>
    )
}

export default Layout;