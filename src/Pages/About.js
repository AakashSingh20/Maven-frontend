import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div className="container p-8 mx-auto">
      <Title level={2}>About Us</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id libero
        eget tortor finibus elementum. Nam volutpat pharetra magna eu cursus.
        Proin ut nunc non leo aliquet vestibulum ut vel velit. Integer sit amet
        pharetra nisi. Sed bibendum metus sit amet nibh faucibus, vel dictum
        elit sollicitudin. Vivamus mattis est et justo suscipit, id tincidunt
        nisl convallis. Donec vel volutpat arcu. Cras tempus ipsum non ante
        rutrum tristique. Nulla eu imperdiet metus. Nulla facilisi.
      </Paragraph>
      <Paragraph>
        In hac habitasse platea dictumst. Proin nec dolor eu est dignissim
        accumsan. Aenean interdum posuere libero, nec ultricies arcu condimentum
        et. Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Phasellus id pulvinar est. Sed eu dolor sit
        amet risus pellentesque faucibus vitae sit amet ligula. Nulla facilisi.
        Nulla facilisi. Proin id est ut lectus tempor dignissim ut ut ligula.
        Aenean pharetra vehicula purus, a volutpat nunc fermentum nec. Quisque
        vel congue arcu, ac fermentum dolor. Morbi non arcu nec nisi vestibulum
        ultrices vitae non nunc. Vivamus malesuada ac nisl id ullamcorper.
        Mauris id purus et odio scelerisque tempor.
      </Paragraph>
    </div>
  );
};

export default About;
