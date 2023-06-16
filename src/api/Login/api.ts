import { mainAxios } from "../shared/axios";
import { Token } from "../shared/type";

export const postTokenReIssue = (params: Token) => mainAxios.post("/api/v1/auth/reissue", { params });