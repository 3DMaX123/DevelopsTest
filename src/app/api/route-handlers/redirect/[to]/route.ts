import {IRedirectHandler} from "@t/route-handlers/route";
import {redirect} from "next/navigation";

/**
 * Handle redirect request
 * @param {_request} _request is a basic parameter
 * @param {context} context helps get value from url
 */
export async function GET(_request: Request, context: {params: IRedirectHandler}) {
  redirect(`/${context.params.to}`);
}
