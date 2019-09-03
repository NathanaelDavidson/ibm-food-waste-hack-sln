// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const AUTH_BASE_URL = 'http://localhost:8000/auth/';
const SHIPMENTS_BASE_URL = 'http://localhost:8000/shipments/';
const CONTRACTS_BASE_URL = 'http://localhost:8000/shipments/contract/';

export const environment = {
  production: false,
  urls: {
    login: AUTH_BASE_URL + 'login/',
    logout: AUTH_BASE_URL + 'logout/',
    signup: AUTH_BASE_URL + 'signup/',
    currentUser: AUTH_BASE_URL + 'me/',
    allShipments: SHIPMENTS_BASE_URL + 'all/',
    buyerOffers: CONTRACTS_BASE_URL + 'offers/',
    sellerOffers: CONTRACTS_BASE_URL + 'offers/',
    makeOffer: CONTRACTS_BASE_URL + 'create/',
    acceptOffer: CONTRACTS_BASE_URL + 'accept/',
    cancelOffer: CONTRACTS_BASE_URL + 'cancel/',
    declineOffer: CONTRACTS_BASE_URL + 'decline/',
    contractDetail: CONTRACTS_BASE_URL,
    shipmentDetail: SHIPMENTS_BASE_URL + '',
    shipmentList: SHIPMENTS_BASE_URL + 'all/',
    shipmentListBySeller: SHIPMENTS_BASE_URL + 'seller/',
    shipmentCreate: SHIPMENTS_BASE_URL + 'create/'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
