import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const Policy = () => {
  return (
    <div className="container p-8 mx-auto h-[80vh]">
      <Title level={2}>Privacy Policy</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id libero
        eget tortor finibus elementum. Nam volutpat pharetra magna eu cursus.
        Proin ut nunc non leo aliquet vestibulum ut vel velit. Integer sit amet
        pharetra nisi. Sed bibendum metus sit amet nibh faucibus, vel dictum
        elit sollicitudin. Vivamus mattis est et justo suscipit, id tincidunt
        nisl convallis. Donec vel volutpat arcu. Cras tempus ipsum non ante
        rutrum tristique. Nulla eu imperdiet metus. Nulla facilisi.
      </Paragraph>
      <Title level={3}>Data Collection</Title>
      <Paragraph>
        Sed quis nunc arcu. Donec consequat eros nec bibendum accumsan. Nulla
        facilisi. Ut fringilla dolor nunc, ut consectetur orci sodales id.
        Curabitur eget turpis purus. Vestibulum maximus, metus in efficitur
        aliquet, nulla risus tristique ligula, sit amet sodales nulla nisi nec
        felis.
      </Paragraph>
    </div>
  );
};

export default Policy;
