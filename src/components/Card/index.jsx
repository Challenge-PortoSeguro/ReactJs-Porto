import { useMemo } from "react";
import * as C from "./styles";
import renderIcon from "../../utils/iconGallery";

function Card({ title, desc, img, alt, icon = "user" }) {
  const Icon = useMemo(() => renderIcon({ name: icon || 'avatar', color: "#fff", size: 104 }), [icon]);

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
      </C.CardBody>
    </C.CardContainer>
  );
}

export default Card;
