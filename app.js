Vue.component("navigation-bar", {
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Food Blog</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-for="link in links" :key="link">
            <a class="nav-link" href="#">{{ link }}</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  data() {
    return {
      links: ["Home", "Recipes", "Lifestyles", "Videos", "About"],
    };
  },
});

Vue.component("chili-image", {
  template: `<img src="images/chili.jpg" alt="White Chicken Chili" class="img-fluid rounded mb-4" />`,
});

Vue.component("comments", {
  template: "<h2 class='text-center text-secondary'>Comments</h2>",
});

new Vue({
  el: "#app",
  data: {
    posts: [
      {
        author: "Brianna",
        date: "February 18, 2021 @ 3:30 pm",
        paragraph:
          "Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin, but I substituted with fresh cilantro and extra paprika, and it turned out great! My family loved it, and we’ll definitely be making it again soon. Thanks for sharing this recipe!",
        foodieLevel: "Novice",
        bio: "Food enthusiast. Love to cook and experiment. Into only organic, fat-free, sugar-free stuffs!",
      },
      {
        author: "LINH",
        date: "February 15, 2021 @ 9:46 am",
        paragraph:
          "I just made this soup today and it’s so tasty! Perfect for a chilly day and very easy to make. I ended up adding a bit more garlic and it added the perfect kick. Will be making this again for sure!",
        foodieLevel: "Newcomer",
        bio: "Love food! Grew up with meat and potatoes. Recently ventured outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.",
      },
      {
        author: "CATHERINE LEONARDO",
        date: "February 15, 2021 @ 9:46 am",
        paragraph:
          "I LOVE this White Chicken Chili! You are right; it’s so comforting and flavorful. My boyfriend even said it’s the best chili he’s ever had. The flavors blend beautifully, and I love that it’s a healthier version of regular chili.",
        foodieLevel: "Mentor",
        bio: "I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never looked back since!",
      },
      {
        author: "KALI",
        date: "February 13, 2021 @ 11:31 am",
        paragraph:
          "This recipe is dynamite! My partner usually won’t eat beans, but he had a second bowl. The flavors are spot on, and it’s great for meal prep too. I added a bit of lime juice on top for extra zing. Thank you for this amazing recipe!",
        foodieLevel: "Novice",
        bio: "Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I'm a food whore! Invite me over for dinner and I'll be there!",
      },
    ],
    reply: "REPLY",
    activeProfile: null,
    profilePlaceholder: "images/profile.png",
  },
  methods: {
    showProfile(index) {
      this.activeProfile = index;
    },
    closeProfile() {
      this.activeProfile = null;
    },
  },
});
