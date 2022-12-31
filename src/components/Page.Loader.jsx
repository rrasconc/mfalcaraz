export function PageLoader() {
  return (
    <div className="h-screen bg-primaryBlue flex flex-1 justify-center items-center">
      <h1 className="text-white text-2xl">
        Building <span className="animate-loadingDot1">.</span>
        <span className="animate-loadingDot2 opacity-0">.</span>
        <span className="animate-loadingDot3 opacity-0">.</span>
      </h1>
    </div>
  );
}
