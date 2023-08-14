import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { Math } from "math";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    const a = 3;
    const b = 2;

    const res = Math.add(a,b);

    context.res = { body: `George ${res}` };

};

export default httpTrigger;