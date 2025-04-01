type DataType = {
  title: string,
  short: string,
  data: Array<string>,
  subdata?: string,
}

type AboutType = {
  title: string,
  short: string,
  className?: string,
  data: Array<DataType>,
}

export const aboutData: Array<AboutType> = [
  {
    title: 'Skills',
    short: 'skill',
    className: 'ml-4 sm:ml-8 xl:ml-0',
    data: [
      {
        title: 'Languages',
        short: 'lang',
        data: [
          'JavaScript/TypeScript', 
          'HTML/CSS', 
          'PHP', 
          'SQL', 
          'C#', 
          'C/C++',
        ],
      },
      {
        title: 'Technologies',
        short: 'tech',
        data: [
          'React',
          'Next.js',
          'MongoDB',
          'Node.js',
          'Docker',
          'Linux',
        ],
      },
    ],
  },
  {
    title: 'Experience',
    short: 'exp',
    className: 'mr-14 sm:mr-24 sm:mt-4 xl:mr-0 xl:mt-48',
    data: [
      {
        title: 'Web Developer',
        short: 'web-1',
        data: ['Computer SOS, Inc.'],
        subdata: 'Nov. 2021—Present',
      },
      {
        title: 'Web Developer',
        short: 'web-2',
        data: ['Changeling VR'],
        subdata: 'June 2020—Aug. 2020',
      },
    ],
  },
  {
    title: 'Education',
    short: 'edu',
    className: 'ml-16 sm:ml-24 sm:mt-4 xl:ml-0 xl:mt-16',
    data: [
      {
        title: 'University',
        short: 'uni',
        data: ['Rochester Institute of Technology'],
      },
      {
        title: 'Major',
        short: 'maj',
        data: ['Game Design and Development'],
      },
      {
        title: 'Graduated',
        short: 'grad',
        data: ['Spring 2022'],
      },
    ],
  },
]