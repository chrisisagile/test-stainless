// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CredexUnity from 'credex-unity';

const client = new CredexUnity({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource applications', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.applications.create({
    ApplicationBody: {
    individuals: [{
    individualId: 'person-1',
    role: 'borrower',
    governmentIdentifier: '123-45-6789',
    name: { firstName: 'Jane', lastName: 'Doe' },
    dateOfBirth: '1985-06-15',
  }],
    requestedAmount: {
    amount: 250000,
    currency: 'USD',
    conversionRate: 1,
    amountInUsd: 250000,
  },
  },
    'X-Office-Id': 'X-Office-Id',
    'X-Organization-Id': 'X-Organization-Id',
  });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.applications.create({
    ApplicationBody: {
    individuals: [{
    individualId: 'person-1',
    role: 'borrower',
    governmentIdentifier: '123-45-6789',
    name: { firstName: 'Jane', lastName: 'Doe' },
    dateOfBirth: '1985-06-15',
  }],
    requestedAmount: {
    amount: 250000,
    currency: 'USD',
    conversionRate: 1,
    amountInUsd: 250000,
  },
  },
    'X-Office-Id': 'X-Office-Id',
    'X-Organization-Id': 'X-Organization-Id',
  });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.applications.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.applications.update('id', {
    ApplicationBody: {},
    'X-Office-Id': 'X-Office-Id',
    'X-Organization-Id': 'X-Organization-Id',
  });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.applications.update('id', {
    ApplicationBody: {},
    'X-Office-Id': 'X-Office-Id',
    'X-Organization-Id': 'X-Organization-Id',
  });
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.applications.list({ 'X-Office-Id': 'X-Office-Id', 'X-Organization-Id': 'X-Organization-Id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.applications.list({
    'X-Office-Id': 'X-Office-Id',
    'X-Organization-Id': 'X-Organization-Id',
    page: 1,
    pageSize: 1,
    search: 'search',
    sortBy: 'sortBy',
    sortOrder: 'asc',
    status: 'status',
  });
  });
});
