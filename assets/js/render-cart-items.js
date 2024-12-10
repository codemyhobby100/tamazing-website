function run() {
  const data = [
    {
      id: 1,
      category: "hair-removal",
      title: "Electrolysis / Epilation",
      price: 45,
      image: "./assets/images/hair-removal-2.jpg",
    },
    {
      id: 2,
      category: "massage",
      title: "Aromatherapy",
      price: 45,
      image: "./assets/images/aromatherapy.jpg",
    },
    {
      id: 3,
      category: "massage",
      title: "Lymphatic drainage massage",
      price: 45,
      image: "./assets/images/Lymphatic.jpg",
    },
    {
      id: 4,
      category: "massage",
      title: "Swedish massage",
      price: 45,
      image: "./assets/images/spa2.jpg",
    },
    {
      id: 5,
      category: "massage",
      title: "Deep tissue massage",
      price: 45,
      image: "./assets/images/massage.jpg",
    },
    {
      id: 6,
      category: "massage",
      title: "Japanese sand therapy",
      price: 45,
      image: "./assets/images/japanese dome.jpg",
    },
    {
      id: 7,
      category: "hair-removal",
      title: "Waxing",
      price: 45,
      image: "./assets/images/waxing.jpg",
    },
    {
      id: 8,
      category: "body-treatments",
      title: "Japanese Sand Dome Therapy",
      price: 45,
      image: "./assets/images/japanese.jpg",
    },
    {
      id: 9,
      category: "body-treatments",
      title: "Cavitation Massage",
      price: 45,
      image: "./assets/images/slimming.jpg",
    },
  ];
  const getCarts = localStorage.getItem("cart");
  console.log({ getCarts: JSON.parse(getCarts) });
  const db = JSON.parse(getCarts);
  // filter data to be on and add quantity for single items
  const filterData = db.reduce((pre, current) => {
    console.log(pre);
    const isExist = pre.findIndex((single) => single?.id === current);

    if (-1 < isExist) {
      pre[isExist].quantity = pre[isExist].quantity + 1;
      return pre;
    } else {
      const itemData = data.find((single) => single.id === current);
      const newData = [
        ...pre,
        {
          ...itemData,
          quantity: 1,
        },
      ];
      return newData;
    }
  }, []);
  //   filter data is the main data with ids

  let domStr = ``;

  filterData.forEach((element) => {
    domStr += `
    <div class="basket-product">
    <div class="item">
      <div class="product-image">
        <img
          src="${element.image}"
          alt="${element.title}"
          class="product-frame"
        />
      </div>
      <div class="product-details">
        <h1>
          <strong
            ><span class="item-quantity">4</span> x Eliza J</strong
          >
          Lace Sleeve Cuff Dress
        </h1>
        <p><strong>Navy, Size 18</strong></p>
        <p>Product Code - 232321939</p>
      </div>
    </div>
    <div class="price">26.00</div>
    <div class="quantity">
      <input type="number" value="${element.quantity}" min="1" class="quantity-field" />
    </div>
    <div class="subtotal">104.00</div>
    <div class="remove">
      <button>Remove</button>
    </div>
  </div>
    `;
  });
  document.querySelector("#items").innerHTML = domStr;
}
// run();
window.addEventListener("DOMContentLoaded", run());
