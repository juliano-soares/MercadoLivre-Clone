import React from 'react';

import tshirtImage from '../../assets/tshirt.png';
import SallerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>
      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-shirt" />
          </Gallery>
          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SallerInfo />
          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>
    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">Receba o produto que está esperando ou devolvemos o seu dinheiro</p>
      </span>
      <span>
        <p className="title">Garantida do vendedor</p>
        <p className="description">sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia.</a>
  </Section>
)

const Info = () => (
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
)

export default Product;
