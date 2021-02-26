import { Link } from "react-router-dom"

const NotFound = () => {
  return ( 
    <div className="not-found">
      <div className="content-404">
        <h2>Maaf</h2>
        <p>Halaman yang Anda cari tidak ditemukan</p>
        <Link to="/" className="back-home">Kembali ke Home</Link>
      </div>
    </div>
   );
}
 
export default NotFound;