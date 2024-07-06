import cellImage from "../assets/images/cellImage.jpg"

const Details = () => {
  return (
    <>
    <section className="container col-8 rounded border border-dark-subtle bg-white mt-4">
      <div className="row">
        <div className="col-lg 2 col-12 mt-2">
          <img src={cellImage} alt="Tecno Camon"/>
          <h2 className="fw-bold mt-2" style={{color: '#8B0000'}}>Rs. 159,000</h2>
          <div className="d-flex items-center">
            <p>MORE IMAGES</p>
            <div className="rounded-circle bg-dark-subtle text-center ms-2" style={{height: '28px', width: '32px'}}><i class="fa-solid fa-arrow-right" style={{color: "#000000"}}></i></div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Details;