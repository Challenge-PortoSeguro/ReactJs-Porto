import { useMemo } from "react";
import * as C from "./styles";
import renderIcon from "../../utils/iconGallery";
import Button from "../Button";

function Card({ title, desc, img, alt, icon = "user", redirect1, redirect2, buttonLink1, buttonLink2, iconButton1 = "user", iconButton2 = "user" }) {
  const Icon = useMemo(() => renderIcon({ name: icon, color: "#fff", size: 104 }), [icon]);
  const IconButton1 = useMemo(() => renderIcon({ name: iconButton1, color: "#fff", size: 32 }), []);
  const IconButton2 = useMemo(() => renderIcon({ name: iconButton2, color: "#fff", size: 32 }), []);

  function iconOrImg() {
    if (img) {
      return <C.CardImage src={img} alt={alt} />;
    } else {
      return Icon;
    }
  }

  return (
    <C.CardContainer>
      <C.CardHeader>
        {iconOrImg()}
      </C.CardHeader>
      <C.CardBody>
        <C.CardTitle>{title}</C.CardTitle>
        <C.CardSubtitle>{desc}</C.CardSubtitle>
        <C.CardFooter>
          {buttonLink1 || redirect1 ? <Button variant="link" redirect={redirect1} link={buttonLink1}>{IconButton1}</Button> : null}
          {buttonLink2 || redirect2 ? <Button variant="link" redirect={redirect1} link={buttonLink2}>{IconButton2}</Button> : null}
        </C.CardFooter>
      </C.CardBody>
    </C.CardContainer>
  );
}

export default Card;
