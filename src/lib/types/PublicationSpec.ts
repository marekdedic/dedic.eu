export interface PublicationSpec {
  abstract: string;
  authors: Array<string>;
  bib?: string;
  blogpost?: string;
  date: Date;
  id: string;
  pdf?: string;
  previewImage?: string;
  tags?: Array<string>;
  title: string;
}
