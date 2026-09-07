const SkeletonCard = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-md h-full">
      <div className="p-5 flex flex-col gap-3 h-full animate-pulse">
        {/* Title skeleton */}
        <div className="h-6 sm:h-7 bg-muted rounded-md w-3/4 mb-1"></div>
        <div className="h-6 sm:h-7 bg-muted rounded-md w-1/2"></div>
        
        {/* Date skeleton */}
        <div className="flex items-center gap-2 mt-2">
          <div className="w-4 h-4 rounded-full bg-muted shrink-0"></div>
          <div className="h-4 bg-muted rounded-md w-1/3"></div>
        </div>

        {/* Description skeleton */}
        <div className="mt-3 flex-1 space-y-2">
          <div className="h-3 sm:h-4 bg-muted rounded-md w-full"></div>
          <div className="h-3 sm:h-4 bg-muted rounded-md w-11/12"></div>
          <div className="h-3 sm:h-4 bg-muted rounded-md w-full"></div>
          <div className="h-3 sm:h-4 bg-muted rounded-md w-4/5"></div>
        </div>

        {/* Bottom Actions skeleton */}
        <div className="mt-6 pt-3 flex items-center justify-between border-t border-border/50">
          <div className="h-4 sm:h-5 bg-muted rounded-md w-20"></div>
          <div className="h-8 sm:h-9 bg-muted rounded-xl w-28 sm:w-32 ml-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
