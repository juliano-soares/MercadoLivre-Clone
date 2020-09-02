import React from 'react';

import tshirtImage from '../../assets/tshirt.png';

import { Container } from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>
      <Panel>
        <Colunm>
          <Gallery>
            <img src={tshirtImage} alt="T-shirt" />
          </Gallery>
          <Info />
        </Colunm>

        <Colunm>
          {/* <ProductyAction />
          <SallerInfo /> */}
          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Colunm>
      </Panel>
    </Container>
  );
};

const Info = () => {
  <Description>
    <h2>Descrição</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem tempora
      praesentium ipsam atque optio, obcaecati sit sed libero natus quasi
      perferendis dolorum facere dolore dicta ea modi vitae eius itaque.
      <br />
      <br />
      Itens inclusos
      - 1x etc. <br />
      - 1x etc. <br />
      - 1x etc. <br />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
      velit est? Maiores earum distinctio omnis nulla consequatur eveniet,
      officiis ab iure cupiditate nemo atque. Repellat modi adipisci nesciunt
      nisi iste?
    </p>
  </Description>
}

export default Product;
