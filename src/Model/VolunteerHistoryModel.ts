export interface VolunteerHistoryInterface {
  title: string;
  description: string;
  coverImage: string;
  startDate: Date;
  endDate?: Date;
  websiteURL?: string;
  bulletPoints: string[];
}
