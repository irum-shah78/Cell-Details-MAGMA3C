import cellImage from "../assets/images/cellImage.jpg"

const Details = () => {
  return (
    <>
    <section className="container col-8 rounded border border-dark-subtle bg-white">
      <div className="row">
        <div className="col-lg 2 col-12">
          <img src={cellImage} alt="Tecno Camon"/>
          <h2 className="fw-bold mt-2" style={{color: '#8B0000'}}>Rs. 159,000</h2>
        </div>
      </div>
    </section>
    </>
  )
}

export default Details;