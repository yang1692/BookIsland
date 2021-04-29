// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'http://localhost:8080',
  BOOK_TYPES: [
    {
      name: 'History',
      icon: 'history_edu'
    },
    {
      name: 'Literature & Fiction',
      icon: 'create'
    },
    {
      name: 'Arts & Photography',
      icon: 'palette'
    },
    {
      name: 'Biographies & Memoirs',
      icon: 'storage'
    },
    {
      name: 'Business & Money',
      icon: 'savings'
    },
    {
      name: 'Cookbooks, Food & Wine',
      icon: 'restaurant'
    },
    {
      name: 'Mystery, Thriller & Suspense',
      icon: 'fingerprint'
    },
    {
      name: 'Romance',
      icon: 'favorite'
    },
    {
      name: 'Science Fiction & Fantasy',
      icon: 'psychology'
    },
    {
      name: 'Teen & Young Adult',
      icon: 'face'
    },
    {
      name: 'Children\'s Books',
      icon: 'child_care'
    }
  ],
  LANG: [
    'English',
    'Chinese',
    'French',
    'Japanese',
    'Spanish',
    'Korean',
    'Italian',
    'Germany'
  ],
  ORDER_STATUS: [
    {
      status: 'On Delivery',
      class: 'on-delivery-text'
    },
    {
      status: 'Cancelled',
      class: 'cancelled-text'
    },
    {
      status: 'Delivered',
      class: 'delivered-text'
    }
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
