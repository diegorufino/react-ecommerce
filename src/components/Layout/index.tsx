import React from "react";

import { Grid } from "./styles";
import Header from "../Header";
import Content from "../Content";

const Layout: React.FC = () => {
    return (
        <Grid>
            <Header />
            <Content />
        </Grid>
    )
}

export default Layout;