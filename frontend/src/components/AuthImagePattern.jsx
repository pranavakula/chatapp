const AuthImagePattern = ({ title, subtitle }) => {
    return (
      <div className="hidden lg:flex items-center justify-center bg-[#0f172a] p-12 min-h-screen">
        <div className="max-w-md text-center text-white">
          {/* Animated Grid */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={`aspect-square rounded-2xl ${
                  i % 2 === 0
                    ? "bg-primary/50 animate-pulse"
                    : "bg-primary/20"
                }`}
              />
            ))}
          </div>
  
          {/* Heading and Subtitle */}
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-300">{subtitle}</p>
        </div>
      </div>
    );
  };
  
  export default AuthImagePattern;
  