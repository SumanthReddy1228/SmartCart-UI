import Price from "./Price";
export default function ProductCard({ product }) {
  return (
    <div className="mx-auto flex w-72 flex-col overflow-hidden rounded-md border border-gray-300 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-darkline dark:bg-darkcard dark:shadow-none dark:hover:border-light/40">
      <div className="relative h-72 w-full border-b border-gray-300 bg-lighter dark:border-darkline dark:bg-darkbd">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>
      <div className="relative h-48 p-4 flex flex-col font-primary">
        <h2 className="mb-2 text-xl font-semibold text-primary dark:text-lighter">
          {product.name}
        </h2>
        <p className="mb-4 text-base text-gray-600 dark:text-darkmuted">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <div className="rounded-tl-md bg-lighter px-4 py-2 text-sm font-medium text-primary ring-1 ring-primary/10 dark:bg-primary/20 dark:text-light dark:ring-light/10">
            <Price currency="$" price={product.price} />
          </div>
        </div>
      </div>
    </div>
  );
}
