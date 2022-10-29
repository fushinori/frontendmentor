export interface GenericArticle {
  headline: string;
  preview: string;
}

export interface Image {
  url: string;
  alt: string;
}

export interface Article {
  image: Image;
  article: GenericArticle;
}
