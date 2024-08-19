import { Container, Stack, Typography } from "@mui/material";
import Image from "../assets/apple-iphone-x-pictures-5.png";

function Home() {
  return (
    <>
      <Container fixed>
        <Stack>
          <Typography variant="h2" textAlign={"center"} gutterBottom>
            Payments
          </Typography>
          <Typography textAlign={"center"}>ALL OF YOUR PAYMENTS</Typography>
          <Typography textAlign={"center"}>IN ONE APP</Typography>
          <img src={Image} alt="iphone" />
        </Stack>
      </Container>
    </>
  );
}

export default Home;
