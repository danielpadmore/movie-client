// Realistically we'd want to define an isomorphic fetch client that can be used by node and the browser so this client can be consumed anywhere
declare type FetchClient = (
  input: RequestInfo,
  init?: RequestInit
) => Promise<Response>;
