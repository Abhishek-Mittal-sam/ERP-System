

export const productColumns = [
  { field: "id", headerName: "Product ID", width: 130 },
  {
    field: "product",
    headerName: "Product",
    width: 330,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.product}
        </div>
      );
    },
  },
  { field: "brands", headerName: "Brand", width: 100 },
  { field: "price", headerName: "Price", width: 200 },
  {
    field: "stock",
    headerName: "Stock",
    width: 200,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.stock}`}>
          {params.row.stock}
        </div>
      );
    },
  },


];

export const productRows = [
  {
    id: "DRBDM063",
    img: "/assets/carbattery.jpg",
    product: "DRIVETEC 063 CAR BATTERY",
    brands: "DRIVETEC",
    price: "$40.90",
    stock: "AVL",
    view: "View",
    delete:"Delete",
  },
  {
    id: "51Wy1UhvbZL",
    img: "/assets/engineoil.jpg",
    product: "Auto Parts Engine Oil Viscosity",
    brands: "Turbo",
    price: "$25.00",
    stock: "AVL",
    view: "View",
    delete:"Delete",
  },
  {
    id: "HJKDM063",
    img: "/assets/engineoil2.jpg",
    product: "ENGINE OIL",
    brands: "Turbo",
    price: "$20.00",
    stock: "UNAVL",
    view: "View",
    delete:"Delete",
  },
  {
    id: "31CTWTB2",
    img: "/assets/engineoil.jpg",
    product: "HONDA 4 STROKE ENGINE OIL",
    brands: "Platinum",
    price: "$20.00",
    stock: "AVL",
    view: "View",
    delete:"Delete",
  },
  {
    id: "HRDDR3055",
    img: "/assets/wheel.jpg",
    product: "Platinum Plus - Wheel",
    brands: "Platinum",
    price: "$160.00",
    stock: "AVL",
    view: "View",
    delete:"Delete",
  },
  {
    id: "FGH543",
    img: "/assets/carbrush.jpg",
    product: "Short Handle Car Brush",
    brands: "Amazon",
    price: "$18.00",
    stock: "UNAVL",
    view: "View",
    delete:"Delete",
  },
  {
    id: "YABYBX3055",
    img: "/assets/carbattery.jpg",
    product: "YUASA 055 SERIES CAR BATTERY",
    brands: "YUASA",
    price: "$137.00",
    stock: "AVL",
    view: "View",
    delete:"Delete",
  },
];







export const orderColumns = [
  { field: "id", headerName: "Order ID", width: 140 },
  {
    field: "product",
    headerName: "Product",
    width: 300,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.product}
        </div>
      );
    },
  },
  { field: "customer", headerName: "Customer", width: 160 },
  { field: "date", headerName: "Date", width: 140 },
  { field: "amount", headerName: "Amount", width: 100 },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },


];


export const orderRows = [
  {
    id: 2117383933399,
    product: "Food Crusher & Blender",
    img: "/assets/blender.jpg",
    customer: "Lee Martin",
    date: "27th September",
    amount: 300,
    method: "Cash on Delivery",
    status: "Approved",
    update:"Update",
  },
  {
    id: 6617772543119,
    product: "Nexus 32Inch TV",
    img: "/assets/Tv.jpg",
    customer: "Sebastian Walker",
    date: "5th February",
    amount: 100,
    method: "Online Payment",
    status: "Pending",
    update:"Update",
  },
  {
    id: 200116351133,
    product: "Scanfrost 4-Burner Gas Cooker",
    img: "/assets/gascooker.jpg",
    customer: "Lopez Williams",
    date: "1st June",
    amount: 200,
    method: "Online Payment",
    status: "Approved",
    update:"Update",
  },
  {
    id: 22567721541,
    product: "Bluetooth Multimedia Speakers",
    img: "/assets/speaker.jpg",
    customer: "Alexander White",
    date: "21st August",
    amount: 160,
    method: "Cash on Delivery",
    status: "Pending",
    update:"Update",
  },

  {
    id: 4520015619,
    product: "Apple Iphone 14 Pro Max",
    img: "/assets/iphone.webp",
    customer: "Camila Michael",
    date: "20th March",
    amount: 1800,
    method: "Cash on Delivery",
    status: "Approved",
    update:"Update",
  },
  {
    id: 25566001527,
    product: "3 IN 1 Bag Set",
    img: "/assets/bag.jpg",
    customer: "Madison Anthony",
    date: "3rd October",
    amount: 20,
    method: "Cash on Delivery",
    status: "Pending",
    update:"Update",
  },


  {
    id: 6117383933399,
    product: "Food Crusher & Blender",
    img: "/assets/blender.jpg",
    customer: "Lee Martin",
    date: "27th September",
    amount: 300,
    method: "Cash on Delivery",
    status: "Approved",
    update:"Update",
  },
  {
    id: 8617772543119,
    product: "Nexus 32Inch TV",
    img: "/assets/Tv.jpg",
    customer: "Sebastian Walker",
    date: "5th February",
    amount: 100,
    method: "Online Payment",
    status: "Pending",
    update:"Update",
  },

  {
    id: 28567721541,
    product: "Bluetooth Multimedia Speakers",
    img: "/assets/speaker.jpg",
    customer: "Alexander White",
    date: "21st August",
    amount: 160,
    method: "Cash on Delivery",
    status: "Pending",
    update:"Update",
  },
  {
    id: 2517383933399,
    product: "Lenovo Ideapad",
    img: "/assets/laptop2.jpg",
    customer: "Garcia Davis",
    date: "16th February",
    amount: 570,
    method: "Online Payment",
    status: "Approved",
    update:"Update",
  },
  {
    id: 48820015619,
    product: "Apple Iphone 14 Pro Max",
    img: "/assets/iphone.webp",
    customer: "Camila Michael",
    date: "20th March",
    amount: 1800,
    method: "Cash on Delivery",
    status: "Approved",
    update:"Update",
  },
  {
    id: 2557766001527,
    product: "3 IN 1 Bag Set",
    img: "/assets/bag.jpg",
    customer: "Madison Anthony",
    date: "3rd October",
    amount: 20,
    method: "Cash on Delivery",
    status: "Pending",
    update:"Update",
  },
  {
    id: 21047383933399,
    product: "Oroimo FreePods",
    img: "/assets/freepod.jpg",
    customer: "Natalie King",
    date: "29th December",
    amount: 25,
    method: "Cash on Delivery",
    status: "Approved",
    update:"Update",
  },
  {
    id: 21987383933399,
    product: "Food Crusher & Blender",
    img: "/assets/blender.jpg",
    customer: "Miller Brooks",
    date: "27th September",
    amount: 270,
    method: "Cash on Delivery",
    status: "Approved",
    update:"Update",
  },
];


