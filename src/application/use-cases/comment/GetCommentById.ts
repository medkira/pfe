import { CommentNotFoundError } from "@application/errors/CommentNotFoundError";
import { GetCommentByIdRepository } from "@application/interfaces/repositories/comment/GetCommentByIdRepository";
import { GetCommentByIdInterface } from "@application/interfaces/use-cases/comments/GetCommentByIdInterface";




export class GetCommentById implements GetCommentByIdInterface {
    constructor(
        private readonly getCommentByIdRepository: GetCommentByIdRepository
    ) { }

    async execute(commentId: GetCommentByIdInterface.Request): Promise<GetCommentByIdInterface.Response> {
        const comment = await this.getCommentByIdRepository.getCommentById(commentId);

        if (!comment) {
            return new CommentNotFoundError();
        }

        return comment;

    }

}