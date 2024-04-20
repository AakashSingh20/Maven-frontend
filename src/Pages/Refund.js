import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const Refund = () => {
  return (
    <div className="container p-8 mx-auto">
      <Title level={2}>Refund and Cancellation Policy</Title>
      <Paragraph>
        We want you to be satisfied with your subscription to our streaming
        service. If you have any issues or concerns, please contact our customer
        support team.
      </Paragraph>
      <Title level={3}>Refund Policy</Title>
      <Paragraph>
        We offer refunds within 30 days of subscription for any unused portion
        of the subscription period. To request a refund, please contact our
        customer support team with your account details and reason for the
        refund.
      </Paragraph>
      <Title level={3}>Cancellation Policy</Title>
      <Paragraph>
        You can cancel your subscription at any time. Your subscription will
        remain active until the end of the current billing cycle, and you will
        not be charged for the next cycle. To cancel your subscription, please
        visit the "Account Settings" section of our website.
      </Paragraph>
    </div>
  );
};

export default Refund;
