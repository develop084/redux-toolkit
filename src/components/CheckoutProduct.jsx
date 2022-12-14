import React from "react";
import {
  Card,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

function CheckoutProduct({ itemId, title, image, price }) {
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(remove(id));
  };
  return (
    <div>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={image}
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">{title}</Heading>
          </CardBody>

          <CardFooter>
            <Button
              onClick={() => removeItem(itemId)}
              variant="solid"
              colorScheme="blue"
            >
              Remove
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
}

export default CheckoutProduct;
