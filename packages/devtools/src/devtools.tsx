// eslint-disable-next-line import/no-unresolved
import html from 'url:./index.html'

chrome.devtools.panels.create(
  '🔵 SignalDB',
  null,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  html.split('/').pop(),
)

function IndexDevtools() {
  return (
    <h2>
      Welcome to SignalDB Developer Tools
    </h2>
  )
}

export default IndexDevtools
