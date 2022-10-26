function importAll(r) {
	let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
	return images
}

const images = importAll(require.context('./illustrations', false, /\.(png|jpe?g|svg)$/));

const ImportAllImages = () => {
  return (
    Object.keys(images).map((key) => (
      <div className="break-inside-avoid">
        <img className="w-full" src={images[key]} alt={key} />
      </div>
    ))
  )
}

export default ImportAllImages