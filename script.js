// Let’s Discuss

const loadCard = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts`
  );
  const data = await res.json();
  const cards = data.posts;
  // console.log(cards);
  displayCards(cards);
};


const displayCards = (cards) => {
    const discussContainer = document.getElementById('discuss-container');

    cards.forEach((card) => {
        const isActiveIcon = card.isActive
            ? '<i class="fa-solid fa-circle" style="color: #27be4d;"></i>'
            : '<i class="fa-solid fa-circle" style="color: red;"></i>';

        const discussCard = document.createElement("div");
        discussCard.classList = `bg-[#7D7DFC1A] h-[270px] rounded-3xl p-8`;
        discussCard.innerHTML = `
            <div class="flex gap-5">
                <div class="rounded-lg h-16 w-16 relative">
                    <div class="absolute rounded-full w-[18px] -right-1">
                        ${isActiveIcon}
                    </div>
                    <img class="w-[100px] h-[64px] lg:rounded-2xl rounded-lg" src="${card.image}" alt="">
                </div>
                <div class="space-y-5">
                    <div class="flex gap-5">
                        <p>${card.category}</p>
                        <p>Author: ${card.author.name}</p>
                    </div>
                    <h1 class="font-bold lg:text-[20px] text-[#12132D]">${card.title}</h1>
                    <p class="lg:w-[569px]">${card.description}</p>
                    <hr class="border-slate-500 ">
                    <div class="flex justify-between">
                        <div class="flex gap-8">
                            <div class="flex gap-2 items-center">
                                <i class="fa-regular fa-message"></i>
                                <p>${card.comment_count}</p>
                            </div>
                            <div class="flex gap-2 items-center">
                                <i class="fa-regular fa-eye"></i>
                                <p>${card.view_count}</p>
                            </div>
                            <div class="flex gap-2 items-center">
                                <i class="fa-regular fa-clock"></i>
                                <p>${card.posted_time} min</p>
                            </div>
                        </div>
                        <button><i class="fa-solid fa-envelope fa-xl" style="color: #63E6BE;"></i></button>
                    </div>
                </div>
            </div>`;

        discussContainer.appendChild(discussCard);
    });
};

// // handel search button

// const handleSearch = () =>{
//     const searchField = document.getElementById('search-field');
//     const searchText = searchField.value;
//     console.log(searchText)
// }


loadCard();


const loadCard2 = async () => {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/retro-forum/latest-posts`
    );
    const data = await res.json();
  
    const cards2 = data.map(item => ({
        image: item.cover_image,
        profile_image: item.profile_image,
        title: item.title,
        author: {
          name: item.author.name,
          designation: item.author.designation
        },
        description: item.description,
        posted_time: item.author.posted_date
      }));
      
  
    displayCards2(cards2);
  };
  
  const displayCards2 = (cards2) => {
    const discussContainer2 = document.getElementById('post-container');
  
    cards2.forEach((card2) => {
      const discussCard2 = document.createElement("div");
      discussCard2.classList = `card w-96 border rounded-3xl space-y-4 border-[#12132D26]`;
      discussCard2.innerHTML = `
        <figure class="px-10 pt-10">
          <img src="${card2.image}" alt="Cover Image" class="rounded-xl" />
        </figure>
        <div class="card-body space-y-2">
          <div class="flex items-center gap-3">
            <i class="fa-regular fa-calendar fa-xl"></i>
            <p>${card2.posted_time}</p>
          </div>
          <h1 class="font-extrabold text-xs">${card2.title}</h1>
          <p>${card2.description}</p>
          <div class="flex items-center space-x-3">
            <img class="w-[44px] h-[44px] rounded-full" src="${card2.profile_image}" alt="Profile Image">
            <div>
              <h1 class="font-bold text-xs">${card2.author.name}</h1>
              <p>${card2.author.designation}</p>
            </div>
          </div>
        </div>`;
  
      discussContainer2.appendChild(discussCard2);
    });
  };
  
  loadCard2();
