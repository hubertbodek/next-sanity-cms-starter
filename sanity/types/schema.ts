import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Author
 *
 *
 */
export interface Author extends SanityDocument {
  _type: "author";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Alternative Text — `string`
     *
     *
     */
    alt?: string;
  };

  /**
   * Bio — `array`
   *
   *
   */
  bio?: Array<SanityKeyed<SanityBlock>>;
}

/**
 * Category
 *
 *
 */
export interface Category extends SanityDocument {
  _type: "category";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;
}

/**
 * Post
 *
 *
 */
export interface Post extends SanityDocument {
  _type: "post";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Author — `reference`
   *
   *
   */
  author?: SanityReference<Author>;

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Alternative Text — `string`
     *
     *
     */
    alt?: string;
  };

  /**
   * Categories — `array`
   *
   *
   */
  categories?: Array<SanityKeyedReference<Category>>;

  /**
   * Published at — `datetime`
   *
   *
   */
  publishedAt?: string;

  /**
   * Body — `blockContent`
   *
   *
   */
  body?: BlockContent;
}

/**
 * Teaser
 *
 *
 */
export interface TeaserBlock extends SanityDocument {
  _type: "teaser_block";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Button — `button`
   *
   *
   */
  button?: Button;
}

/**
 * Contact Page
 *
 *
 */
export interface ContactPage extends SanityDocument {
  _type: "contact_page";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };
}

/**
 * Home Page
 *
 *
 */
export interface HomePage extends SanityDocument {
  _type: "home_page";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Content — `array`
   *
   *
   */
  content?: Array<SanityKeyed<GridBlock> | SanityKeyed<TeaserBlock>>;
}

/**
 * Navigation
 *
 *
 */
export interface NavigationSetting extends SanityDocument {
  _type: "navigation_setting";

  /**
   * Logo — `imageData`
   *
   *
   */
  logo?: ImageData;

  /**
   * Header — `array`
   *
   *
   */
  header?: Array<
    SanityKeyed<{
      _type: "header_item";
      /**
       * Title — `string`
       *
       *
       */
      title?: string;

      /**
       * Link — `reference`
       *
       *
       */
      link?: SanityReference<ContactPage | Post>;

      /**
       * Dropdown — `array`
       *
       *
       */
      dropdown?: Array<
        SanityKeyed<{
          _type: "dropdown_item";
          /**
           * Title — `string`
           *
           *
           */
          title?: string;

          /**
           * Link — `reference`
           *
           *
           */
          link?: SanityReference<ContactPage | Post>;
        }>
      >;
    }>
  >;
}

/**
 * Appearance
 *
 *
 */
export interface AppearanceSetting extends SanityDocument {
  _type: "appearance_setting";

  /**
   * Logo — `imageData`
   *
   *
   */
  logo?: ImageData;
}

export type ImageData = {
  _type: "imageData";
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

  /**
   * Alternative text — `string`
   *
   * Wymagany przez SEO - opisuje obrazek dla osób niewidomych
   */
  alt?: string;

  /**
   * Quality (0-100) — `number`
   *
   * Domyślnie 75, stosować rozważnie - zmienia rozmiar zdjęcia co może wpłynąć na wydajność strony
   */
  quality?: number;

  /**
   * Contain — `boolean`
   *
   * Zdjęcie zostanie przeskalowane tak, aby całe było widoczne (użwyać w ostateczności)
   */
  contain?: boolean;
};

export type Button = {
  _type: "button";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Link — `link`
   *
   *
   */
  link?: Link;
};

export type Link = SanityReference<ContactPage | Post>;

export type GridBlock = {
  _type: "grid_block";
  /**
   * Columns — `number`
   *
   * Number of columns in the grid
   */
  columns?: number;

  /**
   * Content — `array`
   *
   * Add content to the grid cells
   */
  content?: Array<SanityKeyed<TeaserBlock>>;
};

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;

      /**
       * Alternative Text — `string`
       *
       *
       */
      alt?: string;
    }>
>;

export type Documents =
  | Author
  | Category
  | Post
  | TeaserBlock
  | ContactPage
  | HomePage
  | NavigationSetting
  | AppearanceSetting;
