export interface PublicationSpec {
  abstract: string;
  authors: Array<string>;
  bib?: string;
  biblatex?: string;
  blogpostUrl?: string;
  date?: Date;
  id: string;
  paperPdf?: string;
  posterPdf?: string;
  previewImage?: string;
  tags?: Array<string>;
  title: string;
}
