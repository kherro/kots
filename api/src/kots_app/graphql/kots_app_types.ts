const KotsApp = `
  type KotsApp {
    id: String
    name: String
    iconUri: String
    createdAt: String
    updatedAt: String
    slug: String
    currentSequence: Int
    lastUpdateCheckAt: String
    bundleCommand: String
    downstreams: [KotsDownstream]
  }
`;

const KotsDownstream = `
  type KotsDownstream {
    name: String
    cluster: Cluster
  }
`;

const KotsVersion = `
  type Version {
    title: String!
    status: String!
    createdOn: String!
    sequence: Int
    deployedAt: String
  }
`

export default [
  KotsApp,
  KotsDownstream,
  KotsVersion,
];
