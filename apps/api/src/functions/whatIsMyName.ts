import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

async function whatIsMyName(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    return { body: `George` };
};

app.http('whatIsMyName', {
    methods: ['GET', 'POST'],
    handler: whatIsMyName
});