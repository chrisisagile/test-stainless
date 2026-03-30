// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Companies extends APIResource {
  /**
   * Returns the full company directory. Route migrated from /api/companies to
   * /v1/companies.
   */
  list(options?: RequestOptions): APIPromise<CompanyListResponse> {
    return this._client.get('/companies', options);
  }
}

export type CompanyListResponse = Array<CompanyListResponse.CompanyListResponseItem>;

export namespace CompanyListResponse {
  /**
   * A company in the directory.
   */
  export interface CompanyListResponseItem {
    id?: string;

    name?: string;
  }
}

export declare namespace Companies {
  export { type CompanyListResponse as CompanyListResponse };
}
