export default function SkeletonCard(){

  return (
    <div className="animate-pulse bg-white rounded-xl p-4">

      <div className="h-60 bg-gray-200 rounded"></div>

      <div className="mt-4 h-4 bg-gray-200 w-2/3"></div>

      <div className="mt-2 h-4 bg-gray-200 w-1/3"></div>

    </div>
  );
}