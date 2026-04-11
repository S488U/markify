export type Note = {
  _id: string;
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
};

export type ApiResponse = {
  success: boolean;
  message?: string;
  notes?: Note[];
  note?: Note;
};
