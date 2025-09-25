import { isNumber, IsNotEmpty } from "class-validator";

export class CreatePostDto {
    @isNumber()
    @IsNotEmpty()
    postId: number
}
