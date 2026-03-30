// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { CredexUnity } from '../client';

export abstract class APIResource {
  protected _client: CredexUnity;

  constructor(client: CredexUnity) {
    this._client = client;
  }
}
