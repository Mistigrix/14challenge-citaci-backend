export type Category = 'toutes' | 'sagesse' | 'proverbe-ci' | 'motivation' | 'leadership';

export const VALID_CATEGORIES: Category[] = ['toutes', 'sagesse', 'proverbe-ci', 'motivation', 'leadership'];
export const DB_CATEGORIES = ['sagesse', 'proverbe-ci', 'motivation', 'leadership'] as const;

export interface CitationBody {
  text: string;
  author: string;
  authorDescription: string;
  category: Exclude<Category, 'toutes'>;
}
