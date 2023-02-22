import { SmallPokemon } from "@/interfaces";
import {Grid, Card, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
  pokemon: SmallPokemon
}

export const ListPokemon: FC<Props> = ({ pokemon: {id, name, img} }) =>{

  const router = useRouter()

  const onClick = ()=>{
    router.push(`/pokemon/${id}`)
  }
  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card isPressable onClick={onClick}>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={img}
                width="100%"
                height={140}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text transform="capitalize">{name}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                 #{id}
                </Text>
              </Row>
            </Card.Footer>
          </Card>
  </Grid>
  )
}