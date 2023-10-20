import Navbar from "./components/Navbar";
import Tenure from "./components/Tenure";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import { Container, Grid } from "@mui/material";
import { useState } from "react";

function App() {
  const [data,setData] =useState({
    homeValue:3000,
    downPayment:3000 * 0.2,
    loanAmount:3000 * 0.8,
    loanTerm:5,
    interestRate:5
  })
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={5} alignItems={"center"}>
          <Grid item xs={12} md={6} >
            <SliderSelect data={data} setData={setData} />
            <Tenure data={data} setData={setData} />
          </Grid>
          <Grid item  md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
