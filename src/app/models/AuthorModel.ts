export interface AuthorDetails {
    name: string
    title: string
    links: Link[]
    bio: string
    type: Type2
    alternate_names: string[]
    photos: number[]
    wikipedia: string
    personal_name: string
    entity_type: string
    birth_date: string
    source_records: string[]
    key: string
    fuller_name: string
    remote_ids: RemoteIds
    latest_revision: number
    revision: number
    created: Created
    last_modified: LastModified
  }
  
  export interface Link {
    title: string
    url: string
    type: Type
  }
  
  export interface Type {
    key: string
  }
  
  export interface Type2 {
    key: string
  }
  
  export interface RemoteIds {
    viaf: string
    goodreads: string
    storygraph: string
    isni: string
    librarything: string
    amazon: string
    wikidata: string
  }
  
  export interface Created {
    type: string
    value: string
  }
  
  export interface LastModified {
    type: string
    value: string
  }
  