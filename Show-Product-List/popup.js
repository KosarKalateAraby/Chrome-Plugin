
//تابع fetch برای گرفتن داده از یک آدرس
fetch("http://localhost/API/products.php")
    //then یعنی وقتی که fetch با موفقیت جواب داد

    //response.json() یعنی پاسخ سرور رو به فرمت json تبدیل کن
  .then((response) => response.json())

    //   پاسخ سرور رو داخل data ذخیره میکنه
  .then((data) => {
    const list = document.getElementById("product-list");

    // یک حلقه برای تموم آیتم های data یعنی همون محصولات
    // و بعد هر محصول رو میریزه داخل product
    data.forEach((product) => {

        const card = document.createElement("div");
        card.className = "bg-white rounded-xl shadow-md p-4 flex flex-col items-center";

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;
        img.className = "w-32 h-32 object-cover mb-2 rounded";

        const name = document.createElement("h2");
        name.textContent = product.name;
        name.className = "text-lg font-semibold mb-1 text-center";

        const price = document.createElement("p");
        price.textContent = `قیمت: ${product.price} تومان`;
        price.className = "text-gray-700 text-sm";

        // const id = document.createElement("p");
        // id.textContent = product.id;
        // id.className = "text-gray-700 text-sm";

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(price);
        // card.appendChild(id);

        list.appendChild(card);
    });
  })
  .catch((error) => {
    console.error('خطا' , error);
  });
