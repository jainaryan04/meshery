import React, { useState, useEffect } from "react";
import {
  Grid,
  Button, Switch
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/system";
import ConsulIcon from "../../img/SVGs/consulIcon";
import IstioIcon from "../../img/SVGs/IstioIcon";
import KumaIcon from "../../img/SVGs/kumaIcon";
import LinkerdIcon from "../../img/SVGs/linkerdIcon";
import NginxIcon from "../../img/SVGs/nginxIcon";
import MesheryIcon from "../../img/meshery-logo/CustomMesheryLogo";
import CustomTypography from "../CustomTypography"
import { createTheme, ThemeProvider } from "@mui/material";
import { DockerMuiThemeProvider } from '@docker/docker-mui-theme';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledDiv, AccountDiv, ServiceMeshAdapters, ExtensionWrapper } from "./styledComponents";


const ExtensionsComponent = props => {
  const [consulChecked, isConsulChecked] = useState(true);
  const [istioChecked, isIstioChecked] = useState(false);
  const [linkerdChecked, isLinkerdChecked] = useState(false);
  const [nginxChecked, isNginxChecked] = useState(false);
  const [kumaChecked, isKumaChecked] = useState(false);


  const theme = {   
  textAlign: "center",
  backgroundColor: "#222C32",
  padding: "5rem",
  maxHeight: "100vh"};

  useEffect(() => {
    window.ddClient.extension.vm.service.get("/ping").then(console.log);
  }, [])

  // Wrote separate functions since we need these functions to provision the adapters as well
  const handleConsul = () => {
    isConsulChecked(prev => !prev);
  }
  const handleIstio = () => {
    isIstioChecked(prev => !prev);
  }
  const handleLinkerd = () => {
    isLinkerdChecked(prev => !prev);
  }
  const handleNginx = () => {
    isNginxChecked(prev => !prev);
  }
  const handleKuma = () => {
    isKumaChecked(prev => !prev);
  }


  return (
    <DockerMuiThemeProvider theme={theme}>
      <CssBaseline />
      <MesheryIcon />
      <CustomTypography sx={{maxWidth: "60%", margin: "auto", padding: "1rem"}}>Design and operate your cloud native deployments with the extensible management plane, Meshery.</CustomTypography>
    <ExtensionWrapper>
        <CustomTypography variant="h6" sx={{ color: "#AAAAAA", padding: "0.7rem"}}>
                        CONFIGURE YOUR MESHERY DEPLOYMENT
        </CustomTypography>
        <div style={{padding: "2rem"}}>
          <AccountDiv>
            <CustomTypography style="margin-bottom:2rem">Account</CustomTypography>
            <div><a style={{ textDecoration: "none"}} href="http://localhost:9081"><Button sx={{ backgroundColor: "#7794AB", color: "#FFFFFF",}} variant="contained">
              Open Meshery
            </Button></a></div>
          </AccountDiv>
          <Grid justify="center">
           <ServiceMeshAdapters>
              <CustomTypography style="margin-bottom:2rem">Deploy a Service Mesh</CustomTypography>
              <StyledDiv>
                <div className={consulChecked ? null : classes.inactiveAdapter}>

                  <ConsulIcon width={40} height={40} /> </div>
                <Switch onChange={handleConsul} color="primary" defaultChecked></Switch>
              </StyledDiv>
              <StyledDiv>
                <div className={istioChecked ? null : classes.inactiveAdapter}>
                  <IstioIcon width={40} height={40} /></div>
                <Switch onChange={handleIstio} color="primary"></Switch> </StyledDiv>

                <StyledDiv>
                <div className={linkerdChecked ? null : classes.inactiveAdapter}><LinkerdIcon width={40} height={40} /></div>
                <Switch onChange={handleLinkerd} color="primary"></Switch> </StyledDiv>
                <StyledDiv>
                <div className={nginxChecked ? null : classes.inactiveAdapter}><NginxIcon width={38} height={40} /></div><Switch onChange={handleNginx} color="primary"></Switch> </StyledDiv>
                <StyledDiv>
                <div className={kumaChecked ? null : classes.inactiveAdapter}><KumaIcon width={40} height={40} /></div><Switch onChange={handleKuma} color="primary"></Switch> </StyledDiv>
            </ServiceMeshAdapters>
          </Grid>
        </div>
      </ExtensionWrapper>
    </DockerMuiThemeProvider>
  );
}

export default ExtensionsComponent;
