import { SQSHandler, SQSEvent } from 'aws-lambda';

export const handler: SQSHandler = async (event: SQSEvent): Promise<void> => {
  event.Records.forEach(message => {
    const data = JSON.parse(message.body);
    console.log(data.address)
    console.log(data.username)
    console.log(data.orderId)
    console.log(data.itemId)
  })
};
