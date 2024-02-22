import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { BaseController } from "../BaseController"
import { SignInInterface } from "@application/interfaces/use-cases/authentication/SignInInterface";
import { ok } from "@infra/http/helpers/https";

export class SignInController extends BaseController {

    constructor(
        // private readonly signInValidation: Validation,
        private readonly signIn: SignInInterface,

    ) {
        super();
    }

    async execute(httpRequest: SignInController.Request): Promise<SignInController.Response> {
        const { email, password } = httpRequest.body!;

        const authenticationTokenOrError = await this.signIn.execute({ email, password });

        if (authenticationTokenOrError instanceof Error) {
            throw authenticationTokenOrError;
        }
        return ok({
            authenticationToken: authenticationTokenOrError
        });
    }

}

export namespace SignInController {
    export type Request = HttpRequest<SignInInterface.Request>;
    export type Response = HttpResponse<SignInInterface.Response>;
}