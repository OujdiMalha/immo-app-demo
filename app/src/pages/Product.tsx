import { Immo } from "../components/Immo";
import { Form } from "../components/Form";
import { Newsletter } from "../components/Newsletter";

function Product() {
  console.log("Rendering Product component");  // Pour vérifier si le composant est bien rendu

  return (
    <>
      <Immo />
      <Form />
      <Newsletter />
    </>
  );
}

export default Product;