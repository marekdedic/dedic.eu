export interface PublicationParams {
  abstract: string;
  authors: Array<string>;
  bib?: string;
  date: Date;
  pdf?: string;
  previewImage?: string;
  tags?: Array<string>;
  title: string;
}
