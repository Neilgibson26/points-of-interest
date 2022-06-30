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
      description:
        "Isabelle’s Restaurant & Terrace features a fresh, innovative and seasonally led food and drinks menu with a warm welcome, all brought together in a beautifully designed space in the heart of Dublin. Whether you’re looking for a place to meet family for a leisurely lunch, a catch up with friends over dinner or to take a cocktail break from shopping, Isabelle’s looks forward to having you.",
      category: "Restaurant",
      img: "https://res.cloudinary.com/neilgibson1999/image/upload/v1656594961/effebydur2uflhmtzx1u.jpg",
      user_id: "->users.neil",
    },
    fabric: {
      title: "Fabric",
      latitude: 6529,
      longitude: -1900,
      city: "London",
      country: "England",
      description:
        "Fabric is a defining force in London’s electronic dance scene. Established in 1999 by Keith Riley and Cameron Leslie, the Farringdon-based nightclub has since become one of the most iconic clubs in London. With an undeniable influence on the city’s underground music scene, Fabric mainly plays electronic music dedicated to bass sounds, such as dubset, bassline, drum and bass, and even some grime and breakbeat. If you’ve ever stepped foot through the superclub’s doors, its labyrinth-like layout, dark rooms and pulsing underground sound is a transformative experience.",
      category: "Nightclub",
      img: "https://res.cloudinary.com/neilgibson1999/image/upload/v1656595221/ayu0fcab1rf20ijpvh4k.jpg",
      user_id: "->users.neil",
    },
    diceys: {
      title: "Diceys",
      latitude: 2345,
      longitude: 5432,
      city: "Dublin",
      country: "Ireland",
      description:
        "Dicey’s Garden is undisputedly the most popular venue this side of town. We offer fantastic value for money and an extensive range of drinks and food menus alike. Our carvery is open Monday- Friday from 12pm- 2.30pm. We also have a salad bar and soups available. Our popular bar food menu is available until 10pm every night, we also have a late BBQ menu from 10pm. We cater for group bookings and corporate BBQ’s in our modern bar and all-weather beer garden. We also have three stylish function rooms to cater for private events and table quizzes. Coming in for after work drinks? Book access to our corporate balcony. Bookings availability Monday- Friday (Subject to availability) Contact us for more information. You’ll never miss any sporting action with our 23 large screens and we have a late bar and DJ 7 nights per week. Keep updated with our promotions on our Facebook or twitter pages or sign up to our mailing list.",
      category: "Nightclub",
      img: "https://res.cloudinary.com/neilgibson1999/image/upload/v1656595238/f8vikgogl2b58um5vhxi.jpg",
      user_id: "->users.neil",
    },
    wishbone: {
      title: "Wishbone",
      latitude: 1000,
      longitude: -3457,
      city: "Dublin",
      country: "Ireland",
      description:
        "Well, this week’s restaurant has been lauded as one of Dublin’s best chicken restaurants. It’s a restaurant that just serves chicken two ways. This restaurant is Wishbone and they only serve two dishes chicken wings and tenders. Which means they can hone their wing craft to perfection. It is worth noting that there is also a sister restaurant in Kilkenny. Also now as of recent they gave opened another venue right here in Dublin on Dorset street, keeping the same quality and consistency as they have with the original ",
      category: "Restaurant",
      img: "https://res.cloudinary.com/neilgibson1999/image/upload/v1656595258/xvcieyl2oyjdxj9hn7xp.jpg",
      user_id: "->users.mike",
    },
  },
};
