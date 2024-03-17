"use strict";
// get jwks 
Object.defineProperty(exports, "__esModule", { value: true });
exports.PUBLIC_KEY = exports.PRIVATE_KEY = exports.JWKS = void 0;
// TODO -- figure out where these are stored and retrieve them
const JWKS = {
    keys: [
        {
            kty: "RSA",
            e: "AQAB",
            use: "sig",
            kid: "1",
            alg: "RS256",
            n: "i2c14MlAJTe25aqFt4voMRDIbTLMTslH7U36cpq3lJPDwRhe-hgXLayhrx_j0lbnieM4B9BeKO8gG6_z4YHBxo9TNvoM2qC1kXvYlpsgZU3e94kOVQ_qyKggclr3mEQHLhxpsXMBY3BThlpNDJv2PCZTx8s6DjJn5-2KQHtaBcj6NpsBh7NQEEdE1dYkhG7Jo0yRhik5GPeU6kvahdlPFlQshepW_Zz66lSs17t0TqL0pP3lJwmdb0LTVcfi7i6e_Q91tdcwFtGr4HU9PqSsjCXHn4zn1S22z6p77L0h63yE1QphSWNjt2mfwQjtkq54L2NeeBMAVf29HfRmOsI_nw"
        }
    ]
};
exports.JWKS = JWKS;
const PRIVATE_KEY = `"-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCLZzXgyUAlN7bl
qoW3i+gxEMhtMsxOyUftTfpymreUk8PBGF76GBctrKGvH+PSVueJ4zgH0F4o7yAb
r/PhgcHGj1M2+gzaoLWRe9iWmyBlTd73iQ5VD+rIqCByWveYRAcuHGmxcwFjcFOG
Wk0Mm/Y8JlPHyzoOMmfn7YpAe1oFyPo2mwGHs1AQR0TV1iSEbsmjTJGGKTkY95Tq
S9qF2U8WVCyF6lb9nPrqVKzXu3ROovSk/eUnCZ1vQtNVx+LuLp79D3W11zAW0avg
dT0+pKyMJcefjOfVLbbPqnvsvSHrfITVCmFJY2O3aZ/BCO2SrngvY154EwBV/b0d
9GY6wj+fAgMBAAECggEARDFB5usryMj/XEvVS5tSAyZ9lQVjcir+V3RszkEnCrRZ
7wx38Yl1VS98jEliTdObQhV3pELmvMl1AHZLLAYof3Q/NcaOISi6iSd3JP1PlJ7K
MnbGHxBBPtUXwjkDo2WryX+2qEpk5HrfMPrddAybIINzOmoMxUMdFxRZK//rYqZY
A4sXNS921i7fvcjp9OA5iVNpQDOleyIo34w6wMBK8bbgdcjeU1bRrxosMGEeZ710
YlMXe7bAfeXetItMFQcxhZenFMFd8+vwVdCGDDAljYrTy7FgbvUDpQ1XH1FcENUI
CJ8XP6aO4/t8/NdVz3RXvKjfNB7VX8Qg4gp2tAcQ8QKBgQDojeRoEqOBPSUEb/cu
UK6APQnIx8UWIn65vsx7VCBIHGBEQjzjVoPiOjnu6wk1rNqZPn4LRCtQmMcEw48r
QfcdzDS8svh5UhTOZ5UUNxNBLtRH83oFTEXOsBHSr7hiTrQCP9cgakpTpGM3KWqq
ZlwQWCvqw1vxv5pUBU2jEn6xFwKBgQCZdSKyuHGzAcEQN63KW08JRfX6JtbjNchA
8dGugxu8VoL0Qs31fd5vuFajGwpU+9+oNmiFCUSGqXnIJdA7rLvQ+TQe2Bz8Ry2Z
Zk+cpIh4T6cK09K21jEaW7e02gd59JCK16ULbZa2/HrFL9jSOyY6w4ctlla6BMG+
UFaFNB2quQKBgQDm3X5Dx0UklzP5jMHh69zgmDfvaEsDJ2mRMpZDVQfbLrhu6ycR
NaEl5FIBGroA3EIDYiO1QY6Sq6jf1Nh7xDf0D/bG4hGEN3VKV1CLSgXGbxv09gRL
4CVpBCgdda7hgWp41THXD04MbSTF7UrkMUvyOeYXYKwVefZWtREW89RsLwKBgBPS
z+KqdPWc2mXP64FifjlCcl4YOlYrkmzhUCbtBN41hsErCBQYaG2iMH7tdU45I1FF
hgb5hYKnzfWO/PFYhQKfzp3VaRkl0LwqPUqM7pwsHfYGGwhHbxxqkLaqG6EjeLCW
3tk1FO0afHmQjr/JqEybCZFYBGgPST/efO7EJrjxAoGADbpfspoLCEBlFURjN9Zw
MhxbjR3hNw51vDZeoPa4gbCDFsm4iLDxNHZ9rYX183JMgL18o2Lf1orHGcG8vIS6
6PmAumWiXkbCuih5k1YCkaVqOSUXwr44iDr7UXAQF/Q4bOoSQLN+X7U8rlkCsCu0
+ZwglAbQglCWpVd75rM3FiA=
-----END PRIVATE KEY-----
"`;
exports.PRIVATE_KEY = PRIVATE_KEY;
const PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAi2c14MlAJTe25aqFt4vo
MRDIbTLMTslH7U36cpq3lJPDwRhe+hgXLayhrx/j0lbnieM4B9BeKO8gG6/z4YHB
xo9TNvoM2qC1kXvYlpsgZU3e94kOVQ/qyKggclr3mEQHLhxpsXMBY3BThlpNDJv2
PCZTx8s6DjJn5+2KQHtaBcj6NpsBh7NQEEdE1dYkhG7Jo0yRhik5GPeU6kvahdlP
FlQshepW/Zz66lSs17t0TqL0pP3lJwmdb0LTVcfi7i6e/Q91tdcwFtGr4HU9PqSs
jCXHn4zn1S22z6p77L0h63yE1QphSWNjt2mfwQjtkq54L2NeeBMAVf29HfRmOsI/
nwIDAQAB
-----END PUBLIC KEY-----`;
exports.PUBLIC_KEY = PUBLIC_KEY;