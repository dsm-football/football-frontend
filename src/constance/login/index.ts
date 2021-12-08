export type loginLink = {
    link : string;
}
export type postLoginType = {
    code: string;
}
export type getLoginType = {
    is_fresh: string;
    access_token: string;
    refresh_token: string;
}