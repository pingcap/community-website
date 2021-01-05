const fs = require('fs')
const axios = require('axios')

async function downloadBySIGName(SIGName) {
  const apiLearningMaterials = `https://raw.githubusercontent.com/pingcap/community/master/special-interest-groups/sig-${SIGName}/README.md`
  try {
    const responseLearningMaterials = await axios.get(apiLearningMaterials)
    const apiDataLearningMaterials = responseLearningMaterials.data || {}
    writeFile(`../../markdown-pages/SIGReadme`, `${SIGName}.md`, apiDataLearningMaterials)
  } catch (e) {
    console.error('downloadBySIGName error', e)
  }
}

async function getAllSIGName() {
  const api = 'https://bots.tidb.io/ti-community-bot/sigs'
  const response = await axios.get(api)
  const items = response.data.data.sigs || []
  return items.map(item => item.name)
}

async function downloadAll() {
  const SIGNames = await getAllSIGName()
  console.log('getAllSIGName', SIGNames)
  for (const SIGName of SIGNames) {
    console.log('downloadBySIGName started', SIGName)
    await downloadBySIGName(SIGName)
    console.log('downloadBySIGName completed', SIGName)
  }
}

function writeFile(path, filename, content) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true })
  }
  fs.writeFile(`${path}/${filename}`, content, { 'flag': 'a' }, err => console.error('fs.writeFile err: ', err))
}


downloadAll().then(data => console.log(data))
