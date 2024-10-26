import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} 计算器中心. 保留所有权利.
          </p>
        </div>
        <div className="flex justify-center space-x-6 md:order-2">
          <Link to="/about" className="text-gray-400 hover:text-gray-500">
            关于我们
          </Link>
          <Link to="/contact" className="text-gray-400 hover:text-gray-500">
            联系我们
          </Link>
          <Link to="/privacy" className="text-gray-400 hover:text-gray-500">
            隐私政策
          </Link>
        </div>
      </div>
    </footer>
  );
}