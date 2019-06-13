/**
 * @author Duncan Pierce <telmage4448@gmail.com>
 * @param success boolean
 * @param message any
 * @param code int
 * @returns undefined object
 */
export function createResponse(success: boolean, message: any, code: number) {
  code = Math.round(code);
  return {
    code,
    error: success,
    message
  };
}
