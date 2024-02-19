function Card({url}) {
  return (
    <div className="rounded-lg overflow-hidden max-h-30 max-w-30 flex">
      <img src={url}/>
    </div>
  )
}

export default Card