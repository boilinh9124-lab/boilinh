const shortCodes = [
  'xga690m',
  '925qgck',
  '86ttj7q',
  'f9hz1b1',
  'w3ar5os',
  'ym4q01e',
  'exwj65j',
  '26shv3h',
  't3rt0hl',
  'mli0djc',
  'mhrmyix',
  'rdz66b5',
  'n9yoeee'
];

async function resolveAll() {
  const results = {};
  for (const code of shortCodes) {
    const apiUrl = `https://dr-api.encurtador.dev/encurtamentos/${code}`;
    try {
      const res = await fetch(apiUrl);
      if (res.status === 200) {
        const data = await res.json();
        results[code] = data.url;
        console.log(`Resolved [${code}]:`, data.url);
      } else {
        console.log(`Failed [${code}] status:`, res.status);
      }
    } catch (err) {
      console.log(`Error [${code}]:`, err.message);
    }
  }
}
resolveAll();
