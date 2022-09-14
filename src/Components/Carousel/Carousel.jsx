export function Carousel() {
  return (
    <div>
      <div className="carousel">
        <div className="carousel-inner">
          <input
            className="carousel-open"
            type="radio"
            id="carousel-1"
            name="carousel"
            aria-hidden="true"
            hidden=""
            checked="checked"
          />
          <div className="carousel-item" />
          <img src="http://fakeimg.pl/2000x800/0079D8/fff/?text=Without" />
        </div>
        <input
          className="carousel-open"
          type="radio"
          id="carousel-2"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div className="carousel-item">
          <img src="http://fakeimg.pl/2000x800/DA5930/fff/?text=JavaScript" />
        </div>
        <input
          className="carousel-open"
          type="radio"
          id="carousel-3"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div className="carousel-item">
          <img src="http://fakeimg.pl/2000x800/F90/fff/?text=Carousel" />
        </div>
        <label forHtml="carousel-3" className="carousel-control prev control-1">
          {'<'}
        </label>
        <label forHtml="carousel-1" className="carousel-control prev control-2">
          {'<'}
        </label>
        <label forHtml="carousel-3" className="carousel-control next control-2">
          {'<'}
        </label>
        <label forHtml="carousel-2" className="carousel-control prev control-3">
          {'<'}
        </label>
        <label forHtml="carousel-2" className="carousel-control next control-1">
          {'<'}
        </label>
        <label forHtml="carousel-1" className="carousel-control next control-3">
          {'<'}
        </label>
        <ol className="carousel-indicators">
          <li>
            <label forHtml="carousel-1" className="carousel-bullet">
              •
            </label>
          </li>
          <li>
            <label forHtml="carousel-2" className="carousel-bullet">
              •
            </label>
          </li>
          <li>
            <label forHtml="carousel-3" className="carousel-bullet">
              •
            </label>
          </li>
        </ol>
      </div>
    </div>
  )
}
