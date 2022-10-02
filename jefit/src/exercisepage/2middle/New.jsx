import {
  Box,
  Grid,
  GridItem,
  Image,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import React from "react";
import data from "./data";

const New = () => {
  return (
    <Box>
      <br />
      <br />
      <Heading variant={"solid"}>TRY SOMETHING NEW</Heading>
      <br />
      <Text variant={"solid"}>
        Change up your routine with one of these exercises!
      </Text>
      <br />
      <br />
      <Grid templateColumns="repeat(6, 1fr)" gap={8} w="80%" m="auto">
        {data.map((e) => (
          <GridItem textAlign="center" key={e.link}>
            <Image w={100} src={e.img} alt="" />
            <Link
              fontFamily="DM Sans- 400"
              fontSize="13px"
              fontWeight="400"
              textAlign={"center"}
              color={"#3cb8ff"}
            >
              {e.link}
            </Link>
            <Text 
             fontFamily="DM Sans- 400"
             fontSize="13px"
             fontWeight="400"
            color={"gray"}
            >{e.types}</Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default New;
