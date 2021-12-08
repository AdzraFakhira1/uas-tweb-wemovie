import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="text-center py-3">
            <p>&copy; 2021 <Link to="/wemovie" className="font-medium hover:text-color1 transition-colors">WeMovie</Link> - <a className="hover:text-color1 transition-colors" href="https://instagram.com/adzrafkhra">Adzra Fakhira</a></p>
        </footer>
    )
}
