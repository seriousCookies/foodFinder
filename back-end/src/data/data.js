const fs = require("fs");
const fetch = require("node-fetch");
require("dotenv").config({
  path: require("path").resolve(__dirname, "../../.env"),
});

const productPages = [
  "https://platform-rest-prod.ngdata.no/api/products/1300/7080000886050?page=1&page_size=540&full_response=true&fieldset=maximal&facets=Category%2CAllergen&facet=Categories%3ABakeri&showNotForSale=true",
  "https://platform-rest-prod.ngdata.no/api/products/1300/7080000886050?page=1&page_size=1000&full_response=true&fieldset=maximal&facets=Category%2CAllergen&facet=Categories%3AMiddagstilbeh%C3%B8r&showNotForSale=true",
  "https://platform-rest-prod.ngdata.no/api/products/1300/7080000886050?page=1&page_size=420&full_response=true&fieldset=maximal&facets=Category%2CAllergen&facet=Categories%3ABakevarer%20og%20kjeks&showNotForSale=true",
  "https://platform-rest-prod.ngdata.no/api/products/1300/7080000886050?page=1&page_size=42&full_response=true&fieldset=maximal&facets=Category%2CAllergen&facet=Categories%3ABarneprodukter%3BShoppingListGroups%3ABarnemat&showNotForSale=true",
  "https://platform-rest-prod.ngdata.no/api/products/1300/7080000886050?page=1&page_size=42&full_response=true&fieldset=maximal&facets=Category%2CAllergen&facet=Categories%3ABarneprodukter%3BShoppingListGroups%3AMorsmelkerstatning&showNotForSale=true",
  "https://platform-rest-prod.ngdata.no/api/products/1300/7080000886050?page=1&page_size=42&full_response=true&fieldset=maximal&facets=Category%2CAllergen&facet=Categories%3ABarneprodukter%3BShoppingListGroups%3ABarnekjeks&showNotForSale=true",
  "https://platform-rest-prod.ngdata.no/api/products/1300/7080000886050?page=1&page_size=42&full_response=true&fieldset=maximal&facets=Category%2CAllergen&facet=Categories%3ABarneprodukter%3BShoppingListGroups%3ABarnegr%C3%B8t&showNotForSale=true",
  "https://platform-rest-prod.ngdata.no/api/products/1300/7080000886050?page=1&page_size=42&full_response=true&fieldset=maximal&facets=Category%2CAllergen&facet=Categories%3ABarneprodukter%3BShoppingListGroups%3ABarnedessert&showNotForSale=true",
  "https://platform-rest-prod.ngdata.no/api/products/1300/7080000886050?page=1&page_size=302&full_response=true&fieldset=maximal&facets=Category%2CAllergen&facet=Categories%3ADessert&showNotForSale=true",
  "https://platform-rest-prod.ngdata.no/api/products/1300/7080000886050?page=1&page_size=1100&full_response=true&fieldset=maximal&facets=Category%2CAllergen&facet=Categories%3ADrikke&showNotForSale=true",
  "https://platform-rest-prod.ngdata.no/api/products/1300/7080000886050?page=1&page_size=300&full_response=true&fieldset=maximal&facets=Category%2CAllergen&facet=Categories%3AOst&showNotForSale=true",
  "https://platform-rest-prod.ngdata.no/api/products/1300/7080000886050?page=1&page_size=800&full_response=true&fieldset=maximal&facets=Category%2CAllergen&facet=Categories%3AMiddag&showNotForSale=true",
  "https://platform-rest-prod.ngdata.no/api/products/1300/7080000886050?page=1&page_size=400&full_response=true&fieldset=maximal&facets=Category%2CAllergen&facet=Categories%3AMeieri%20%26%20egg&showNotForSale=true",
  "https://platform-rest-prod.ngdata.no/api/products/1300/7080000886050?page=1&page_size=420&full_response=true&fieldset=maximal&facets=Category%2CAllergen&facet=Categories%3AKj%C3%B8tt&showNotForSale=true",
  "https://platform-rest-prod.ngdata.no/api/products/1300/7080000886050?page=1&page_size=202&full_response=true&fieldset=maximal&facets=Category%2CAllergen&facet=Categories%3AFisk&showNotForSale=true",
  "https://platform-rest-prod.ngdata.no/api/products/1300/7080000886050?page=1&page_size=400&full_response=true&fieldset=maximal&facets=Category%2CAllergen&facet=Categories%3AFrukt%20%26%20gr%C3%B8nt&showNotForSale=true",
  "https://platform-rest-prod.ngdata.no/api/products/1300/7080000886050?page=1&page_size=700&full_response=true&fieldset=maximal&facets=Category%2CAllergen&facet=Categories%3AP%C3%A5legg%20%26%20frokost&showNotForSale=true",
  "https://platform-rest-prod.ngdata.no/api/products/1300/7080000886050?page=1&page_size=600&full_response=true&fieldset=maximal&facets=Category%2CAllergen&facet=Categories%3ASnacks%20%26%20godteri&showNotForSale=true",
];

function getData() {
  productPages.forEach((page, i) =>
    fetch(page, {
      headers: {
        accept: "*/*",
        "accept-language":
          "en-US,en;q=0.9,nb-NO;q=0.8,nb;q=0.7,zh-CN;q=0.6,zh;q=0.5,zh-TW;q=0.4,no;q=0.3,eo;q=0.2",
        "cache-control": "no-cache",
        "content-type": "application/json",
        "fwc-browser-name": "Chrome",
        "fwc-browser-platform": "Win32",
        "fwc-browser-version": "87.0.4280.88",
        "fwc-chain-id": "1300",
        "fwc-framework-versions": '"unknown"',
        "fwc-using-api-key": "false",
        "fwc-using-bearer-token": "false",
        "fwc-using-csrf-token": "true",
        pragma: "no-cache",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "x-csrf-token": "f7b56c5f-ad19-40ad-81c7-4646a7fad29f",
      },
      referrer: "https://meny.no/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "omit",
    })
      .then(
        (res) =>
          new Promise((resolve, reject) => {
            const dest = fs.createWriteStream(`./${i}data.json`);
            res.body.pipe(dest);
            res.body.on("end", () => resolve("it worked"));
            dest.on("error", reject);
          })
      )
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  );
}
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.DATABASE_URL;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
function cleanData() {
  for (let i = 0; i < 18; i++) {
    fs.readFile(`./back-end/${i}data.json`, "utf8", function (err, data) {
      //check read and write paths are correct
      let rawData = JSON.parse(data);
      let parsedData = rawData.hits.hits; //check correct parsing
      parsedData = JSON.stringify(parsedData);
      fs.writeFile(`./${i}data.json`, parsedData, (err) => {
        console.log(parsedData.length, "it works");
      });
    });
  }
}

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    const db = client.db("FoodDatabase");
    const col = db.collection("meny");
    // Construct a document
    for (let idx = 8; idx < 18; idx++) {
      const product = await JSON.parse(
        fs.readFileSync(`./${idx}data.json`, "utf-8")
      );
      if (product && product.length > 0) {
        await col.insertMany(product);
      }
      console.log(`${product.length} data inserted, #${idx}`);
      //process.exit();
    }
  } catch (e) {
    console.log(e, "error occurred");
    process.exit();
  }
}
run().catch(console.dir);
