import { GoogleStrategy } from './Google_Auth.ts';

export interface GoogleClientConfig {
  /** The client ID provided by the authorization server. */
  clientId:string;
  /** The client secret provided by the authorization server, if using a confidential client. Best practice to always keep secret in env file. */
  clientSecret:string;
  /** The URI of the client's redirection endpoint (sometimes also called callback URI). */
  redirect:string;
  /** The URI of the authorization server's token endpoint. */
  tokenUri:string;
  /**  */
  scope: any;
}


export class GoogleClient {
  // implements all the methods required to complete OAuth process
  public code = new GoogleStrategy(this);

  // interface values cannot be changed outside of class
  constructor(
    public readonly config: Readonly<GoogleClientConfig>,
  ) {}
}