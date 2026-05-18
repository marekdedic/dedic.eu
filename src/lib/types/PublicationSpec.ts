export interface PublicationSpec {
  abstract: string;
  authors: Array<string>;
  bib?: string;
  blogpostUrl?: string;
  date: Date;
  id: string;
  paperPdf?: string;
  previewImage?: string;
  tags?: Array<string>;
  title: string;
}
