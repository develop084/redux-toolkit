import React from "react";
import { Card,ButtonGroup,Text,Stack,Divider,Button, CardBody, CardFooter, Image, Heading } from '@chakra-ui/react'
import { add } from "../store/cartSlice";
import {useDispatch} from 'react-redux'

function Product({image, title,price, item}) {
  const dispatch = useDispatch();

const handleAdd = (product) => {
  dispatch(add(product));
}



  return (
    <div>
      <Card maxW="sm">
        <CardBody>
          <Image
            boxSize='50%'
            objectFit='fill'
            src={image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            
            <Text color="blue.600" fontSize="2xl">
               $ {price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button onClick={()=> handleAdd(item)} variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Product;
