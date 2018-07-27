const daysUntilChristmas = () => {
  const today = new Date()
  const Christmas = new Date(today.getFullYear(), 11, 25)

  // Handler to allow for 26th - 31st December
  if(today.getMonth() == 11 && today.getDate() > 25) {
    Christmas.setFullYear(Christmas.getFullYear() + 1)
  }

  const oneDay = 1000*60*60*24
  return Math.ceil((Christmas.getTime() - today.getTime()) / oneDay)
}