export const seedData = {
  users: {
    _model: "User",

    neil: {
      firstName: "Niamh",
      lastName: "Gibson",
      email: "niamho@gmail.com",
      password: "niamh",
      accountType: "User",
      isAdmin: false,
    },

    james: {
      firstName: "James",
      lastName: "Sweeney",
      email: "js@gmail.com",
      password: "jimmy",
      accountType: "User",
      isAdmin: false,
    },

    jordan: {
      firstName: "Jordan",
      lastName: "Quinn",
      email: "jordyQ@gmail.com",
      password: "Theo",
      accountType: "User",
      isAdmin: false,
    },

    mike: {
      firstName: "Mike",
      lastName: "Tyson",
      email: "mikeyt@gmail.com",
      password: "beast",
      accountType: "Admin",
      isAdmin: true,
    },
  },
  pointsOfInterest: {
    _model: "Poi",

    isabelles: {
      title: "Isabelles",
      latitude: 1234,
      longitude: 4321,
      city: "Dublin",
      country: "Ireland",
      description: "Italian",
      category: "Restaurant",
      user_id: "->users.neil",
    },
    fabric: {
      title: "Fabric",
      latitude: 6529,
      longitude: -1900,
      city: "London",
      country: "England",
      description: "Brittish",
      category: "Nightclub",
      user_id: "->users.neil",
    },
    diceys: {
      title: "Diceys",
      latitude: 2345,
      longitude: 5432,
      city: "Dublin",
      country: "Ireland",
      description: "Brazillian",
      category: "Nightclub",
      user_id: "->users.neil",
    },
    wishbone: {
      latitude: 1000,
      longitude: -3457,
      city: "Dublin",
      country: "Ireland",
      description: "American",
      category: "Restaurant",
      user_id: "->users.mike",
    },
  },
};
