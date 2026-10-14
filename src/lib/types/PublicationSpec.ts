import type { AssetPath } from "$app/types";

export interface PublicationSpec {
  abstract: string;
  authors: Array<string>;
  bib?: string;
  biblatex?: string;
  blogpostUrl?: string;
  date?: Date;
  id: string;
  paperPdf?: AssetPath;
  posterPdf?: AssetPath;
  previewImage?: string;
  tags?: Array<string>;
  title: string;
}
