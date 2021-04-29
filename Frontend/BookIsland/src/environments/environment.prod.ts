export const environment = {
  production: true,
  API_URL: 'http://ec2-3-14-251-236.us-east-2.compute.amazonaws.com:8080',
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
