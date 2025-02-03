import { CLOTHES } from "@/testData"
import { Grid } from "@chakra-ui/react"
import ClothesCard from "./ClothesCard"

const UserGrid = () => {
  
  return (
    <Grid templateColumns={{
      base:"1fr",
      md:"repeat(2, 1fr)",
      lg:"repeat(3, 1fr)"
    }}
    gap={4}
    >

      {CLOTHES.map((clothes) => 
        <ClothesCard key={clothes.id} clothes={clothes} />
      )}

    </Grid>
  )
}

export default UserGrid