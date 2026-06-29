import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "./site-header";

type Session = { user: string; role: "user" | "admin" };

type IngredientRecord = {
  "Recipe Name": string;
  "Ingredients' Name": string;
  "Ingredient List": string;
  "Product Contains": string;
  "Product May Contain": string;
  Origin: string;
  "Recipe Brand": string;
  "Week Start Day": string;
};

const COLUMNS: (keyof IngredientRecord)[] = [
  "Recipe Name",
  "Ingredients' Name",
  "Ingredient List",
  "Product Contains",
  "Product May Contain",
  "Origin",
  "Recipe Brand",
  "Week Start Day",
];

const mockData = JSON.parse(`[{"Recipe Name":"'Cheesy' Grilled Capsicum Gnocchi with Almonds and Vegan Cheddar","Ingredients' Name":"Almonds Slivered Nuts","Ingredient List":"Almonds","Product Contains":"Almond","Product May Contain":"Brazil Nut, Cashew, Crustacean, Egg, Fish, Gluten, Hazelnut, Lupin, Macadamia, Milk, Mollusc, Peanut, Pecan, Pine Nut, Pistachio, Sesame, Soy, Sulphites, Walnut, Wheat","Origin":"100","Recipe Brand":"ms","Week Start Day":"29/06/2026"},{"Recipe Name":"'Cheesy' Grilled Capsicum Gnocchi with Almonds and Vegan Cheddar","Ingredients' Name":"Baby Spinach Leaves","Ingredient List":"Baby Spinach Leaves","Product Contains":"","Product May Contain":"","Origin":"100","Recipe Brand":"ms","Week Start Day":"29/06/2026"},{"Recipe Name":"'Cheesy' Grilled Capsicum Gnocchi with Almonds and Vegan Cheddar","Ingredients' Name":"Dried Oregano","Ingredient List":"Oregano","Product Contains":"","Product May Contain":"Almond, Brazil Nut, Cashew, Crustacean, Egg, Fish, Gluten, Hazelnut, Lupin, Macadamia, Milk, Mollusc, Peanut, Pecan, Pine Nut, Pistachio, Sesame, Soy, Sulphites, Walnut, Wheat","Origin":"0","Recipe Brand":"ms","Week Start Day":"29/06/2026"},{"Recipe Name":"'Cheesy' Grilled Capsicum Gnocchi with Almonds and Vegan Cheddar","Ingredients' Name":"Garlic Cloves Skin On","Ingredient List":"Garlic","Product Contains":"","Product May Contain":"","Origin":"0","Recipe Brand":"ms","Week Start Day":"29/06/2026"},{"Recipe Name":"'Cheesy' Grilled Capsicum Gnocchi with Almonds and Vegan Cheddar","Ingredients' Name":"Gnocchi Pasta","Ingredient List":"Potato Mash (75%) {Water, Potato Flake (34%) [Potatoes (99%), Stabiliser (450), Preservative (222) (Sulphites)], Potato Starch (6%)}, Wheat Flour, Rice Flour, Salt, Pepper\\nPotato Puree (80%) (Water, Potato Flakes), Wheat Flour, Salt, Natural Flavourings, Rice Flour, Food Acid (270), Preservative (200)","Product Contains":"Gluten, Sulphites, Wheat","Product May Contain":"Cashew, Peanut, Pine Nut","Origin":"24","Recipe Brand":"ms","Week Start Day":"29/06/2026"},{"Recipe Name":"'Cheesy' Grilled Capsicum Gnocchi with Almonds and Vegan Cheddar","Ingredients' Name":"Gnocchi Pertutti Pasta","Ingredient List":"Potato Mash (75%) {Water, Potato Flakes (34%) [Potatoes (99%), Emulsifier (471), Stabiliser (450), Antioxidants (330, 304), Preservative (222) (Sulphite)], Potato Starch (6%), Wheat Flour, Salt, Pepper","Product Contains":"Gluten, Sulphites, Wheat","Product May Contain":"Cashew, Peanut, Pine Nut","Origin":"24","Recipe Brand":"ms","Week Start Day":"29/06/2026"},{"Recipe Name":"'Cheesy' Grilled Capsicum Gnocchi with Almonds and Vegan Cheddar","Ingredients' Name":"Onion Brown","Ingredient List":"Onion","Product Contains":"","Product May Contain":"","Origin":"100","Recipe Brand":"ms","Week Start Day":"29/06/2026"},{"Recipe Name":"'Cheesy' Grilled Capsicum Gnocchi with Almonds and Vegan Cheddar","Ingredients' Name":"Red Capsicum","Ingredient List":"Red Capsicum","Product Contains":"","Product May Contain":"","Origin":"100","Recipe Brand":"ms","Week Start Day":"29/06/2026"},{"Recipe Name":"'Cheesy' Grilled Capsicum Gnocchi with Almonds and Vegan Cheddar","Ingredients' Name":"Tomato Paste Sachets","Ingredient List":"Tomato Paste (98%), Salt, Food Acid (Citric)","Product Contains":"","Product May Contain":"","Origin":"0","Recipe Brand":"ms","Week Start Day":"29/06/2026"},{"Recipe Name":"'Cheesy' Grilled Capsicum Gnocchi with Almonds and Vegan Cheddar","Ingredients' Name":"Tomatoes Diced","Ingredient List":"Diced Tomatoes (61%), Tomato Juice","Product Contains":"","Product May Contain":"","Origin":"0","Recipe Brand":"ms","Week Start Day":"29/06/2026"},{"Recipe Name":"'Cheesy' Grilled Capsicum Gnocchi with Almonds and Vegan Cheddar","Ingredients' Name":"Vegan Cheddar-Style Shreds Cheese","Ingredient List":"Water, Coconut Oil (21%) (Non-Hydrogenated), Starch, Modified Starch (E1404, E1450), Sea Salt, Vegan Cheddar Flavour, Olive Extract, Colour: Beta Carotene","Product Contains":"","Product May Contain":"Almond, Brazil Nut, Cashew, Crustacean, Egg, Fish, Gluten, Hazelnut, Lupin, Macadamia, Milk, Mollusc, Peanut, Pecan, Pine Nut, Pistachio, Sesame, Soy, Sulphites, Walnut, Wheat","Origin":"0","Recipe Brand":"ms","Week Start Day":"29/06/2026"},{"Recipe Name":"'Green Goddess' Falafel Bowls with Couscous Tabouleh and Pistachios","Ingredients' Name":"Avocado","Ingredient List":"Avocado","Product Contains":"","Product May Contain":"","Origin":"0","Recipe Brand":"ms","Week Start Day":"06/07/2026"},{"Recipe Name":"'Green Goddess' Falafel Bowls with Couscous Tabouleh and Pistachios","Ingredients' Name":"Couscous","Ingredient List":"Durum Wheat Semolina\\n","Product Contains":"Gluten, Wheat","Product May Contain":"Almond, Brazil Nut, Cashew, Crustacean, Egg, Fish, Hazelnut, Lupin, Macadamia, Milk, Mollusc, Peanut, Pecan, Pine Nut, Pistachio, Sesame, Soy, Sulphites, Walnut","Origin":"0","Recipe Brand":"ms","Week Start Day":"06/07/2026"},{"Recipe Name":"'Green Goddess' Falafel Bowls with Couscous Tabouleh and Pistachios","Ingredients' Name":"Cucumber Lebanese","Ingredient List":"Lebanese Cucumber","Product Contains":"","Product May Contain":"","Origin":"100","Recipe Brand":"ms","Week Start Day":"06/07/2026"},{"Recipe Name":"'Green Goddess' Falafel Bowls with Couscous Tabouleh and Pistachios","Ingredients' Name":"Falafel Green","Ingredient List":"Chickpea (46%), Onion, Chickpea Flour (6%), Canola Oil, Garlic, Coriander, Corn Starch, Parsley, Mint, Salt, Baking Powder (Contains Emulsifiers (450, 500)), Spinach, Preservative (202), Black Pepper, Chilli Flakes, Coriander Ground, Cumin Ground","Product Contains":"","Product May Contain":"Gluten, Milk, Sesame, Soy","Origin":"91","Recipe Brand":"ms","Week Start Day":"06/07/2026"},{"Recipe Name":"'Green Goddess' Falafel Bowls with Couscous Tabouleh and Pistachios","Ingredients' Name":"Garlic Cloves Skin On","Ingredient List":"Garlic","Product Contains":"","Product May Contain":"","Origin":"0","Recipe Brand":"ms","Week Start Day":"06/07/2026"},{"Recipe Name":"'Green Goddess' Falafel Bowls with Couscous Tabouleh and Pistachios","Ingredients' Name":"Mint","Ingredient List":"Mint","Product Contains":"","Product May Contain":"","Origin":"100","Recipe Brand":"ms","Week Start Day":"06/07/2026"},{"Recipe Name":"'Green Goddess' Falafel Bowls with Couscous Tabouleh and Pistachios","Ingredients' Name":"Parsley Continental","Ingredient List":"Parsley","Product Contains":"","Product May Contain":"","Origin":"100","Recipe Brand":"ms","Week Start Day":"06/07/2026"},{"Recipe Name":"'Green Goddess' Falafel Bowls with Couscous Tabouleh and Pistachios","Ingredients' Name":"Pistachios Nuts","Ingredient List":"Pistachios","Product Contains":"Pistachio","Product May Contain":"Almond, Brazil Nut, Cashew, Crustacean, Egg, Fish, Gluten, Hazelnut, Lupin, Macadamia, Milk, Mollusc, Peanut, Pecan, Pine Nut, Sesame, Soy, Sulphites, Walnut, Wheat","Origin":"0","Recipe Brand":"ms","Week Start Day":"06/07/2026"},{"Recipe Name":"'Green Goddess' Falafel Bowls with Couscous Tabouleh and Pistachios","Ingredients' Name":"Tomatoes Salad","Ingredient List":"Tomato","Product Contains":"","Product May Contain":"","Origin":"100","Recipe Brand":"ms","Week Start Day":"06/07/2026"},{"Recipe Name":"10-Min Malaysian Chicken and Cashew Curry with Jasmine Rice and Coriander","Ingredients' Name":"Baby Spinach Leaves","Ingredient List":"Baby Spinach Leaves","Product Contains":"","Product May Contain":"","Origin":"100","Recipe Brand":"ms","Week Start Day":"08/06/2026"},{"Recipe Name":"10-Min Malaysian Chicken and Cashew Curry with Jasmine Rice and Coriander","Ingredients' Name":"Baby Spinach Leaves","Ingredient List":"Baby Spinach Leaves","Product Contains":"","Product May Contain":"","Origin":"100","Recipe Brand":"ms","Week Start Day":"29/06/2026"},{"Recipe Name":"10-Min Malaysian Chicken and Cashew Curry with Jasmine Rice and Coriander","Ingredients' Name":"Baby Spinach Leaves","Ingredient List":"Baby Spinach Leaves","Product Contains":"","Product May Contain":"","Origin":"100","Recipe Brand":"ms","Week Start Day":"06/07/2026"},{"Recipe Name":"10-Min Malaysian Chicken and Cashew Curry with Jasmine Rice and Coriander","Ingredients' Name":"Baby Spinach Leaves","Ingredient List":"Baby Spinach Leaves","Product Contains":"","Product May Contain":"","Origin":"100","Recipe Brand":"ms","Week Start Day":"13/07/2026"},{"Recipe Name":"10-Min Malaysian Chicken and Cashew Curry with Jasmine Rice and Coriander","Ingredients' Name":"Cashew Unsalted Roasted Nuts","Ingredient List":"Cashews, Vegetable Oil","Product Contains":"Cashew","Product May Contain":"Almond, Brazil Nut, Crustacean, Egg, Fish, Gluten, Hazelnut, Lupin, Macadamia, Milk, Mollusc, Peanut, Pecan, Pine Nut, Pistachio, Sesame, Soy, Sulphites, Walnut, Wheat","Origin":"0","Recipe Brand":"ms","Week Start Day":"08/06/2026"},{"Recipe Name":"10-Min Malaysian Chicken and Cashew Curry with Jasmine Rice and Coriander","Ingredients' Name":"Cashew Unsalted Roasted Nuts","Ingredient List":"Cashews, Vegetable Oil","Product Contains":"Cashew","Product May Contain":"Almond, Brazil Nut, Crustacean, Egg, Fish, Gluten, Hazelnut, Lupin, Macadamia, Milk, Mollusc, Peanut, Pecan, Pine Nut, Pistachio, Sesame, Soy, Sulphites, Walnut, Wheat","Origin":"0","Recipe Brand":"ms","Week Start Day":"29/06/2026"},{"Recipe Name":"10-Min Malaysian Chicken and Cashew Curry with Jasmine Rice and Coriander","Ingredients' Name":"Cashew Unsalted Roasted Nuts","Ingredient List":"Cashews, Vegetable Oil","Product Contains":"Cashew","Product May Contain":"Almond, Brazil Nut, Crustacean, Egg, Fish, Gluten, Hazelnut, Lupin, Macadamia, Milk, Mollusc, Peanut, Pecan, Pine Nut, Pistachio, Sesame, Soy, Sulphites, Walnut, Wheat","Origin":"0","Recipe Brand":"ms","Week Start Day":"06/07/2026"}]`)

