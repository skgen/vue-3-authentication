import isString from 'lodash/isString';
import isNumber from 'lodash/isNumber';

export type Authentication = {
  idToken: string;
  accessToken: string;
  expires: number;
  refreshToken: string;
  type: string;
};

export const authenticationSchema = {
  parse: (data: any): Authentication => {
    const {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      access_token, expires_in, id_token, refresh_token, token_type,
    } = data;

    if (!isString(access_token)) {
      throw new Error('access_token is not of type string');
    }
    if (!isNumber(expires_in)) {
      throw new Error('expires_in is not of type string');
    }
    if (!isString(id_token)) {
      throw new Error('id_token is not of type string');
    }
    if (!isString(refresh_token)) {
      throw new Error('refresh_token is not of type string');
    }
    if (!isString(token_type)) {
      throw new Error('token_type is not of type string');
    }

    return {
      idToken: id_token,
      accessToken: access_token,
      expires: expires_in,
      refreshToken: refresh_token,
      type: token_type,
    };
  },
};
