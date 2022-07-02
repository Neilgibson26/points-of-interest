export const seedData = {
  users: {
    _model: "User",

    neil: {
      firstName: "Neil",
      lastName: "Gibson",
      email: "niamho@gmail.com",
      password: "niamh",
      accountType: "User",
      isAdmin: false,
      timeCreated: "16:12:25",
      dateCreated: "01/07/2022",
      poiCount: 3,
    },

    james: {
      firstName: "James",
      lastName: "Sweeney",
      email: "js@gmail.com",
      password: "jimmy",
      accountType: "User",
      isAdmin: false,
      timeCreated: "19:34:11",
      dateCreated: "03/09/2021",
      poiCount: 0,
    },

    jordan: {
      firstName: "Jordan",
      lastName: "Quinn",
      email: "jordyQ@gmail.com",
      password: "Theo",
      accountType: "User",
      isAdmin: false,
      timeCreated: "00:00:00",
      dateCreated: "25/06/2022",
      poiCount: 0,
    },

    mike: {
      firstName: "Mike",
      lastName: "Tyson",
      email: "mikeyt@gmail.com",
      password: "beast",
      accountType: "Admin",
      isAdmin: true,
      timeCreated: "07:15:49",
      dateCreated: "25/05/2022",
      poiCount: 1,
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
      timeCreated: "19:34:11",
      dateCreated: "03/09/2021",
      review:
        "Food was good but really had to choose carefully because of the incredible prices! starters were from €14 - €19 and then the requirement of having to get a side order on top of the cost of a man course... n o wonder we saw people sharing the pizza, about the cheapest option!",
      creator: "Neil Gibson",
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
      timeCreated: "07:15:49",
      dateCreated: "25/05/2022",
      review:
        "This is the worst music venue I have ever visited. You are treated like rubbish from the minute you arrive, with security worse than any airport visit and utter disrespect from the door staff. DONT GO UNLESS YOU WANT A RUBBISH NIGHT OUT.",
      creator: "Neil Gibson",
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
      timeCreated: "16:12:25",
      dateCreated: "01/07/2022",
      review:
        "our bouncers are on powertrips.Went out with my sister.We got all dressed up had one drink in Trinity Bar and were told by your bouncers 'Girls I don't think this is your scene,this isn't for use' After we were only in there last month Who is he to judge us and say this place isnt suited???Lovely staff ye have.Pack of clowns",
      creator: "Neil Gibson",
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
      timeCreated: "00:00:00",
      dateCreated: "25/06/2022",
      review:
        "Wow! Very very lucky to be taken here this week and totally blown away with how good all the food we ordered was. The chicken bites in hot buffalo with roasted garlic dip is worth every penny. Portions are massive so advise not to eat before hand for a while. Service team were all friendly and attentive. What this place lacks in size it more than makes up for in taste.",
      user_id: "->users.mike",
      creator: "Mike Tyson",
    },
  },
};
