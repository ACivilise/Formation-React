export type UserInfos = {
  firstName: string;
  lastName: string;
};

export type ContactInfos = {
  phone: string;
  email: string;
};

export type ProfessionalInfos = {
  job: string;
  company: string;
  techs: string[];
  contact: ContactInfos;
};

export type UserDescription = {
  info: UserInfos;
  professionalInfos: ProfessionalInfos;
};
