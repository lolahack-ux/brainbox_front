export interface Connaissance {
  _id?: string;
  titre: string;
  type: string;
  technologies: string[];
  description: string;
  code: string | null;
  projet: string;
  fichier: string | null;
  tags: string[];
  date_ajout?: string;
  date_modification?: string;
}