async function getIngredients(): Promise<IngredientRecord[]> {
  return mockData;
}

export default async function Ingredients() {
  const sessionCookie = (await cookies()).get("session");
  const isAdmin = sessionCookie
    ? (JSON.parse(sessionCookie.value) as Session).role === "admin"
    : false;

  let records: IngredientRecord[] = [];
  let error: string | null = null;
  try {
    records = await getIngredients();
  } catch (e) {
    error = e instanceof Error ? e.message : "Failed to load ingredient data";
  }

  return (
    <>
      <SiteHeader />

      {/* Admin banner (sticky, directly below the header) */}
      {isAdmin && (
        <div className="sticky top-16 z-30 border-b border-emerald-200 bg-emerald-50">
          <div className="mx-auto max-w-6xl px-4 py-2 text-sm font-medium text-emerald-800 sm:px-6">
            Logged in as administrator
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
        <h1 className="text-2xl font-semibold text-neutral-900">Ingredients</h1>

        {error ? (
          <div className="mt-6 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            Could not load ingredient data: {error}
          </div>
        ) : (
          <>
            <p className="mt-2 text-sm text-neutral-500">
              {records.length.toLocaleString()} rows
            </p>

            <div className="mt-6 overflow-x-auto rounded-lg border border-black/10">
              <table className="min-w-full divide-y divide-black/10 text-left text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    {COLUMNS.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="whitespace-nowrap px-3 py-2 font-medium text-neutral-700"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                  {records.map((record, index) => (
                    <tr key={index} className="align-top hover:bg-neutral-50">
                      {COLUMNS.map((column) => (
                        <td
                          key={column}
                          className="px-3 py-2 text-neutral-700"
                        >
                          {record[column]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </main>

      {/* Footer (public) */}
      <footer className="border-t border-black/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <Image
              src="/logo-marley-spoon.svg"
              alt="Marley Spoon"
              width={143}
              height={30}
            />
            <nav className="flex flex-wrap gap-6">
              <Link href="#" className="text-sm text-neutral-700 hover:underline">
                About us
              </Link>
              <Link href="#" className="text-sm text-neutral-700 hover:underline">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-neutral-700 hover:underline">
                Ingredient Hub
              </Link>
            </nav>
          </div>
          <p className="mt-6 border-t border-black/10 pt-6 text-sm text-neutral-500">
            2026 © MMM Consumer Brands Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
