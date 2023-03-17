export interface CharacterProps {
  character: {
    id: number,
    image: string,
    name: string,
    species: string,
  };
}

export interface CharacterCardProps {
  character: {
    image: string,
    name: string,
    gender: string,
    status: string,
    species: string,
    origin: {
      name: string,
    },
    type?: string,
  };
}
export interface CharacterListProps {
  characters: {
    id: number,
    image: string,
    name: string,
    species: string,
  }[];
}
export interface FooterProps {
  author: string;
  website: string;
}
export interface BackLinkProps {
  to: string;
}

export type User = {
  name: string;
  token: string;
};
export interface Props {
  currentPage: number;
  totalPages: number;
  onChangePage: (pageNumber: number) => void;
  itemsPerPage: number;
  totalItems: number;
}
export interface SearchProps {
value: string;
onChange: (value: string) => void;
}