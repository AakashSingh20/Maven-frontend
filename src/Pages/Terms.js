import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const Terms = () => {
  return (
    <div className="container p-8 mx-auto">
      <Title level={2}>Terms of Service</Title>
      <Paragraph>
        Welcome to our streaming service! By using our platform, you agree to
        comply with and be bound by the following terms and conditions of use.
        Please review the following terms carefully. If you do not agree to
        these terms, you should not use our service.
      </Paragraph>
      <Title level={3}>1. Use of Service</Title>
      <Paragraph>
        The use of our streaming service is subject to the following terms of
        use:
        <ol className="pl-4 list-decimal list-inside">
          <li>
            The content of the pages of this website is for your general
            information and use only. It is subject to change without notice.
          </li>
          <li>
            Neither we nor any third parties provide any warranty or guarantee
            as to the accuracy, timeliness, performance, completeness, or
            suitability of the information and materials found or offered on
            this website for any particular purpose.
          </li>
          {/* Add more terms as needed */}
        </ol>
      </Paragraph>
      {/* Add more sections for different terms */}
    </div>
  );
};

export default Terms;
