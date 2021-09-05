import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    products: 'https://cpikwrm5gl.execute-api.eu-west-1.amazonaws.com',
    order: 'https://cpikwrm5gl.execute-api.eu-west-1.amazonaws.com',
    import: 'https://cpikwrm5gl.execute-api.eu-west-1.amazonaws.com',
    bff: 'https://cpikwrm5gl.execute-api.eu-west-1.amazonaws.com',
    cart: 'https://cpikwrm5gl.execute-api.eu-west-1.amazonaws.com',
  },
  apiEndpointsEnabled: {
    products: false,
    order: false,
    import: false,
    bff: false,
    cart: false,
  },
};
