/**
 * 
 * @returns YYYY / MM / DD
 */
export const formatDate = (datetime: Date) => {
  const yearStr = String(datetime.getFullYear())

  const month = datetime.getMonth() + 1
  const monthStr = month < 10 ? '0' + month : month

  const day = datetime.getDate()
  const dayStr = day < 10 ? '0' + day : day

  return `${yearStr} / ${monthStr} / ${dayStr}`
}
