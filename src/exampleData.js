const exampleData = {
  personalDetails: {
    fullName: 'John Smith',
    email: 'john.smith@gmail.com',
    phone: '555-555-5555',
    address: 'Long Island, NY'
  },
  educations: [
    {
      school: 'Binghamton University',
      degree: 'Computer Science',
      startDate: '01/2022',
      endDate: 'Current',
      location: 'New York',
      id: crypto.randomUUID()
    },
    {
      school: 'Walt Whitman High School',
      degree: 'High School',
      startDate: '01/2002',
      endDate: '01/2006',
      location: 'New York',
      id: crypto.randomUUID()
    },
  ],
  experiences: [
    {
      company: 'Random Company',
      position: 'Programmer',
      startDate: '01/2009',
      endDate: 'Current',
      location: 'New York',
      description: 'Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android',
      id: crypto.randomUUID()
    },
    {
      company: 'Another Company',
      position: 'Engineer',
      startDate: '01/2007',
      endDate: '01/2009',
      location: 'New York',
      description: 'Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.',
      id: crypto.randomUUID()
    }
  ]
}

export default exampleData;
