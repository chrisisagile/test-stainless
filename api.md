# Applications

Types:

- <code><a href="./src/resources/applications.ts">ApplicationCreateResponse</a></code>
- <code><a href="./src/resources/applications.ts">ApplicationRetrieveResponse</a></code>
- <code><a href="./src/resources/applications.ts">ApplicationUpdateResponse</a></code>
- <code><a href="./src/resources/applications.ts">ApplicationListResponse</a></code>

Methods:

- <code title="post /applications">client.applications.<a href="./src/resources/applications.ts">create</a>({ ...params }) -> unknown</code>
- <code title="get /applications/{id}">client.applications.<a href="./src/resources/applications.ts">retrieve</a>(id) -> unknown</code>
- <code title="patch /applications/{id}">client.applications.<a href="./src/resources/applications.ts">update</a>(id, { ...params }) -> unknown</code>
- <code title="get /applications">client.applications.<a href="./src/resources/applications.ts">list</a>({ ...params }) -> ApplicationListResponse</code>

# Companies

Types:

- <code><a href="./src/resources/companies.ts">CompanyListResponse</a></code>

Methods:

- <code title="get /companies">client.companies.<a href="./src/resources/companies.ts">list</a>() -> CompanyListResponse</code>
