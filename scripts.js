/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {"/":"/","deepl":"https://deepl.com/","reddit":"https://reddit.com/","maps":"https://maps.google.com/"}
const engine = "google"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  google: "https://www.google.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
}

const isWebUrl = value => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = value => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  return engineUrls[engine] + value
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */

const bookmarks = [{"id":"daqKlBnhhjeQCvJX","label":"school","bookmarks":[{"id":"Oza1iNNHoNGo3QZq","label":"Blackboard","url":"https://mymasonportal.gmu.edu/ultra"},{"id":"PoLe5rz8YErw2QPG","label":"zyBooks","url":"https://learn.zybooks.com/library"}]},{"id":"Vxr8rKdq6on2iyQy","label":"personal","bookmarks":[{"id":"mCz9L89h9DGP4v5G","label":"Calendar","url":"calendar.google.com"},{"id":"XMsKX5JJR0rwsoxN","label":"Github","url":"https://github.com"},{"id":"9PbrUjzZfa83KlHZ","label":"Drive","url":"https://drive.google.com"},{"id":"78SroxrofoPF5YMj","label":"Hack The Box","url":"https://www.hackthebox.com/"}]},{"id":"sBdemKBwvdTHWBhc","label":"media","bookmarks":[{"id":"IjfglOkv6KaqBoHa","label":"Youtube","url":"https://youtube.com"},{"id":"XbAPuBvnheCP9EHV","label":"Twitch","url":"https://twitch.tv"},{"id":"dXumV8b9Qc7MsYsE","label":"Reddit","url":"https://reddit.com"}]},{"id":"fmTqZvKywsIoliSS","label":"misc","bookmarks":[{"id":"gKDxFUQrPaZoyMBY","label":"Youtube Studio","url":"https://studio.youtube.com"},{"id":"JywcEGWMOVSmPXqH","label":"gif","url":"https://designyoutrust.com/2019/05/the-chill-and-retro-motion-pixel-art-of-motocross-saito/"},{"id":"OJXj3ywKaG4OiaPy","label":"@startpage","url":"https://prettycoffee.github.io/startpage"},{"id":"gxhJhjfO3nDk9NVm","label":"author","url":"https://prettycoffee.github.io/"}]}]



// const bookmarks = [{"id":"MkF5AnK7lFN9SVE0","label":"college","bookmarks":[{"id":"EhIT1yYHNZUJ5n1B","label":"Blackboard","url":"https://mymasonportal.gmu.edu/"},{"id":"fs4UJMHWucbegfJ0","label":"zyBooks","url":"https://learn.zybooks.com/signin"},{"id":"E2usC74RLieWEOJH","label":"Outlook","url":"https://outlook.office.com/mail/?actSwt=true"},{"id":"DxtOvZEtdCQuD1Xa","label":"OneDrive","url":"https://gmuedu-my.sharepoint.com/personal/ygautam2_gmu_edu/_layouts/15/onedrive.aspx"}]},{"id":"O3F5PfEolVqCiPtr","label":"personal","bookmarks":[{"id":"iEK9LzvYNVgohrPH","label":"Calendar","url":"https://calendar.google.com/calendar/u/0/r"},{"id":"eRc6EoohMcVirkGx","label":"Github","url":"https://www.github.com"},{"id":"eRc6EoohMcVirkGz","label":"Drive","url":"https://drive.google.com/drive/u/0/my-drive"}]},{"id":"DqAMQIq2wIVAKUF2","label":"media","bookmarks":[{"id":"FnHM9TVSLqICrgaW","label":"Youtube","url":"https://youtube.com"},{"id":"4SJCIQkFTV57t116","label":"Twitch","url":"https://twitch.tv"}]}]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = title => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = bookmarks => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks")
  bookmarksContainer.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer.append(group))
}

injectBookmarks()
