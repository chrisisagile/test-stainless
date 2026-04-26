// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Applications extends APIResource {
  /**
   * Accepts the application body and returns an Application with server-generated
   * ID, timestamps, and status. Organization and office context are provided via
   * headers.
   *
   * @example
   * ```ts
   * const application = await client.applications.create({
   *   ApplicationBody: {
   *     individuals: [
   *       {
   *         individualId: 'person-1',
   *         role: 'borrower',
   *         governmentIdentifier: '123-45-6789',
   *         name: { firstName: 'Jane', lastName: 'Doe' },
   *         dateOfBirth: '1985-06-15',
   *       },
   *     ],
   *     requestedAmount: {
   *       amount: 250000,
   *       currency: 'USD',
   *       conversionRate: 1,
   *       amountInUsd: 250000,
   *     },
   *   },
   *   'X-Office-Id': 'X-Office-Id',
   *   'X-Organization-Id': 'X-Organization-Id',
   * });
   * ```
   */
  create(params: ApplicationCreateParams, options?: RequestOptions): APIPromise<unknown> {
    const { 'X-Office-Id': xOfficeID, 'X-Organization-Id': xOrganizationID, ...body } = params
    return this._client.post('/applications', { body, ...options, headers: buildHeaders([{'X-Office-Id': xOfficeID, 'X-Organization-Id': xOrganizationID}, options?.headers]) });
  }

  /**
   * Returns the full Application document including typed header and
   * business-content body.
   *
   * @example
   * ```ts
   * const application = await client.applications.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/applications/${id}`, options);
  }

  /**
   * Accepts an updated application body and returns the updated state. Organization
   * and office context are provided via headers.
   *
   * @example
   * ```ts
   * const application = await client.applications.update('id', {
   *   ApplicationBody: {},
   *   'X-Office-Id': 'X-Office-Id',
   *   'X-Organization-Id': 'X-Organization-Id',
   * });
   * ```
   */
  update(id: string, params: ApplicationUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    const { 'X-Office-Id': xOfficeID, 'X-Organization-Id': xOrganizationID, ...body } = params
    return this._client.patch(path`/applications/${id}`, { body, ...options, headers: buildHeaders([{'X-Office-Id': xOfficeID, 'X-Organization-Id': xOrganizationID}, options?.headers]) });
  }

  /**
   * Returns a paginated list of ApplicationHeader records filtered by organization
   * and office.
   *
   * @example
   * ```ts
   * const applications = await client.applications.list({
   *   'X-Office-Id': 'X-Office-Id',
   *   'X-Organization-Id': 'X-Organization-Id',
   * });
   * ```
   */
  list(params: ApplicationListParams, options?: RequestOptions): APIPromise<ApplicationListResponse> {
    const { 'X-Office-Id': xOfficeID, 'X-Organization-Id': xOrganizationID, ...query } = params
    return this._client.get('/applications', { query, ...options, headers: buildHeaders([{'X-Office-Id': xOfficeID, 'X-Organization-Id': xOrganizationID}, options?.headers]) });
  }
}

export type ApplicationCreateResponse = unknown

export type ApplicationRetrieveResponse = unknown

export type ApplicationUpdateResponse = unknown

/**
 * Paginated result containing ApplicationHeader records.
 */
export interface ApplicationListResponse {
  items: Array<unknown>;

  /**
   * Current page number.
   */
  page: number;

  /**
   * Number of items per page.
   */
  pageSize: number;

  /**
   * Total number of matching records.
   */
  totalCount: number;

  /**
   * Total number of pages.
   */
  totalPages: number;
}

export interface ApplicationCreateParams {
  /**
   * Body param
   */
  ApplicationBody: unknown;

  /**
   * Header param: Office scope
   */
  'X-Office-Id': string;

  /**
   * Header param: Organization scope
   */
  'X-Organization-Id': string;
}

export interface ApplicationUpdateParams {
  /**
   * Body param
   */
  ApplicationBody: unknown;

  /**
   * Header param: Office scope
   */
  'X-Office-Id': string;

  /**
   * Header param: Organization scope
   */
  'X-Organization-Id': string;
}

export interface ApplicationListParams {
  /**
   * Header param: Office scope
   */
  'X-Office-Id': string;

  /**
   * Header param: Organization scope
   */
  'X-Organization-Id': string;

  /**
   * Query param: Page number (>= 1)
   */
  page?: number;

  /**
   * Query param: Items per page (1-100)
   */
  pageSize?: number;

  /**
   * Query param: Search term
   */
  search?: string;

  /**
   * Query param: Sort field
   */
  sortBy?: string;

  /**
   * Query param: Sort direction
   */
  sortOrder?: 'asc' | 'desc';

  /**
   * Query param: Filter by status
   */
  status?: string;
}

export declare namespace Applications {
  export {
    type ApplicationCreateResponse as ApplicationCreateResponse,
    type ApplicationRetrieveResponse as ApplicationRetrieveResponse,
    type ApplicationUpdateResponse as ApplicationUpdateResponse,
    type ApplicationListResponse as ApplicationListResponse,
    type ApplicationCreateParams as ApplicationCreateParams,
    type ApplicationUpdateParams as ApplicationUpdateParams,
    type ApplicationListParams as ApplicationListParams
  };
}
