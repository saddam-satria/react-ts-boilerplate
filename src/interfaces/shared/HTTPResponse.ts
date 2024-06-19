import { APIResponse } from "../apis/Response";


interface HTTPResponse{status: number, data: APIResponse<null>}

export default HTTPResponse