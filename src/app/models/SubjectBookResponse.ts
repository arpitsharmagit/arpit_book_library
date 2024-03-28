interface SubjectBookResponse {
  key: string;
  name: string;
  subject_type: string;
  work_count: number;
  works: Work[];
  ebook_count: number;
  subjects: Subject[];
  places: Subject[];
  people: Subject[];
  times: Subject[];
  authors: Subject[];
  publishers: Subject[];
  languages: Language[];
  publishing_history: number[][];
}

interface Language {
  name: string;
  count: number;
}
interface Subject {
  key: string;
  name: string;
  count: number;
}

interface Work {
  key: string;
  title: string;
  edition_count: number;
  cover_id: number;
  cover_edition_key: string;
  subject: string[];
  ia_collection: string[];
  lendinglibrary: boolean;
  printdisabled: boolean;
  lending_edition: string;
  lending_identifier: string;
  authors: Author[];
  first_publish_year: number;
  ia: string;
  public_scan: boolean;
  has_fulltext: boolean;
  availability: Availability;
}

interface Availability {
  status: string;
  available_to_browse: boolean;
  available_to_borrow: boolean;
  available_to_waitlist: boolean;
  is_printdisabled: boolean;
  is_readable: boolean;
  is_lendable: boolean;
  is_previewable: boolean;
  identifier: string;
  isbn?: any;
  oclc?: any;
  openlibrary_work: string;
  openlibrary_edition: string;
  last_loan_date?: any;
  num_waitlist?: any;
  last_waitlist_date?: any;
  is_restricted: boolean;
  is_browseable: boolean;
  __src__: string;
}

interface Author {
  key: string;
  name: string;
}

export { SubjectBookResponse, Work, Author }