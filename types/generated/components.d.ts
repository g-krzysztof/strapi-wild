import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedLogo extends Schema.Component {
  collectionName: 'components_shared_logos';
  info: {
    displayName: 'Logo';
    icon: 'seed';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    link: Attribute.String;
    slug: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.logo': SharedLogo;
    }
  }
}
