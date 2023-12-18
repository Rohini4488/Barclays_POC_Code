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
  apiGWId: 'gyjhhge696',
};

const ENDPOINTS = {
  contactFlowId: '5d6bb1c4-7e83-455e-a1c5-831d08213210',
  instanceId: 'bbde73d5-4319-43ba-887d-6c75a87b41d6',
  region: GATEWAY.region,
  apiGatewayEndpoint: `https://gyjhhge696.execute-api.eu-west-2.amazonaws.com/Prod`,
  ccpUrl: 'https://ccaas-voice-demo.my.connect.aws/ccp-v2', // optional - for reference
};

export default ENDPOINTS;
