var config = {
  // FHIR server base url
  baseUrl: 'http://myfhirserver.com',
  auth: {
     bearer: 'token',
     // OR for basic auth
     user: 'user',
     pass: 'secret'
  },
  // Valid Options are 'same-origin', 'include'
  credentials: 'same-origin',
  headers: {
    'X-Custom-Header': 'Custom Value',
    'X-Another-Custom': 'Another Value',
  }
}

myClient = fhir(config, adapter)