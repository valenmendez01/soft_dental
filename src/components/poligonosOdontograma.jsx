
const poligonosOdontograma = () => {
  return (
    <div>
      <svg height="100" width="100" viewBox="0 0 100 100">
          {/* <!-- Agrupamos los elementos a rotar --> */}
          <g transform="rotate(45, 50, 50)">
              {/* <!-- Segmento superior izquierdo --> */}
              <path d="M 50 50 L 50 25 A 25 25 0 0 0 25 50 Z" fill="white" stroke="black"/>
              {/* <!-- Segmento superior derecho --> */}
              <path d="M 50 50 L 75 50 A 25 25 0 0 0 50 25 Z" fill="white" stroke="black"/>
              {/* <!-- Segmento inferior derecho --> */}
              <path d="M 50 50 L 50 75 A 25 25 0 0 0 75 50 Z" fill="white" stroke="black"/>
              {/* <!-- Segmento inferior izquierdo --> */}
              <path d="M 50 50 L 25 50 A 25 25 0 0 0 50 75 Z" fill="white" stroke="black"/>
              {/* <!-- Vertical Line (part of the cross) --> */}
              <line x1="50" y1="25" x2="50" y2="75" stroke="black"/>
              {/* <!-- Horizontal Line (part of the cross) --> */}
              <line x1="25" y1="50" x2="75" y2="50" stroke="black"/>
          </g>
          {/* <!-- Círculo central --> */}
          <circle cx="50" cy="50" r="14" fill="red" stroke="black" />
      </svg>
    </div>
  )
}

export default poligonosOdontograma