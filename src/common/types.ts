export type HesCodeType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  expireAt: Date;
};

export type HesLogType = {
  id: number;
  createdAt: Date;
  details: string;
  location: string;
};

export type HesCodeListType = {
  page_total: number;
  total: number;
  results: HesCodeType[];
};

export type HesLogListType = {
  page_total: number;
  total: number;
  results: HesLogType[];
};
