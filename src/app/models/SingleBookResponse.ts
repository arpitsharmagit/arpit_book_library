export interface BookDetails {
    url: string
    key: string
    title: string
    authors: Author[]
    number_of_pages: number
    pagination: string
    by_statement: string
    identifiers: Identifiers
    classifications: Classifications
    publishers: Publisher[]
    publish_places: PublishPlace[]
    publish_date: string
    subjects: Subject[]
    subject_places: SubjectPlace[]
    subject_people: SubjectPeople[]
    subject_times: SubjectTime[]
    notes: string
    ebooks: Ebook[]
    cover: Cover
}

export interface Author {
    url: string
    name: string
}

export interface Identifiers {
    librarything: string[]
    project_gutenberg: string[]
    goodreads: string[]
    isbn_10: string[]
    lccn: string[]
    oclc: string[]
    openlibrary: string[]
}

export interface Classifications {
    lc_classifications: string[]
    dewey_decimal_class: string[]
}

export interface Publisher {
    name: string
}

export interface PublishPlace {
    name: string
}

export interface Subject {
    name: string
    url: string
}

export interface SubjectPlace {
    name: string
    url: string
}

export interface SubjectPeople {
    name: string
    url: string
}

export interface SubjectTime {
    name: string
    url: string
}

export interface Ebook {
    preview_url: string
    availability: string
    formats: Formats
}

export interface Formats { }

export interface Cover {
    small: string
    medium: string
    large: string
}
