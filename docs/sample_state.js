{
  entities: {
    articles: {
      1: {
        id: 1,
        title: "Nomway House",
        headline: "The smallest townhouse in the world!",
        body: "This small house...sample body text",
        lat: 45.678,
        long: -34.453,
        author_id: 6,
        city_id: 49,
        images: [3, 6],
        editing_authors: [],
      },
      4: {
        id: 4,
        title: "The Blue Flash",
        headline: "Legendary Indiana backyard rollercoaster",
        body: "One Indiana man's dream to build his own rollercoaster...",
        lat: 65.234,
        long: 48.234,
        author_id: 8,
        city_id: 16,
        images: [5, 9],
        editing_authors: [6],
      },
      12: {
        id: 12,
        title: "New York Marble Cemetary",
        headline: "Hidden cemetary in the East Village",
        body: "Walk down just one small alleyway and you'll find yourself...",
        lat: 12.234,
        long: -23.234,
        author_id: 8,
        city_id: 64,
        images: [14],
        editing_authors: [],
      }
    },
    users: {
      6: {
        id: 6,
        username: "WorldTraveler",
        avatar_url: "sample_avatar_url",
      },
      8: {
        id: 8,
        username: "FlatStanley",
        avatar_url: "another_sample_url"
      }
    },
    cities: {
      49: {
        id: 49,
        name: "Amsterdam",
        country_id: 56,
        article_ids: [1]
      },
      52: {
        id: 52,
        name: "Bruceville",
        country_id: 6,
        article_ids: [4]
      },
      64: {
        id: 64,
        name: "New York",
        country_id: 6,
        article_ids: [12]
      }
    },
    countries: {
      6: {
        id: 6,
        name: "United States of America",
        city_ids: [52, 64],
      },
      56: {
        id: 56,
        name: "Netherlands",
        city_ids: [49],
      }
    },
    images: {
      3: {
        id: 3,
        article_id: 1,
        image_url: "some_image",
        primary_image: true,
      },
      5: {
        id: 5,
        article_id: 4,
        image_url: "some_image_two",
        primary_image: true,
      },
      6: {
        id: 6,
        article_id: 1,
        image_url: "some_image_three",
        primary_image: false,
      },
      9: {
        id: 9,
        article_id: 4,
        image_url: "some_image_four",
        primary_image: false,
      },
      14: {
        id: 14,
        article_id: 12,
        image_url: "some_image_five",
        primary_image: true,
      }
    }
  },
  ui: {
    loading: true,
  },
  errors: {
    login: ["Invalid login credentials"],
    articleForm: ["Article headline cannot be blank"],
  },
  session: {
    id: 57
  }
}
