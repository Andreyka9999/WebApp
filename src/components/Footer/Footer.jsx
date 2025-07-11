export default function Footer() {
  return (
    <footer className="w-full bg-white border-t shadow py-4 mt-12">
      <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MyHomePage. All Rights reserved.
      </div>
    </footer>
  )
}

