import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [hisse, setHisse] = useState("");
  const [adet, setAdet] = useState("");
  const [gün, setGün] = useState("");
  const [kar, setKar] = useState();
  const [tavan, setTavan] = useState([]);

  const hesap = () => {
    const maaliyet = parseFloat(hisse) * adet;
    let hisseTfiyat = parseFloat(hisse);
    let artis = 0;
    for (var i = 0; i < parseFloat(gün); i++) {
      artis = (hisseTfiyat / 100) * 9.97;
      hisseTfiyat += artis;
    }
    setKar(hisseTfiyat * parseFloat(adet) - maaliyet);

    const tavanFiyatlar = [];
    hisseTfiyat = parseFloat(hisse);
    for (var j = 0; j < 10; j++) {
      artis = (hisseTfiyat / 100) * 9.97;
      hisseTfiyat += artis;
      tavanFiyatlar.push(hisseTfiyat);
      
    }
    setTavan(tavanFiyatlar);
    setHisse("");
      setAdet("");
      setGün("");
  };

  return (
    <>
      <div className="container main">
        <h2 className="text-center mt-4 mb-4 bg-danger text-white pt-3 pb-3 ">
          Hisse Kar Hesaplama
        </h2>
        <div className="row">
          <div className="form-control border-0">
            <div>
              <label htmlFor="">Hisse Fiyatı</label>
              <input
                required
                className="input-group mb-3 col-md-3  rounded "
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Fiyat")}
                type="text"
                value={hisse}
                onChange={(e) => setHisse(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">Hisse Lot Sayısı</label>
              <input
                required
                className="input-group mb-3  rounded"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Adet")}
                type="text"
                value={adet}
                onChange={(e) => setAdet(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">Hisse Tavan Sayısı</label>
              <input
                required
                className=" input-group mb-4   rounded"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Tavan")}
                type="text"
                value={gün}
                onChange={(e) => setGün(e.target.value)}
              />
            </div>
            <div>
              <button
                className="btn btn-primary input-group mb-3  rounded"
                onClick={() => hesap()}>
                Hesapla
              </button>
            </div>
            <div>
              <label htmlFor="">Hisse Toplam Kar Fiyatı</label>
              <input
                required
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Kar")}
                className="input-group mb-3  rounded"
                type="text"
                value={kar?.toFixed(0)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="bg-success text-center mb-3 mt-3 text-white pt-3 pb-3">
          İlk 10 Gün Tavan Fiyatları
        </h2>

        {tavan.map((fiyat, index) => (
          <input
            className="col-md-12 input-group mb-3  rounded"
            type="text"
            key={index}
            value={`${index + 1}.Gün ${fiyat.toFixed(2)}`}
            onChange={(e)=>setTavan(e.target.value)}

          />
        ))}
      </div>
    </>
  );
}

export default App;
