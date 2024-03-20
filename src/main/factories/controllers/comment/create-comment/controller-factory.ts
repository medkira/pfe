import { BaseController } from "@infra/http/controllers/BaseController";
import { CreateCommentController } from "@infra/http/controllers/comment/CreateCommentController";
import { makeCreateComments } from "@main/factories/use-case/comment/create-comment-factory";
import { makeGetPostById } from "@main/factories/use-case/post/get-post-by-id-factory";
import { makeUpdatePostTotalComments } from "@main/factories/use-case/post/update-post-total-comment-factory";
import { makeCreateCommentValidation } from "./validation";




export const makeCreateCommentController = (): BaseController => {
    const validation = makeCreateCommentValidation();
    const getPostByIdUseCase = makeGetPostById();
    const createCommentUseCase = makeCreateComments();
    const updatePostTotalCommentsUsecase = makeUpdatePostTotalComments();


    return new CreateCommentController(
        validation,
        getPostByIdUseCase,
        createCommentUseCase,
        updatePostTotalCommentsUsecase,
    );
}