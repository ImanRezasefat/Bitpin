export const Card = ({ market }: any) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-semibold text-gray-800">{market.title}</h2>
      <p className="text-gray-600">{market.title_fa}</p>
      <p className="mt-2 text-gray-500">Code: {market.code}</p>
    </div>
  );
};
