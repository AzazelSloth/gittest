export default function Footer() {
  return (
    <footer className="bg-gray-200 h-24 flex items-center justify-center">
      <p className="text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} My App. All rights reserved.
      </p>
    </footer>
  );
}
