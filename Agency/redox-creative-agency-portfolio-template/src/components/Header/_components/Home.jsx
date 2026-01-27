import { useState } from 'react';
import { Link } from 'react-router-dom';
import { lightVersion, darkVersion, portfolio, portfolioDark } from '../../../utils/appData';  

const Home = () => {
  const [previewImage, setPreviewImage] = useState(lightVersion[0].image);
  const [previewName, setPreviewName] = useState(lightVersion[0].name);
  const [previewBadge, setPreviewBadge] = useState(lightVersion[0].badge);

  const handleItemHover = (item) => {
    setPreviewImage(item.image);
    setPreviewName(item.name);
    setPreviewBadge(item.badge);
  };

  const ColumnSection = () => (
    <div className="columns-1 md:columns-4 gap-6 space-y-4">
      {/* Light Version Column */}
      <div className="break-inside-avoid">
        <h3 className="text-sm font-semibold text-white mb-3">Light Version</h3>
        <hr className='border-neutral-700' />

        <div className="space-y-1">
          {lightVersion.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="block py-2 px-3 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors duration-200"
              onMouseEnter={() => handleItemHover(item)}
            >
              <div className="flex items-center justify-between">
                <span className="truncate">{item.name}</span>
                {item.badge && (
                  <span className={`text-xs px-2 py-1 rounded ${
                    item.badge === "Exclusive" 
                      ? "bg-orange-500 text-white" 
                      : "bg-green-500 text-white"
                  }`}>
                    {item.badge}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Dark Version Column */}
      <div className="break-inside-avoid">
        <h3 className="text-sm font-semibold text-white mb-2 flex items-center">
          Dark Version
          <span className="ml-2 text-xs px-2 py-1 bg-zinc-800 rounded text-orange-400">
            Dark
          </span>
        </h3>
        <hr className='border-neutral-700' />

        <div className="space-y-1">
          {darkVersion.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="block py-2 px-3 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors duration-200"
              onMouseEnter={() => handleItemHover(item)}
            >
              <div className="flex items-center justify-between">
                <span className="truncate">{item.name}</span>
                {item.badge && (
                  <span className={`text-xs px-2 py-1 rounded ${
                    item.badge === "Exclusive" 
                      ? "bg-orange-500 text-white" 
                      : "bg-green-500 text-white"
                  }`}>
                    {item.badge}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Portfolio Column */}
      <div className="break-inside-avoid">
        <h3 className="text-sm font-semibold text-white mb-3">Portfolio</h3>
        <hr className='border-neutral-700' />
        <div className="space-y-1">
          {portfolio.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="block py-2 px-3 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors duration-200"
              onMouseEnter={() => handleItemHover(item)}
            >
              <div className="flex items-center justify-between">
                <span className="truncate">{item.name}</span>
                {item.badge && (
                  <span className={`text-xs px-2 py-1 rounded ${
                    item.badge === "Exclusive" 
                      ? "bg-orange-500 text-white" 
                      : "bg-green-500 text-white"
                  }`}>
                    {item.badge}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Portfolio Dark Column */}
      <div className="break-inside-avoid">
        <h3 className="text-sm font-semibold text-white mb-2 flex items-center">
          Portfolio Dark
          <span className="ml-2 text-xs px-2 py-1 bg-zinc-800 rounded text-orange-400">
            Dark
          </span>
        </h3>
        <hr className='border-neutral-700' />
        <div className="space-y-1">
          {portfolioDark.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="block py-2 px-3 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors duration-200"
              onMouseEnter={() => handleItemHover(item)}
            >
              <div className="flex items-center justify-between">
                <span className="truncate">{item.name}</span>
                {item.badge && (
                  <span className={`text-xs px-2 py-1 rounded ${
                    item.badge === "Exclusive" 
                      ? "bg-orange-500 text-white" 
                      : "bg-green-500 text-white"
                  }`}>
                    {item.badge}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4">
      <div className="md:w-[1000px] grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Preview Column - Hidden on mobile, shown on desktop */}
        <div className="hidden md:block md:col-span-1">
          <h3 className="text-sm font-semibold text-white mb-3">Preview</h3>
          <div className="rounded-lg overflow-hidden border border-neutral-700 bg-neutral-800">
            <img 
              src={previewImage} 
              alt={previewName}
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-white truncate">
                  {previewName}
                </span>
                {previewBadge && (
                  <span className={`text-xs px-2 py-1 rounded ${
                    previewBadge === "Exclusive" 
                      ? "bg-orange-500 text-white" 
                      : "bg-green-500 text-white"
                  }`}>
                    {previewBadge}
                  </span>
                )}
              </div>
              <p className="text-xs text-neutral-400">
                Hover over items to preview
              </p>
            </div>
          </div>
        </div>

        {/* Content Columns */}
        <div className="md:col-span-4">
          <ColumnSection />
        </div>

        {/* Mobile Preview */}
        <div className="md:hidden mt-4 p-3 bg-neutral-800 rounded-lg">
          <h3 className="text-sm font-semibold text-white mb-2">Current Preview</h3>
          <div className="flex items-center space-x-3">
            <img 
              src={previewImage} 
              alt={previewName}
              className="w-16 h-12 object-cover rounded"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-white truncate">
                  {previewName}
                </span>
                {previewBadge && (
                  <span className={`text-xs px-2 py-1 rounded ${
                    previewBadge === "Exclusive" 
                      ? "bg-orange-500 text-white" 
                      : "bg-green-500 text-white"
                  }`}>
                    {previewBadge}
                  </span>
                )}
              </div>
              <p className="text-xs text-neutral-400 truncate">
                Tap items to see details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;