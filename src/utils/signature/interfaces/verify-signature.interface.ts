export interface IVerifySignature {
  signedMessage: string;
  signature: string | Uint8Array;
  address: string;
}
