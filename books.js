import MongoDB from './connectToMongoDB.js';

const Library = MongoDB.Collection('library');

if (await Library.countDocuments() < 3) {
  await Library.bulkWrite([
    {
      insertOne: {
        document: {
          title: 'Man',
          author: 'David Baldachi',
          year: '1989',
        },
      },
    },
    {
      insertOne: {
        document: {
          title: 'Take no names',
          author: 'Daniel Nieh',
          year: '1998',
        },
      },
    },
    {
      insertOne: {
        document: {
          title: ' Web3',
          author: 'Saifedean',
          year: '2017',
        },
      },
    }
  ])
}

export default Library;
