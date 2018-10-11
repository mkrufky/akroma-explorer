export interface ApiResult<T> {
    message: string;
    ok: boolean;
    data: T;
}
