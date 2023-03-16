const accommodations = [
    {
      name: "Ride1",
      city: "Tokyo",
      description: "damm",
      imageUrl: "https://source.unsplash.com/300x200/?accommodation,tokyo"
    },
    {
      name: "Ride2",
      city: "Osaka",
      description: "damm",
      imageUrl: "https://source.unsplash.com/300x200/?accommodation,osaka"
    },
    {
      name: "Ride3",
      city: "Kyoto",
      description: "damm",
      imageUrl: "https://source.unsplash.com/300x200/?accommodation,kyoto"
    },
    {
      name: "Ride3",
      city: "Kyoto",
      description: "damm",
      imageUrl: "https://source.unsplash.com/300x200/?accommodation,kyoto"
    },
    {
      name: "Ride3",
      city: "Kyoto",
      description: "damm",
      imageUrl: "https://source.unsplash.com/300x200/?accommodation,kyoto"
    },
    {
      name: "Ride3",
      city: "Kyoto",
      description: "damm",
      imageUrl: "https://source.unsplash.com/300x200/?accommodation,kyoto"
    }
  ];
  
  // 掲載件数を表示するためのspan要素を取得
  const accommodationCountElement = document.getElementById('accommodation-count');
  
  // 掲載件数を計算
  const accommodationCount = accommodations.length;
  
  // span要素に掲載件数を表示
  accommodationCountElement.textContent = accommodationCount;
  
  
  
  const container = document.getElementById("accommodation-container");
  
  accommodations.forEach(accommodation => {
    const col = document.createElement("div");
    col.classList.add("col-md-4", "accommodation-card");
  
    const card = document.createElement("div");
    card.classList.add("card");
  
    const img = document.createElement("img");
    img.src = accommodation.imageUrl;
    img.alt = accommodation.name;
    img.classList.add("card-img-top");
  
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = `${accommodation.name}, ${accommodation.city}`;
  
    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = accommodation.description;
  
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
  
    card.appendChild(img);
    card.appendChild(cardBody);
  
    col.appendChild(card);
  
    container.appendChild(col);
  });
  