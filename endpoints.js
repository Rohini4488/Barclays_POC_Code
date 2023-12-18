/**
 * Please refer to "Prerequisites" in the README
 *
 * Reference:
 *    - Create an Amazon Connect Instance: https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-instances.html
 *    - Enable chat experience for an existing Connect instance: https://github.com/amazon-connect/amazon-connect-chat-ui-examples/tree/master#enabling-chat-in-an-existing-amazon-connect-contact-center
 *    - Create an Amazon Connect Contact Flow: https://docs.aws.amazon.com/connect/latest/adminguide/chat.html
 *    - Find the `instanceId`: https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html
 *    - Find the `contactFlowId` for the: https://docs.aws.amazon.com/connect/latest/adminguide/find-contact-flow-id.html
 *    - For `apiGWId`, deploy a custom Amazon Connect Chat backend: https://github.com/amazon-connect/amazon-connect-chat-ui-examples/tree/master/cloudformationTemplates/startChatContactAPI
 *
 */




export const GATEWAY = {
  region: 'eu-west-2',
  apiGWId: '<id>',
};

const ENDPOINTS = {
  contactFlowId: 'XXXX-XXXX-XXXX-XXXX',
  instanceId: 'XXXX-XXXXX-XXXXX-XXXXX',
  region: GATEWAY.region,
  apiGatewayEndpoint: `<END POINT URL>`,
  ccpUrl: '<CCP URL>', // optional - for reference
};

export default ENDPOINTS;
