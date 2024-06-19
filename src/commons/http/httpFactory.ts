import NotFoundError from "@/commons/throws/notFound";
import BadRequestError from "@/commons/throws/badRequest";
import UnauthorizedError from "@/commons/throws/unauthorized";
import ForbiddenError from "@/commons/throws/forbidden";
import InternalServerError from "@/commons/throws/internalServer";
import { BAD_GATEWAY, BAD_REQUEST, INTERNAL_SERVER, NOT_FOUND, UNAUTHORIZED, UNKNOWN_ERROR } from "@/utlis/messageProperties";
import { LANG } from "@/utlis/constant";
import BadGatewayError from "../throws/badGateway";
import UnknownError from "../throws/unknownError";

const HttpFactory = (error: number): Error => {
  switch (error) {
    case 404:
      return new NotFoundError(NOT_FOUND[LANG]);
    case 401:
      return new UnauthorizedError(UNAUTHORIZED[LANG]);
    case 403:
      return new ForbiddenError(UNAUTHORIZED[LANG]);
    case 500:
      return new InternalServerError(INTERNAL_SERVER[LANG]);
    case 502:
      return new BadGatewayError(BAD_GATEWAY[LANG]);
    case 400:
      return new BadRequestError(BAD_REQUEST[LANG]);
    default:
      return new UnknownError(UNKNOWN_ERROR[LANG])
  }
};

export default HttpFactory;
