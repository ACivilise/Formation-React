import { UserDescription } from "../types";

export const users: UserDescription[] = [
  {
    info: {
      firstName: "Alexandre",
      lastName: "CIVILISE",
    },
    professionalInfos: {
      company: "C2S",
      contact: {
        email: "acivilise@c2s.fr",
        phone: "+33600000",
      },
      job: "Expert",
      techs: ["Typescript", "React", "Mobx", "React-Router"],
    },
  },
  {
    info: {
      firstName: "Patrick",
      lastName: "LEFEVRE",
    },
    professionalInfos: {
      company: "C2S",
      contact: {
        email: "plefevre@c2s.fr",
        phone: "+33600000",
      },
      job: "ARCHITECTE LOGICIELS",
      techs: [
        "C#",
        "DotNet",
        "SQL Server",
        "Swift",
        "Java",
        "Android",
        "QC Script",
      ],
    },
  },
  {
    info: {
      firstName: "Stéphane",
      lastName: "REALINI DECROCQ",
    },
    professionalInfos: {
      company: "C2S",
      contact: {
        email: "srealini@c2s.fr",
        phone: "+33600000",
      },
      job: "INGENIEUR D'ETUDES",
      techs: ["Swift", "Java", "Android"],
    },
  },
  {
    info: {
      firstName: "Mickaël",
      lastName: "VINCENT",
    },
    professionalInfos: {
      company: "C2S",
      contact: {
        email: "mvincent@c2s.fr",
        phone: "+33600000",
      },
      job: "APPRENTI INGENIEUR DEVELOPPEUR",
      techs: ["React Native", "C#", "QC Script"],
    },
  },
  {
    info: {
      firstName: "Ramy",
      lastName: "ASSAF",
    },
    professionalInfos: {
      company: "C2S",
      contact: {
        email: "rassaf@c2s.fr",
        phone: "+33600000",
      },
      job: "DEVELOPPEUR MOBILE",
      techs: ["Android", "IOS"],
    },
  },
];
