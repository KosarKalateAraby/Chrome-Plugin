//تابع fetch برای گرفتن داده از یک آدرس
fetch()
  // "Write Your API Site in fetch"

  //response.json() یعنی پاسخ سرور رو به فرمت json تبدیل کن
  .then((response) => response.json())

  //   پاسخ سرور رو داخل data ذخیره میکنه
  .then((data) => {
    const list = document.getElementById("product-list");

    // یک حلقه برای تموم آیتم های data یعنی همون محصولات
    // و بعد هر محصول رو میریزه داخل product
    data.forEach((product) => {
      const div = document.createElement("div");
      div.className =
        "product bg-white rounded-xl shadow-md p-4 flex flex-col items-center";

      const img = document.createElement("img");
      img.src = product.images[0]?.src || "";
      img.className = "w-32 h-32 object-cover mb-2 rounded";
      div.appendChild(img);

      const name = document.createElement("div");
      name.textContent = product.name;
      name.className = "text-lg font-semibold mb-1 text-center";
      div.appendChild(name);

      const price = document.createElement("div");
      price.textContent = `قیمت: ${product.price} تومان`;
      price.className = "text-gray-700 text-sm";
      div.appendChild(price);

      list.appendChild(div);
    });
  })
  .catch((error) => {
    console.error("خطا", error);
  });
