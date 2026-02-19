export interface PublicationSpec {
  abstract: string;
  authors: Array<string>;
  bib?: string;
  date: Date;
  id: string;
  pdf?: string;
  previewImage?: string;
  tags?: Array<string>;
  title: string;
}
