import { APIGatewayProxyHandler, APIGatewayProxyEvent } from "aws-lambda";
import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

const sns = new AWS.SNS({ region: process.env.REGION });

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent) => {
  try {
    const body = JSON.parse(event.body);

    const params = {
      Message: JSON.stringify(body),
      TopicArn: `arn:aws:sns:${process.env.REGION}:${process.env.ACCOUNT_ID}:${process.env.TOPIC_NAME}`
    };
    await sns.publish(params).promise();
  
    return {
      statusCode: 200,
      body: "OK"
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    };
  }
};
