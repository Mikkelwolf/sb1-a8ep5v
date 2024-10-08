export interface Question {
  id: string;
  text: string;
  description?: string;
  answers: Answer[];
  youtubeUrl?: string;
  affiliateLinks?: AffiliateLink[];
}

export interface Answer {
  text: string;
  nextQuestionId: string | null;
}

export interface AffiliateLink {
  text: string;
  url: string;
}

export interface FlowchartData {
  questions: Question[];
}